import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MicrolinkCard from '@microlink/react';

const Car = props => (
        <div className="">
        {/* <h3>{props.car.car_name}</h3> */}
        <MicrolinkCard 
        url={props.car.car_link}
        size='large'
        // style='width: 100%'
        />
        <div className="connector">
            <ul>
                <li>Make/Model: {props.car.car_name}</li>
                <li>Price: {props.car.car_price}</li>
                <li>Miles: {props.car.car_miles}</li>
                <li>Location: {props.car.car_location}</li>
                {/* <li>Notes: {props.car.car_notes}</li> */}
            </ul>
        </div>
        {/* <img src={ props.car.car_link } alt=""/> */}
        <Link to={"/edit/"+props.car._id}>Edit</Link>
        </div>
);

class CarList extends Component {
    constructor(props){
        super(props);
        this.state = {
            cars: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:4000/cars/')
            .then(response => {
                console.log(response);
                this.setState({
                    cars: response.data
                });
            })
            .catch((err) => {
                console.log(err)
            })
    }

    carList(){
        return this.state.cars.map((currentCar, i) =>{
            return <Car car={currentCar} key={i}/>;
        })
    }

    render(){
        return(
            <div className=" top">
                {/* <h3>My Garage</h3> */}
                {this.carList()}
            </div>
        );
    }
  


};

export default CarList;