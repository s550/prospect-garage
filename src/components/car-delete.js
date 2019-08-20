import React, { Component } from 'react';
import axios from 'axios';

class DeleteCar extends Component{
    constructor(props){
        super(props);
        this.onDelete = this.onDelete.bind(this);

        this.state ={
            car_name: '',
            car_miles: '',
            car_price: '',
            car_location: '',
            car_link: '',
            car_year: '',
            car_avalible: true
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/cars/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                car_name: response.data.car_name,
                car_miles: response.data.car_miles,
                car_price: response.data.car_price,
                car_location: response.data.car_location,
                car_link: response.data.car_link,
                car_year: response.data.car_year
            })
        })
        .catch(err => console.log(err))
    }
    onDelete(e){
        e.preventDefault();
        axios.get("http://localhost:4000/cars/delete/"+this.props.match.params.id)
            .then(console.log("Car Deleted"))
            .catch(err => console.log(err))
    }
    render(){
        return(
            <button onClick={this.onDelete} className="button is-danger card-footer-item">Delete</button>
        );
    }
};


export default DeleteCar;