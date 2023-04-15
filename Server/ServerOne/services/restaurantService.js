const { Types } = require('mongoose');

const Restaurant = require('../models/Restaurant');

async function getAllRestaurants(){
    return Restaurant.find({}).sort({_id: 1}).populate('comments').populate('owner');
};

async function createRestaurant(restaurant){
    return await Restaurant.create(restaurant);
};

async function countRestaurants(){
    return await Restaurant.count();
};

async function getById(id){
    if(Types.ObjectId.isValid(id)){
        return await Restaurant.findById(id).populate('owner');
    }else{
        return undefined;
    };
};

async function deleteById(id){
    return Restaurant.findByIdAndDelete(id);
};

async function createRequestRestaurant(restaurant){
    const name = item.name;
    return await Restaurant.create(restaurant)
};

module.exports = {
    getAllRestaurants,
    createRestaurant,
    countRestaurants,
    getById,
    deleteById,
    createRequestRestaurant
};