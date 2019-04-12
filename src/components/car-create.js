import React, { Component } from 'react';
import { EEXIST } from 'constants';
import axios from 'axios';

class CreateCar extends Component {
    constructor(props){
        super(props);

        this.onChangeCarName = this.onChangeCarName.bind(this);
        this.onChangeCarMiles = this.onChangeCarMiles.bind(this);
        this.onChangeCarPrice = this.onChangeCarPrice.bind(this);
        this.onChangeCarLocation = this.onChangeCarLocation.bind(this);
        this.onChangeCarLink = this.onChangeCarLink.bind(this);
        this.onChangeCarNotes = this.onChangeCarNotes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            car_name: '',
            car_miles: '',
            car_price: '',
            car_location: '',
            car_link: '',
            car_notes: '',
            car_avalible: true
        }
    }

    onChangeCarName(e){
        this.setState({
            car_name: e.target.value
        });
        // sets car name to value entered
    }
    onChangeCarMiles(e){
        this.setState({
            car_miles: e.target.value
        });
        // sets car miles to value entered
    }
    onChangeCarPrice(e){
        this.setState({
            car_price: e.target.value
        });
        // sets car price to value entered
    }
    onChangeCarLocation(e){
        this.setState({
            car_location: e.target.value
        });
        // this.props.onSearch();
    }
    onChangeCarLink(e){
        this.setState({
            car_link: e.target.value
        });
        // this.props.onSearch();
    }
    onChangeCarNotes(e){
        this.setState({
            car_notes: e.target.value
        });
        // this.props.onSearch();
    }
    onSubmit(e){
       e.preventDefault();
       console.log(`Form Submitted:`);
       console.log(`car_name: ${this.state.car_name}`);
       console.log(`car_miles: ${this.state.car_miles}`);
       console.log(`car_price: ${this.state.car_price}`);
       console.log(`car_location: ${this.state.car_location}`);
       console.log(`car_link: ${this.state.car_link}`);

        const newCar = {
            car_name: this.state.car_name,
            car_miles: this.state.car_miles,
            car_price: this.state.car_price,
            car_location: this.state.car_location,
            car_link: this.state.car_link,
            car_notes: this.state.car_notes,
            car_avalible: this.state.car_avalible
        };

        axios.post("http://localhost:4000/cars/add", newCar)
            .then(res => 
                console.log(res.data));

       this.setState({
        car_name: '',
        car_miles: '',
        car_price: '',
        car_location: '',
        car_link: '',
        car_notes: '',
        car_avalible: true
       })
    }

    render(){
        return(
            <div className="pg-mid">
            <form onSubmit={this.onSubmit}>
            <div className="field">
            <label htmlFor="">Make and Model: </label>
                <div className="control">
                    <input className="input is-primary" placeholder="Enter Make/Model" type="text" value={this.state.car_name} onChange={this.onChangeCarName} />
                </div>
                </div>
                <div className="field">
                <label htmlFor="">Miles: </label>
                <div className="control">
                    <input className="input is-primary" placeholder="Enter Miles" type="text" value={this.state.car_miles} onChange={this.onChangeCarMiles} />
                </div>
                </div>
                <div className="field">
                <label htmlFor="">Price: </label>
                <div className="control">
                    <input className="input is-primary" placeholder="Enter Price in USD" type="text" value={this.state.car_price} onChange={this.onChangeCarPrice} />
                </div>
                </div>
                <div className="field">
                <label htmlFor="">Location: </label>
                <div className="control">
                    <input className="input is-primary" placeholder="Enter Location" type="text" value={this.state.car_location} onChange={this.onChangeCarLocation} />
                </div>
                </div>
                <div className="field">
                <label htmlFor="">Link: </label>
                <div className="control">
                    <input className="input is-primary" placeholder="Enter Link to Ad" type="text" value={this.state.car_link} onChange={this.onChangeCarLink} />
                </div>
                </div>
                <div class="field">
                    <label class="label">Additional Notes About The Car:</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Notes:" value={this.state.car_notes} onChange={this.onChangeCarNotes}></textarea>
                    </div>
                </div>
                <div className="field">
                    <input type="submit" value="Submit" className="button is-primary"/>
                </div>
            </form>
            </div>
            
        );
    }
  
}

export default CreateCar;