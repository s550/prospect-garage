import React, { Component } from 'react';
import axios from 'axios';
class EditCar extends Component{
    constructor(props){
        super(props);

        this.onChangeCarName = this.onChangeCarName.bind(this);
        this.onChangeCarMiles = this.onChangeCarMiles.bind(this);
        this.onChangeCarPrice = this.onChangeCarPrice.bind(this);
        this.onChangeCarLocation = this.onChangeCarLocation.bind(this);
        this.onChangeCarLink = this.onChangeCarLink.bind(this);
        this.onChangeCarYear = this.onChangeCarYear.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // Sets the initial state 
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
    // Retrieves current information on the selected car using the car's unique id appended to the get request url
    // then sets the current state to the information recevied from the backend 
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
    onChangeCarYear(e){
        this.setState({
            car_year: e.target.value
        });
        // this.props.onSearch();
    }
    onSubmit(e){
       e.preventDefault();

        const editedCar = {
            car_name: this.state.car_name,
            car_miles: this.state.car_miles,
            car_price: this.state.car_price,
            car_location: this.state.car_location,
            car_link: this.state.car_link,
            car_year: this.state.car_year,
            car_avalible: this.state.car_avalible
        };
        
        console.log(editedCar);
        axios.post("http://localhost:4000/cars/update/"+this.props.match.params.id, editedCar)
            .then(res => 
                console.log(res.data));

       this.props.history.push('/')
    }

    render(){
        return(
            <div className="pg-mid">
                {/* <h1>Edit Vehicle</h1> */}
            <form onSubmit={this.onSubmit}>
            <div className="field">
            <label htmlFor="">Edit Year: </label>
                <div className="control">
                    <input className="input is-primary" placeholder="Edit Car Year" type="text" value={this.state.car_year} onChange={this.onChangeCarYear} />
                </div>
                </div>
            <div className="field">
            <label htmlFor="">Edit Make and Model: </label>
                <div className="control">
                    <input className="input is-primary" placeholder="Enter Make/Model" type="text" value={this.state.car_name} onChange={this.onChangeCarName} />
                </div>
                </div>
                <div className="field">
                <label htmlFor="">Edit Miles: </label>
                <div className="control">
                    <input className="input is-primary" placeholder="Enter Miles" type="text" value={this.state.car_miles} onChange={this.onChangeCarMiles} />
                </div>
                </div>
                <div className="field">
                <label htmlFor="">Edit Price: </label>
                <div className="control">
                    <input className="input is-primary" placeholder="Enter Price in USD" type="text" value={this.state.car_price} onChange={this.onChangeCarPrice} />
                </div>
                </div>
                <div className="field">
                <label htmlFor="">Edit Location: </label>
                <div className="control">
                    <input className="input is-primary" placeholder="Enter Location" type="text" value={this.state.car_location} onChange={this.onChangeCarLocation} />
                </div>
                </div>
                <div className="field">
                <label htmlFor="">Edit Link: </label>
                <div className="control">
                    <input className="input is-primary" placeholder="Enter Link to Ad" type="text" value={this.state.car_link} onChange={this.onChangeCarLink} />
                </div>
                </div>
                {/* <div class="field">
                    <label class="label">Additional Notes About The Car:</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Notes:" value={this.state.car_notes} onChange={this.onChangeCarNotes}></textarea>
                    </div>
                </div> */}
                <div className="field">
                    <input type="submit" value="Submit" className="button is-primary"/>
                </div>
            </form>
            </div>
            
        );
    }
  
}

export default EditCar;