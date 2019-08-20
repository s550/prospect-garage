import React, { Component } from 'react';
import axios from 'axios';

class DelBtn extends Component{
    constructor(props){
        super(props);
        // this.delete = this.delete.bind(this);
    }
    onClick(e){
        e.preventDefault();
        axios.get("http://localhost:3000/cars/delete"+ this.props.obj._id)
            .then(console.log("Car Deleted"))
            .catch(err => console.log(err))
    }
    render(){
        return(
            <button onClick={this.onClick} className="button is-danger card-footer-item">Delete</button>
        );
    }
};


export default DelBtn;