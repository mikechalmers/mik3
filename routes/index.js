var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MIK3' });
});

/* GET test template */
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'TEST' });
});

module.exports = router;
