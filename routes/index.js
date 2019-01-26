const express = require('express');
//const csv = require('csvtojson');
const csv = require('fast-csv');
const router = express.Router();

let Data = require('../models/Data')
router.get('/', (req,res) => res.send('hello'));

router.get('/verify', (req,res) => {
    var cnt = 0;
    Data.find({symbol:'WLTW'}, function(err, stock) {
        if(err) {
            console.log(err);
        } else {
            console.log(stock);
        }
    });
});

router.get('/sample', (req,res) => {
    const tmp = new Data();
    tmp.data = "2016-01-05";
    tmp.symbol = "sample";
    tmp.open = 123.0;
    tmp.close = 127.0;
    tmp.low = 123.0;
    tmp.high = 127.0;
    tmp.volume = 100;

    tmp
        .save()
        .then(d => console.log('success'));

});

module.exports = router;
