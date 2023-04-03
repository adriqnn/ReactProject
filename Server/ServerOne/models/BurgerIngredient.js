const {Schema, model} = require('mongoose');

const burgerIngredientSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'The name must be at least 3 characters long!']
    },
    weight:{
        type: Number,
        required: true,
        min: [3, 'The weight must be at least 3 grams!']
    },
    type: {
        type: String,
        required: true,
        enum: ['Buns', 'Sauce', 'Cheese', 'Meat', 'Vegetable', 'Condiment', 'Other'],
        default: 'Other'
    },
    picture:{
        type: String,
        required: true,
        minlength: [3, 'The picture url must be at least 3 characters long!']
    },
    description:{
        type: String,
        required: true,
        minlength: [3, 'The Description must be at least 3 characters long!']
    }
},{ timestamps: { createdAt: 'created_at'}});

burgerIngredientSchema.index({name: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const BurgerIngredient = model('BurgerIngredient', burgerIngredientSchema);
module.exports = BurgerIngredient;