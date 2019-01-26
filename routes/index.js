const express = require('express');
//const csv = require('csvtojson');
const csv = require('fast-csv');
var async = require('asyncawait/async');
var await = require('asyncawait/await');

const router = express.Router();

let Data = require('../models/Data')
router.get('/', (req,res) => res.render('index'));
router.get('/search', (req,res) => res.render('search', {msg:''}));

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


    //console.log(symbs);


});

router.get('/stock/:sym', (req,res) => {
    var name = req.params.sym;
    (async (function(reqt, rest) {
      var user = [];
      var proj = {
          _id: false,
          symbol: false
      };
      await (Data.find({symbol: name}, proj, function(err,pro){
          //user.push(pro);
          res.render('stock', {
              stock: pro,
              name: name
          })
      }));
      //console.log(user); //it's define
        //res.send(user);
    }))();
});

router.get('/find', (req,res) => {
    //console.log(req.query.stock);
    //Data.count({symbol:req.query.stock}, function(err, c) {
    //});
    //res.send(n);
    var st = (req.query.stock).toUpperCase();
    (async (function(reqt, rest) {

      await (Data.count({symbol: st}, function(err,pro){
         if(pro != 0) {
             res.redirect('/stock/' + st);
         } else {
            res.render('search', {
                msg: 'No Stock Found!'
            });
         }
      }));
      //console.log(user); //it's define
        //res.send(user);
    }))();
});
router.get('/verify', (req,res) => {
    var cnt = 0;
    function getDistinct(name) {
        var query = Data.find().distinct('symbol').exec();
        return query;
    }
    var query = getDistinct('hello');
    query.then(function (sym) {
        sym.forEach(function (s) {
            //console.log(s);
            stockList.push(s);
        })
    });
    setTimeout(() => res.send(stockList + stockList.length),5000);
    console.log(stockList);
    /*Data.find({symbol:'WLTW'}, function(err, stock) {
        if(err) {
            console.log(err);
        } else {
            console.log(stock);
        }
    });*/
});


module.exports = router;
