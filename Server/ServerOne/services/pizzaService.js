const Pizza = require('../models/Pizza');
const { Types } = require('mongoose');
const { getAdmin, getUserId } = require('./userService');
const { getPizzaIngredientByName } = require('./pizzaIngredientService');

async function getAllPizzas(){
    return Pizza.find({}).sort({_id: 1}).populate('ingredients');
};

async function createPizzaForDB(pizza){
    const ingredients = pizza.ingredients;
    const ownerId = await getAdmin();
    const saved = await Promise.all(ingredients.map(e => getPizzaIngredientByName(e)));
    pizza.ingredients = saved;
    pizza.owner = ownerId;
    return await Pizza.create(pizza);
};

async function createPizza(pizza){
    return await Pizza.create(pizza);
};

async function countPizzas(){
    return await Pizza.count();
};

async function getById(id){
    if(Types.ObjectId.isValid(id)){
        return await Pizza.findById(id).populate('ingredients');
    }else{
        return undefined;
    };
};

async function deleteById(id){
    return Pizza.findByIdAndDelete(id);
};

async function createRequestPizza(item){
    const name = item.main.name;
    const existing = await Pizza.findOne({name}).collation({locale: 'en', strength: 2});
    if(existing){
        throw new Error('Pizza name already in the Database!');
    };
    const helper = [];
    helper.push(item.main.dough);
    const ingredients = Object.values(item.secondary).filter(e => e != '').map(e => helper.push(e));
    const saved = await Promise.all(helper.map(e => getPizzaIngredientByName(e)));
    const owner = await getUserId(item.owner);
    const pizza = {
        name: item.main.name,
        weight: item.main.weight,
        picture: '/assets/pictures/pizzas/pizza.png',
        description: item.main.description,
        ingredients: saved,
        owner: owner._id
    };
    return await Pizza.create(pizza);
};

async function getPizzasByUserId(id){
    return await Pizza.find({owner: id});
};

module.exports = {
    getAllPizzas,
    createRequestPizza,
    createPizzaForDB,
    createPizza,
    countPizzas,
    getById,
    deleteById,
    getPizzasByUserId
};