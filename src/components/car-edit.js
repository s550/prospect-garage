import React, { Component } from 'react';

class EditCar extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo: null
        }
    }
    render(){
        return(
            <div className="field">
                <div className="control">
                    <input className="input is-primary" placeholder="Write Todo" type="text" value={this.state.todo} onChange={event => this.onInputChange(event.target.value)} />
                </div>
            </div>
        );
    }
    onInputChange(todo){
        this.setState({todo});
        // this.props.onSearch();
    }
}

export default EditCar;