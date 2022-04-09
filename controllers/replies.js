const Post = require('../models/post')

module.exports = {
    create,
    delete: deleteReply
}

function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        console.log(req.user)
        req.body.user = req.user._id
        req.body.userName = req.user.name
        post.replies.push(req.body)
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`)
        })
    })
}

function deleteReply(req, res, next) {
    Post.findOne({'replies._id': req.params.id})
    .then(function(post) {
        console.log(req.params.id)
        const reply = post.replies.id(req.params.id)
        console.log(reply)
        if (!reply.user.equals(req.user._id))
        return res.redirect(`/posts/${post._id}`)
        reply.remove()
        post.save()
        .then(function() {
            res.redirect(`/posts/${post._id}`)
        }).catch(function(err) {
            return next(err)
        })
    })
}