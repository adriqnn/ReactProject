const {Schema, model, Types} = require('mongoose');

const burgerSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'The name must be at least 3 characters long!']
    },
    weight:{
        type: String,
        required: true,
        min: [5, 'The weight must be at least 5 grams!']
    },
    picture:{
        type: String,
        required: true,
        minlength: [3, 'The picture url must be at least 3 characters long!']
    },
    description:{
        type: String,
        required: true,
        minlength: [3, 'The description must be at least 3 characters long!']
    },
    ingredients:{
        type: [Types.ObjectId],
        default: [],
        ref: 'BurgerIngredient',
        required: true
    },
    owner:{
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
},{ timestamps: { createdAt: 'created_at'}});

burgerSchema.index({name: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Burger = model('Burger', burgerSchema);
module.exports = Burger;