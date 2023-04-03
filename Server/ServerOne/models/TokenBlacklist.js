const {Schema, model} = require('mongoose');

const tokenBlacklistSchema = new Schema({
    token:{
        type: String
    }
},{ timestamps: { createdAt: 'created_at'}});

const TokenBlacklist = model('TokenBlacklist', tokenBlacklistSchema);
module.exports = TokenBlacklist;