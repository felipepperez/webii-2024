var express = require('express');
var router = express.Router();
let { read, update } = require('../services/jsondb');

/* GET users listing. */
router.get('/', function (req, res, next) {
  const users = read();
  res.render('users', { title: 'Express', users });
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  update(req.body);
  const users = read();
  res.render('users', { title: 'Express', users });
});

module.exports = router;
