const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('login', {script: 'login'});
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





/* GET home page */
router.get('/editprofile', (req, res, next) => {
  res.render('editProfile', {
    script: 'editprofilejs'
  });
});

/* GET newProject page */
router.get('/newProject', (req, res) => {
  res.render('newProject', {
    script: 'newProjectjs'
  });
});

module.exports = router;