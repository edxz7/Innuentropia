exports.checkUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.app.locals.logged = true;
    req.app.locals.user_id = req.user._id;
  } else {
    req.app.locals.logged = false;
  }
  return next();
};

exports.isAuth = (req, res, next) => {
  req.isAuthenticated() ? next() : res.redirect("/");
};