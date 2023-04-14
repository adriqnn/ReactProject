const profileController = require('express').Router();

const { getUserById } = require('../services/userService');
const { parseError } = require('../util/parser');

profileController.get('/:id', async (req, res) => {
    try{
        const user = await getUserById(req.params.id);
        res.json(user);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

module.exports = profileController;