const {Schema, model} = require('mongoose');

const roleSchema = new Schema({
    role:{
        type: String,
        required: true,
        unique: true,
        enum: ['Admin', 'User'],
        default: 'User'
    }
},{ timestamps: { createdAt: 'created_at'}});

roleSchema.index({role: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Role = model('Role', roleSchema);
module.exports = Role;