const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    res.json({message: "REST Service Operational!"});
});

module.exports = homeController;