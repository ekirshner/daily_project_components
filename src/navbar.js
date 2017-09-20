import React, { Component } from 'react';

class Navbar extends Component {
    
    handleClickHome(e) {
        e.preventDefault()
        console.log("There's no place like home")
    }

    handleClickProducts(e) {
        e.preventDefault()
        console.log("We do NOT want to buy a squirrel!")
    }

    handleClickServices(e) {
        e.preventDefault()
        console.log("Homemade tofurkey jerky")
    }
    

    handleClickAbout(e) {
        e.preventDefault()
        console.log("Wouldn't you like to know?")
    }

    render() {
        return (
            <div className="nav-container">
                <a onClick={this.handleClickHome}>Home</a>
                <a onClick={this.handleClickProducts}>Products</a>
                <a onClick={this.handleClickServices}>Services</a>
                <a onClick={this.handleClickAbout}>About</a>
            </div>
            
        )
    }
}

export default Navbar;