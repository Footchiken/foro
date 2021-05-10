const express = require('express');
const router = express.Router();
const post = require('../data');

router.get('/', (req, res) => {
    res.render('../views/home/index.hbs');
});

router.get('/addpost', (req, res) => {
    res.render('../views/home/addpost.hbs');
});

router.post('/addpost', (req, res) => {
    console.log(req.body);
    res.render('../views/home/index.hbs', post);
});

module.exports = router;
