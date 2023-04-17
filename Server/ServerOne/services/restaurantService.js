const { Types } = require('mongoose');

const Restaurant = require('../models/Restaurant');
const { getUserById } = require('./userService');

async function getAllRestaurants(){
    return Restaurant.find({}).sort({_id: 1});
};

async function createRestaurant(restaurant){
    return await Restaurant.create(restaurant);
};

async function countRestaurants(){
    return await Restaurant.count();
};

async function getById(id){
    if(Types.ObjectId.isValid(id)){
        return await Restaurant.findById(id);
    }else{
        return undefined;
    };
};

async function updateById(restaurantId, restaurant){
    const existing = await Restaurant.findById(restaurantId);
    existing.name = restaurant.name;
    existing.address = restaurant.address;
    existing.description = restaurant.description;
    existing.rating = restaurant.rating;
    return await existing.save();
};

async function deleteById(id){
    return Restaurant.findByIdAndDelete(id);
};

async function createRequestRestaurant(restaurant){
    const owner = await getUserById(restaurant.owner);
    const newRestaurant = {
        name: restaurant.name,
        address: restaurant.address,
        description: restaurant.description,
        picture: '/assets/pictures/main/restaurant.png',
        rating: restaurant.rating,
        owner: owner._id
    };

    return await Restaurant.create(newRestaurant)
};

module.exports = {
    getAllRestaurants,
    createRestaurant,
    countRestaurants,
    getById,
    updateById,
    deleteById,
    createRequestRestaurant
};