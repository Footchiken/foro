const express = require('express');
const router = express.Router();

/* 
const con = require('../');
*/

router.get('/addcard', (req, res) => {
   res.render('cards/addcard');
   console.log('asd');
});



module.exports = router;
