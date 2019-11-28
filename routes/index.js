const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('login', {
    script: 'login'
  });
});

// router.get('/signup-f', (req, res, next) => {
//   res.render('signupForm', {
//     script: 'signupForm'
//   });
// });

// router.post("/profile", (req, res, next) => {
//   res.render("profile", {
//     script: "profile"
//   });
// });
































//pruebas front//
// router.get('/profile', (req, res, next) => {
//   res.render('profile');
// });

module.exports = router;