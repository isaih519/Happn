var express = require('express');
var router = express.Router();
var repliesCtrl = require('../controllers/replies')

router.post('/posts/:id/replies', postsCtrl.create)
router.delete('/replies/:id', postsCtrl.delete)

module.exports = router;
