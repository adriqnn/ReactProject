const PizzaIngredient = require('../models/PizzaIngredient');
const { Types } = require('mongoose');

async function getAllPizzaIngredient(){
    return PizzaIngredient.find({}).sort({_id: 1});
};

async function getPizzaIngredientByName(name){
    const ingredient = await PizzaIngredient.findOne({name}).collation({locale: 'en', strength: 2});
    return ingredient._id;
};

async function createPizzaIngredient(pizzaIngredient){
    return await PizzaIngredient.create(pizzaIngredient);
};

async function countPizzaIngredients(){
    return await PizzaIngredient.count();
};

async function getById(id){
    if(Types.ObjectId.isValid(id)){
        return await PizzaIngredient.findById(id);
    }else{
        return undefined;
    };
};

module.exports = {
    getAllPizzaIngredient,
    getPizzaIngredientByName,
    createPizzaIngredient,
    countPizzaIngredients,
    getById
};