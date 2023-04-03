const { getAllPizzas, getById, deleteById, createRequestPizza, getPizzasByUserId } = require('../services/pizzaService');
const { parseError } = require('../util/parser');
const session = require('../middlewares/session');

const pizzaController = require('express').Router();

pizzaController.get('/', async (req, res) => {
    try{
        const pizzas = await getAllPizzas();
        res.json(pizzas);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

pizzaController.get('/:id', async (req, res) => {
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

pizzaController.delete('/delete/:id', session(), async (req, res) => {
    const item = await getById(req.params.id);
    try{
        await deleteById(req.params.id);
        res.status(204).end();
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

pizzaController.post('/create/new', session(), async (req, res) => {
    const item = req.body.pizza;
    try{
        const pizza = await createRequestPizza(item);
        res.status(200).send({pizza});
    }catch(err){
        console.log(err);
        const message = parseError(err);
        res.status(400).json({message});
    };
});

pizzaController.get('/user/:id', session(), async (req, res) => {
    const id = req.params.id;
    try{
        const pizzas = await getPizzasByUserId(id);
        res.status(200).json(pizzas);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    }
});

module.exports = pizzaController;