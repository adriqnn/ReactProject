const { Types } = require('mongoose');

const Comment = require('../models/Comment');

async function createComment(comment){
    return await Comment.create(comment);
};

module.exports = {
    createComment,
};