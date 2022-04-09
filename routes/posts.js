var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts');
var isLoggedIn = require('../config/auth')

router.get('/', isLoggedIn, postsCtrl.index);
router.get('/', isLoggedIn, postsCtrl.new);

module.exports = router;