var express = require('express');
var router = express.Router();
let { read, create, update, remove } = require('../services/jsondb');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(read());
});

router.post('/', function (req, res, next) {
  const { name } = req.body;
  res.send(create({ name }));
});

router.put('/:id', function (req, res, next) {
  const { id } = req.params;
  const { name } = req.body;
  res.send(update({ id, name }));
});

router.delete('/:id', function (req, res, next) {
  const { id } = req.params;
  res.send(remove({ id }));
});

module.exports = router;
