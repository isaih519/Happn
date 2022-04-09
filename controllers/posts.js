var Post = require('../models/post')

module.exports = {
    index,
    new: newPost,
    create,
    show,
    edit,
    update
}

function index(req, res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', {posts})
    });
};

function newPost(req, res) {
    res.render('posts/new', {title: 'Add Happn'})
}

function create(req, res) {
    var obj = {
        userName: req.body.userName,
        title: req.body.title,
        content: req.body.content,
    }
    Post.create(obj, (err, posts) => {
        if(err) {
            return res.redirect('/posts/new')
        } else {
            posts.save();
            res.redirect('/posts');
        }
    })
};

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/show', {title: post.name, post})
    })
};

function edit(req, res) {
    const post = {id: req.params.id}
    res.render('posts/edit', {post})
};

function update(req, res) {
    Post.findOneAndUpdate({_id: req.params.id}, req.body, {new: true} , function(err, post) {
        if (err)
            return res.redirect('/posts/edit')
            res.redirect(`/posts/${post._id}`)
    });
};