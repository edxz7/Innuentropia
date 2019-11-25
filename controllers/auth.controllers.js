const User = require('../models/User');
const passport = require('passport');

exports.signupGet = (req, res, next) => {
  res.render('register-form');
}

exports.signupPost = async (req, res, next) => {
  const {} = req.body;
  const user = User.create({}, password);


}