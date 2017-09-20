import React, { Component } from 'react';

class DropdownItem extends Component {

    handleDropClickNew() {
        console.log("In the morning, I'm making WAFFLES")
    }

    handleDropClickSave() {
        console.log("Okay, why does she even HAVE that lever?")
    }

    handleDropClickExit() {
        console.log("What can a banana cost, 12 dollars?")
    }

    render() {
        if (this.props.visible === true) {
            return (
                <ul className="dropdown-options">
                    <li onClick={this.handleDropClickNew}>New</li>
                    <li onClick={this.handleDropClickSave}>Save</li>
                    <li onClick={this.handleDropClickExit}>Exit</li>
                </ul>
            )
        } else {
            return (<div className='null'></div>)
        }
    }
}

export default DropdownItem;