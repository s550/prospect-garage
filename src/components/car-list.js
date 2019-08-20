import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MicrolinkCard from '@microlink/react';


const Car = props => (
        <div className="card">
        {/* <h3>{props.car.car_name}</h3> */}
        <div className="card-image">
        <figure className="image">
        <MicrolinkCard 
        url={props.car.car_link}
        size='large'
        // style='width: 100%'
        />
        </figure>
        </div>
        <div className="card-content">
        <div className="media">
        <div className="media-content">
        <p className="title">{props.car.car_name}</p>
        <p className="subtitle">{props.car.car_year}</p>
        </div>
        </div>
        <div className="content">
            <ul>
                <li>Price: ${props.car.car_price}</li>
                <li>Miles: {props.car.car_miles}</li>
                <li>Location: {props.car.car_location}</li>
            </ul>
        </div>
        </div>
        {/* <img src={ props.car.car_link } alt=""/> */}
        <footer className="card-footer">
        <Link to={"/edit/"+props.car._id} className='button is-primary card-footer-item'>Edit</Link>
        <Link to={"/delete/"+props.car._id} className="button is-danger card-footer-item">Delete</Link>
        </footer>
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