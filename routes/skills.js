var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills"

router.get('/', skillsCtrl.index)

module.exports = router;