const express = require('express');
const router = express.Router();

router.get('/insertdata', (req,res) => res.send('hello'));

module.exports = router;
