const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Car = new Schema({
    car_name: {
        type: String
    },
    car_miles: {
        type: String
    },
    car_price: {
        type: String
    },
    car_location: {
        type: String
    },
    car_link: {
        type: String
    },
    car_year: {
        type: Number
    },
    car_availible: {
        type: Boolean
    }
});

module.exports = mongoose.model('Car', Car);