const TokenBlacklist = require('../models/TokenBlacklist');

async function blacklistToken(token){
    return await TokenBlacklist.create({token});
};

module.exports = {
    blacklistToken
};