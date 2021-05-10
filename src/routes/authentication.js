const express = require('express');
const router = express.Router();


router.get('/addPost', (req, res) => {
    res.render('../views/home/upPost.hbs');
});


module.exports = router;
