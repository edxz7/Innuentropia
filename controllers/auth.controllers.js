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
  const { username, email, password } = req.body;
  const userCreated = await User.register(
    { username, email }, password ).catch(err => {
    const templateConfig = {
      action: "/signup",
      title: "Sign up",
      register: true,
      err: "User already exists"
    };
    res.render("register-form", templateConfig);
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

// exports.signupPost = async (req, res, next) => {
//   const { username, email, password } = req.body;
//   console.log(req.body)
//   await User.register( { username, email }, password)
//   .catch(() => {
//     const Config = {
//       action: "/signup",
//       title: "Sign up",
//       register: true,
//       err: "User already exists"
//     };
//     res.render("login", Config);
//   });
//   passport.authenticate("local", (err, user, info) => {
//     if (err) return next(err);
//     if (!user) return res.redirect("/login");
//     req.logIn(user, err => {
//       if (err) return next(err);
//       req.user = user;
//       return res.redirect(`/profile`);
//     });
//   })(req, res, next);
// };

// exports.loginGet = (req, res) => {
//   const templateConfig = {
//     action: "/login",
//     title: "Login",
//     register: false
//   };
//   res.render("login", templateConfig);
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
      return res.render("login", templateConfig);
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
  const { username, description, telephone_number, role, tags } = req.body;
  if (req.file) {
    userUpdated = await User.findByIdAndUpdate(_id, {
      $set: { username, description, telephone_number, photoURL: req.file.secure_url, role, tags }
    });
  } else {
    userUpdated = await User.findByIdAndUpdate(_id, {
      $set: { username, description, telephone_number, role, tags }
    });
  }
  req.user = userUpdated;
  res.redirect(`/profile/${userUpdated._id}`);
};

exports.profileEditGet = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id)
  const events = await Event.find().populate("author").sort({_id:1}).limit(3);
  const projects = await Project.find().populate("author").sort({_id:1}).limit(3);
  res.render("editProfile", { user , events, projects});
};

exports.profileEditPost = async (req, res, next) => {
  let userUpdated;
  const { _id } = req.user;
  const { username, description, telephone_number, role, tags } = req.body;
  if (req.file) {
    userUpdated = await User.findByIdAndUpdate(_id, {
      $set: { username, description, telephone_number, photoURL: req.file.secure_url, role, tags }
    });
  } else {
    userUpdated = await User.findByIdAndUpdate(_id, {
      $set: { username, description, telephone_number, role, tags }
    });
  }
  req.user = userUpdated;
  res.redirect(`/profile/${userUpdated._id}`);
};