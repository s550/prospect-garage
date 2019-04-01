const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Car = new Schema({
    car_name: {
        type: String
    },
    car_miles: {
        type: Number
    },
    car_price: {
        type: Number
    },
    car_location: {
        type: String
    },
    car_link: {
        type: String
    },
    car_notes: {
        type: String
    },
    car_availible: {
        type: Boolean
    }
});

module.exports = mongoose.model('Car', Car);