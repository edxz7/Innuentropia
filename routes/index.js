const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

































//pruebas front//
router.get('/profile', (req, res, next) => {
  res.render('profile');
});

module.exports = router;