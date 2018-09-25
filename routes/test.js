const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Test = require('../models/Test');

router.get('/', (req, res, next) => { 
    Test.find((err, result) => {
        if (err) return next(err);
        res.json(result);
    });
});

router.get('/:id', (req, res, next) => {
    Test.findById(req.params.id, (err, result) => {
        if (err) return next(err);
        res.json(result);
    });
})

router.post('/', (req, res) => {
    Test.create(req.body)
        .then((result) => res.status(200).send(result))
        .catch((err) => res.status(400).send(err)); 
});

router.put('/:id', (req, res, next) => {
    Test.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (err) return next(err);
        res.json(result);
    });
})

router.delete('/:id', (req, res, next) => {
    Test.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) return next(err);
        res.json(result);
    });
})

module.exports = router;