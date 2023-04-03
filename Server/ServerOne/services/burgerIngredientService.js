const BurgerIngredient = require('../models/BurgerIngredient');
const { Types } = require('mongoose');

async function getAllBurgerIngredient(){
    return BurgerIngredient.find({}).sort({_id: 1});
};

async function getBurgerIngredientByName(name){
    const ingredient = await BurgerIngredient.findOne({name}).collation({locale: 'en', strength: 2});
    return ingredient._id;
};

async function createBurgerIngredient(burgerIngredient){
    return await BurgerIngredient.create(burgerIngredient);
};

async function countBurgerIngredients(){
    return await BurgerIngredient.count();
};

async function getById(id){
    if(Types.ObjectId.isValid(id)){
        return await BurgerIngredient.findById(id);
    }else{
        return undefined;
    };
};

module.exports = {
    getAllBurgerIngredient,
    getBurgerIngredientByName,
    createBurgerIngredient,
    countBurgerIngredients,
    getById
};