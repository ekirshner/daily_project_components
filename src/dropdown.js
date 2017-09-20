import React, { Component } from 'react';
import DropdownItem from './dropdownItem'

class DropdownComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    toggleVisibility() {
        
        this.setState({ 
            visible: !this.state.visible 
        });
        
        // if(this.state.visible === true) {
        //     this.setState({
        //         visible: false
        //     })
        // } else if (this.state.visible === false) {
        //     this.setState({
        //         visible: true
        //     })
        // }
    }

    openDropdown() {
        this.setState({
            visible: false
        })
    }

    closeDropdown() {
        this.setState({
            visible: true
        })
    }

    render() {
            return (
                <div className="dropdown">
                    <p onClick={event => this.toggleVisibility(event)}>File</p>
                    <DropdownItem  visible={this.state.visible} />
                </div>
            )
    }
}

export default DropdownComponent;