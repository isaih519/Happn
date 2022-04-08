var express = require('express');
var router = express.Router();
var postsCtrl = require('../posts');

router.get('/', postsCtrl.new);

module.exports = router;