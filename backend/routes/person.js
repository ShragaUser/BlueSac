const express = require('express');
const router = express.Router();
const PersonHandler = require('../Handlers/PersonHandler');

router.get('/', (req, res, next) => {
    res.status(200).json({
        type: 'person'
    })
});

router.get('/_find', (req, res, next) => {
    let idArray = Array.isArray(req.query.id) ? req.query.id : [req.query.id];
    idArray = JSON.parse(idArray[0]);
    console.log(idArray);
    res.status(200).json({
        People: PersonHandler._find(idArray)
    })
});

module.exports = router;