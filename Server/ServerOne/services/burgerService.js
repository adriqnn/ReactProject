const Burger = require('../models/Burger');
const { Types } = require('mongoose');
const { getAdmin, getUserId } = require('./userService');
const { getBurgerIngredientByName } = require('./burgerIngredientService');

async function getAllBurgers(){
    return Burger.find({}).sort({_id: 1}).populate('ingredients');
};

async function createBurgerForDB(burger){
    const ingredients = burger.ingredients;
    const ownerId = await getAdmin();
    const saved = await Promise.all(ingredients.map(e => getBurgerIngredientByName(e)));
    burger.ingredients = saved;
    burger.owner = ownerId;
    return await Burger.create(burger);
};

async function createBurger(burger){
    return await Burger.create(burger);
};

async function countBurgers(){
    return await Burger.count();
};

async function getById(id){
    if(Types.ObjectId.isValid(id)){
        return await Burger.findById(id).populate('ingredients');
    }else{
        return undefined;
    };
};

async function deleteById(id){
    return Burger.findByIdAndDelete(id);
};

async function createRequestBurger(item){
    const name = item.main.name;
    const existing = await Burger.findOne({name}).collation({locale: 'en', strength: 2});
    if(existing){
        throw new Error('Burger name already in the Database!');
    };
    const helper = [];
    helper.push(item.main.bun);
    const ingredients = Object.values(item.secondary).filter(e => e != '').map(e => helper.push(e));
    const saved = await Promise.all(helper.map(e => getBurgerIngredientByName(e)));
    const owner = await getUserId(item.owner);
    const burger = {
        name: item.main.name,
        weight: item.main.weight,
        picture: '/assets/pictures/burgers/burger.png',
        description: item.main.description,
        ingredients: saved,
        owner: owner._id
    };
    return await Burger.create(burger);
};

async function getBurgersByUserId(id){
    return await Burger.find({owner: id});
};

module.exports = {
    getAllBurgers,
    createBurgerForDB,
    createBurger,
    countBurgers,
    getById,
    deleteById,
    createRequestBurger,
    getBurgersByUserId
};