const Role = require('../models/Role');

async function createRole(role){
    return await Role.create(role);
};

async function countRoles(){
    return await Role.count();
};

async function getRoleByName(role){
    const roleByName = await Role.findOne({role}).collation({locale: 'en', strength: 2});
    return roleByName;
}

module.exports = {
    createRole,
    countRoles,
    getRoleByName
};