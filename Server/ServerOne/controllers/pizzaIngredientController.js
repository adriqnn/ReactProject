const { getAllPizzaIngredient, getById } = require('../services/pizzaIngredientService');
const { parseError } = require('../util/parser');
const pizzaIngredientController = require('express').Router();

pizzaIngredientController.get('/', async (req, res) => {
    try{
        const ingredients = await getAllPizzaIngredient();
        res.json(ingredients);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    }
});

pizzaIngredientController.get('/:id', async (req, res) => {
    try{
        const item = await getById(req.params.id);
        if(!item){
            throw new Error('Item not in the database!');
        }
        res.json(item);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

module.exports = pizzaIngredientController;