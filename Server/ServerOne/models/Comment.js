const {Schema, model, Types} = require('mongoose');

const commentSchema = new Schema({
    text:{
        type: String,
        required: true,
        minlength: [3, 'The comment must be at least 3 characters long!']
    }, 
    owner:{
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
},{ timestamps: { createdAt: 'created_at'}});

const Comment = model('Comment', commentSchema);
module.exports = Comment;