import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StarComponent from './star';
import DropdownComponent from './dropdown';
import Navbar from './navbar';

class App extends Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      rating: 0,
    }
  }

  handleClick(num) {
    this.setState({
      rating: num
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
          <h2>Star Ratings, Dropdowns, and Navbars, oh my!</h2>
        </div>
        <StarComponent handleClick={(event) => this.handleClick(event)}/>
        <DropdownComponent />
      </div>
    );
  }
}

export default App;
