// models/Car.js

const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    make: String,
    model: String,
    type: String,
    broken: Boolean,
    registered: Date
}, 
{
    timestamps: true
});

module.exports = Car = mongoose.model('car', CarSchema);