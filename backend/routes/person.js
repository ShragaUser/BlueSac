const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        type: 'person'
    })
});

router.get('/_find', (req, res, next) => {
    let idArray = Array.isArray(req.query.id) ? req.query.id : [req.query.id];
    console.log(idArray);
    res.status(200).json({
        type: 'aviv gay'
    })
});

module.exports = router;