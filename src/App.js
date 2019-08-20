import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import CarList from './components/car-list';
import EditCar from './components/car-edit';
import CreateCar from './components/car-create';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <header>
        <nav className="navbar is-fixed-top">
          <div className="navbar-brand">
            <a href="#">Prospect Garage</a>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              </a>
            </div>     
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/create" className="navbar-item">Add A Listing</Link>
               </div>
            </div>    
          </nav>
        </header>
        <br/>
        <br/>
        <br/>
        <main>
          <Route path="/" exact component={CarList} />
          <Route path="/edit/:id" component={EditCar}/>
          <Route path="/create" component={CreateCar}/>
        </main>
        </div>
      </Router>
    );
  }
}

export default App;
