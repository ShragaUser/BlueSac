const express = require('express');
const router = express.Router();
const PersonHandler = require('../Handlers/PersonHandler');

router.get('/_find', (req, res, next) => {
    res.status(200).json({
        People: PersonHandler.find(req.query.id)
    })
});

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        Person: PersonHandler.find(req.params.id)
    })
});

module.exports = router;