const express = require('express');
//const csv = require('csvtojson');
const csv = require('fast-csv');
var async = require('asyncawait/async');
var await = require('asyncawait/await');

const router = express.Router();

let Data = require('../models/Data')
router.get('/', (req,res) => res.render('index'));
router.get('/search', (req,res) => res.render('search'));

router.get('/allstocks', (req,res) => {
    var symbs = [];
    /*Data.find().distinct('symbol', function(err, sym) {
        //console.log(sym);
        //symbs.push(sym);
    });*/

    /*(async (function(reqt, rest) {
      var user = [];
      var proj = {
          _id: false
      };
      await (Data.find({symbol:'A'}, proj,function(err,pro){
          user.push(pro);
      }));
      //console.log(user); //it's define
        res.send(user);
    }))();*/

    (async (function(reqt, rest) {
      var user = [];
      var proj = {
          _id: false
      };
      await (Data.find().distinct('symbol',function(err,pro){
          //user.push(pro);
          res.render('allstocks', {
              stocks: pro
          })
      }));
      //console.log(user); //it's define
        //res.send(user);
    }))();

    /*function getDistinct(name) {
        var query = Data.find().distinct('symbol').exec();
        return query;
    }
    var query = getDistinct('hello');
    query.then(function (sym) {
        sym.forEach(function (s) {
            //console.log(s);
            symbs.push(s);
        })
    });
    setTimeout(() => res.send(symbs),5000);*/
    //console.log(symbs);


});

router.get('/print', (req,res) => {

})

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
