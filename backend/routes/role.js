const path = require('path');
const express = require('express');
const router = express.Router();

const utils = require(path.resolve(__dirname, '../utils/utils.js'));
const dbHandler = require(path.resolve(__dirname, '../Handlers/dbHandler/dbHandler'));
const Role = require(path.resolve(__dirname, '../Handlers/dbHandler/models/roleModel'));

const MODEL_NAME = "Role";

router.get('/', async (req, res, next) => {
    let filter = {};
    if(utils.checkRequest(req, ['filter']))
        filter = req.body.filter;

    let response = await dbHandler.read(MODEL_NAME, filter);
    res.status(response.status).json(response.message);
});

router.post('/', async (req, res, next) => {
    if(utils.checkRequest(req, ['newObj'])) {
        let newRole = new Role(req.body.newObj);
        let response = await dbHandler.create(newRole);
        res.status(response.status).json(response.message)
    } else
        res.status(412).json({ error: 'Bad input'})
});

router.put('/', async (req, res, next) => {
    if(utils.checkRequest(req, ['update', 'filter'])) {
        let update = req.body.update;
        let filter = req.body.filter;
        let response = await dbHandler.update(MODEL_NAME, filter, update);
        res.status(response.status).json(response.message)
    } else
        res.status(412).json({ error: 'Bad input'})
});

router.delete('/', async (req, res, next) => {
    let filter = {};
    if(!utils.checkRequest(req, ['filter']))
        res.status(412).json({ error: 'Bad input'});
    else
        filter = req.body.filter;

    let response = await dbHandler.deleteMany(MODEL_NAME, filter);
    res.status(response.status).json(response.message)
});

module.exports = router;