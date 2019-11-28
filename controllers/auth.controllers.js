const User = require('../models/User');
const Event = require("../models/Event");
const Project = require("../models/Project");
const passport = require('passport');
//Local signup
exports.signupGet = (_, res) => {
  const config = {
    action: "/signup",
    title: "sign up",
    register: true
  };
  res.render("index", config);
};

exports.signupPost = async (req, res, next) => {
  const { username, email, password, telephone_number } = req.body;
  await User.register( { username, email, telephone_number }, password)
  .catch(() => {
    const Config = {
      action: "/signup",
      title: "Sign up",
      register: true,
      err: "User already exists"
    };
    res.render("index", Config);
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.redirect("/login");
    req.logIn(user, err => {
      if (err) return next(err);
      req.user = user;
      return res.redirect(`/profile`);
    });
  })(req, res, next);
};

// exports.loginGet = (req, res) => {
//   const templateConfig = {
//     action: "/login",
//     title: "Login",
//     register: false
//   };
//   res.render("index", templateConfig);
// };

exports.loginPost = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      const templateConfig = {
        action: "/login",
        title: "Login",
        register: false,
        err: "Email or password is incorrect"
      };
      res.redirect('/');
      return res.redirect("index", templateConfig);
    }
    req.logIn(user, err => {
      if (err) return next(err);
      req.user = user;
      return res.redirect("/profile");
    });
  })(req, res, next);
};

exports.logOut = (req, res, next) => {
  req.logout();
  res.redirect("/");
};

//Profile
exports.profileGet = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id)
  const events = await Event.find().populate("author").sort({_id:1}).limit(3);
  const projects = await Project.find().populate("author").sort({_id:1}).limit(3);
  res.render("profile", { user , events, projects});
};

exports.profilePost = async (req, res, next) => {
  let userUpdated;
  const { _id } = req.user;
  // const { username, telephone_number } = req.body;
  if (req.file) {
    userUpdated = await User.findByIdAndUpdate(_id, {
      $set: { username, telephone_number, photoURL: req.file.secure_url }
    });
  } else {
    userUpdated = await User.findByIdAndUpdate(_id, {
      $set: { username, telephone_number }
    });
  }
  req.user = userUpdated;
  res.redirect(`/profile/${userUpdated._id}`);
};