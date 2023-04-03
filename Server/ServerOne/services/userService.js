const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getRoleByName } = require('../services/roleService');
const { blacklistToken } = require('../services/tokenBklacklistService');
const { Types } = require('mongoose');
const JWT_SECRET = 'zxc';

async function createAdmin(){
    const hashedPassword = await bcrypt.hash('admin', 10);
    const adminId = (await getRoleByName('Admin'))._id;
    const userId = (await getRoleByName('User'))._id;
    await User.create({
        username: 'admin',
        email: 'admin@admin.com',
        hashedPassword,
        roles: [adminId, userId],
        createdAt: Date.now()
    });
};

async function getAdmin(){
    const username = 'admin';
    const admin = await User.findOne({username}).collation({locale: 'en', strength: 2});
    return admin._id;
}

async function getUserId(id){
    if(Types.ObjectId.isValid(id)){
        return await User.findById(id);
    }else{
        return undefined;
    };;
};

async function getUserById(id){
    const user = await User.findById(id);
    if(!user){
        throw new Error('You are not logged in!');
    };
    const safeUser = removePassword(user);
    return safeUser;
}

async function countUsers(){
    return await User.count();
};

async function register(username, email, password){
    const existingUsername = await User.findOne({username}).collation({locale: 'en', strength: 2});
    const existingEmail = await User.findOne({email}).collation({locale: 'en', strength: 2});
    if(existingUsername){
        throw new Error('Username is taken!');
    };
    if(existingEmail){
        throw new Error('Email is taken!');
    };
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = (await getRoleByName('User'))._id;
    let user = await User.create({
        username,
        email,
        hashedPassword,
        roles: [userId],
        createdAt: Date.now()
    });
    user = await user.populate('roles');
    const token = createJWTToken(user);
    const safeUser = removePassword(user);
    //safeUser['token'] = token;
    const userInfo = [safeUser, token];
    return userInfo;
};

async function login(username, password){
    const user = await User.findOne({username}).collation({locale: 'en', strength: 2}).populate('roles');
    if(!user){
        throw new Error('Incorrect username or password!');
    };
    const match = await bcrypt.compare(password, user.hashedPassword);
    if(!match){
        throw new Error('Incorrect username or password!');
    };
    const token = createJWTToken(user);
    const safeUser = removePassword(user);
    const userInfo = [safeUser, token];
    return userInfo;
};

async function logout(token){
    return await blacklistToken(token);
};

function createJWTToken({_id, username, email, roles, createdAt}){
    const payload = {
        _id,
        username,
        email,
        role: roles[0],
        createdAt
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
    return token;
};

function verifyTokenAuth(token){
    return jwt.verify(token, JWT_SECRET);
};

const bsonToJson = (data) => { return JSON.parse(JSON.stringify(data)) };
const removePassword = (data) =>{
    const transformData = bsonToJson(data);
    const { hashedPassword, __v, ...userData } = transformData;
    return userData;
};

function parseToken(token){
    // if(tokenBlacklist.has(token)){
    //     throw new Error('Token is blacklisted!');
    // };
    return jwt.verify(token, JWT_SECRET);
};

module.exports = {
    createAdmin,
    getAdmin,
    getUserId,
    countUsers, 
    getUserById,
    register,
    login,
    logout,
    verifyTokenAuth,
    parseToken
};