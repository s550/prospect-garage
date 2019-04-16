const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const carRoutes = express.Router();
const PORT = 4000;

let Car = require('./cars.model');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/cars', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => console.log("MongoDB database connection established successfully"));

carRoutes.route('/').get((req,res) => 

Car.find((err,cars) => {
    if(err){
        console.log(err);
    } else {
        res.json(cars);
    }
}
));

carRoutes.route('/:id').get((req,res) =>{
    let id = req.params.id;
    Car.findById(id,(err,car) => res.json(car));
});

carRoutes.route('/add').post((req,res) => {
    let car = new Car(req.body);
    car.save()
        .then(car => {
            res.status(200).json({'car': 'car added successfuly.'});
        })
        .catch(err => {
            res.status(400).json({'car': 'adding new car failed.'});
        });
});

carRoutes.route('/update/:id').post((req,res) => {
    Car.findById(req.params.id, (err,car) => {
        if(!car){
            res.status(404).send("Data cannot be found.");
        } else{
            car.car_name = req.body.car_name;
            car.car_miles = req.body.car_miles;
            car.car_price = req.body.car_price;
            car.car_location = req.body.car_location;
            car.car_link = req.body.car_link;
            car.car_notes = req.body.car_year;
            car.car_availible = req.body.car_availible;
            
            
        }

        car.save()
            .then(car => {
                res.json("Car Listing Updated!");
            })
            .catch(err =>{
                res.status(404).send("Listing Cannot Be Updated..")
            });
    });
});

app.use('/cars', carRoutes);


app.listen(PORT, () => console.log('Server is running on port: ' + PORT));