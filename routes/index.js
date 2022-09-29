var express = require('express');
var router = express.Router();
const pageCtrl = require('../controllers/home')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'My Express Skills Page' });
});

router.get('/', pageCtrl.index)

module.exports = router;
