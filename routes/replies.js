var express = require('express');
var router = express.Router();
var repliesCtrl = require('../controllers/replies')

router.post('/posts/:id/replies', repliesCtrl.create)
router.delete('/replies/:id', repliesCtrl.delete)

module.exports = router;
