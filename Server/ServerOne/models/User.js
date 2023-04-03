const {Schema, model, Types} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'The username must be at least 3 characters long!']
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'The email must be at least 3 characters long!']
    },
    hashedPassword:{
        type: String,
        required: true,
        minlength: [3, 'The password must be at least 3 characters long!']
    },
    roles:{
        type: [Types.ObjectId],
        default: [],
        ref: 'Role',
        required: true
    },
    createdAt:{
        type: String,
        required: true
    }
},{ timestamps: { createdAt: 'created_at'}});

userSchema.index({username: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

userSchema.index({email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

userSchema.methods = {
    matchPassword: function(password){
        return bcrypt.compare(password, this.password);
    }
};

const User = model('User', userSchema);
module.exports = User;