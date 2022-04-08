const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const replySchema = new Schema({
    like: {
        type: Boolean,
        required: true
    },
    content: {
      type: String,
      required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: String,
})

// do i need to add a user for who posted it??????? how would i do that
const postSchema = ({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    data: Buffer,
    contentType: String,

    replies: [replySchema]
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema)