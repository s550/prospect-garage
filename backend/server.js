const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const carRoutes = express.Router();
const PORT = 4000;



app.use(cors());
app.use(bodyParser.json());
app.use('/cars', carRoutes);

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
mongoose.connect('mongodb://127.0.0.1:27017/cars', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => console.log("MongoDB database connection established successfully"));

app.listen(PORT, () => console.log('Server is running on port: ' + PORT));