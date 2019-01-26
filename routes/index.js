const express = require('express');
const csv = require('fast-csv');
var async = require('asyncawait/async');
var await = require('asyncawait/await');

const router = express.Router();

let Data = require('../models/Data')

router.get('/', (req,res) => res.render('index'));

router.get('/search', (req,res) => res.render('search', {msg:''}));

router.get('/graph_search', (req,res) => res.render('graph_search', {msg:''}));

router.get('/allstocks', (req,res) => {
    (async ((reqt, rest) => {
      await (Data.find().distinct('symbol',(err,pro) => {
          res.render('allstocks', {
              stocks: pro
          })
      }));
    }))();
});

router.get('/stock/:sym', (req,res) => {
    var name = req.params.sym;
    (async ((reqt, rest) => {
      var user = [];
      var proj = {
          _id: false,
          symbol: false
      };
      await (Data.find({symbol: name}, proj, (err,pro) => {
          res.render('stock', {
              stock: pro,
              name: name
          })
      }));
    }))();
});

router.get('/graph/:sym', (req,res) => {
    var name = req.params.sym;
    (async ((reqt, rest) => {
      var user = [];
      var proj = {
          _id: false,
          symbol: false,
      };
      await (Data.find({symbol: name}, proj, (err,pro) => {
          res.render('graph', {
              stock: pro,
              name: name
          })
      }));
    }))();
});

router.get('/dfind', (req,res) => {
    var st = (req.query.stock).toUpperCase();
    (async ((reqt, rest) => {

      await (Data.count({symbol: st}, (err,pro) => {
         if(pro != 0) {
             res.redirect('/stock/' + st);
         } else {
            res.render('search', {
                msg: 'No Stock Found!'
            });
         }
      }));
    }))();
});

router.get('/gfind', (req,res) => {
    var st = (req.query.stock).toUpperCase();
    (async ((reqt, rest) => {

      await (Data.count({symbol: st}, (err,pro) => {
         if(pro != 0) {
             res.redirect('/graph/' + st);
         } else {
            res.render('search', {
                msg: 'No Stock Found!'
            });
         }
      }));
    }))();
});

router.get('/about', (req,res) => {
    res.render('profile');
});

module.exports = router;
