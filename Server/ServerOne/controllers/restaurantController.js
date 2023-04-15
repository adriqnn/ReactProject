const restaurantController = require('express').Router();

const { getAllRestaurants, getById, deleteById, createRequestRestaurant } = require('../services/restaurantService');
const { parseError } = require('../util/parser');
const session = require('../middlewares/session');

restaurantController.get('/', async (req, res) => {
    try{
        const restaurants = await getAllRestaurants();
        res.json(restaurants);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

restaurantController.get('/:id', async (req, res) => {
    try{
        const item = await getById(req.params.id);
        if(!item){
            throw new Error('Item not in the database`');
        }
        res.json(item);
    }catch(err) {
        const message = parseError(err);
        res.status(400).json({message});
    };
});

restaurantController.delete('/delete/:id', session(), async (req, res) => {
    const item = await getById(req.params.id);
    try{
        await deleteById(req.params.id);
        res.status(200).send({message: 'Item Deleted!'});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

restaurantController.post('/create/new', session(), async (req, res) => {
    const item = req.body.restaurant;
    try{
        const restaurant = await createRequestRestaurant(item);
        res.status(200).send({restaurant});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

module.exports = restaurantController;