const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    date: {
        type: Date
    },
    symbol: {
        type: String,
        required: true
    },
    open: {
        type: Number,
        required: true
    },
    close: {
        type: Number,
        required: true
    },
    low: {
        type: Number,
        required: true
    },
    high: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    }
}, {collection:'DataDump'});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;
