import React, { Component } from 'react';

class SingleStar extends Component {


    render() {
        if (this.props.rating < this.props.value) {

            return(
            <div className="singleStar" onMouseOver={() => this.props.onHover(this.props.value)}>
                    &#9734;
            </div>
            )
        } else {
            return (
                <div className="singleStar" onMouseOver={() => this.props.onHover(this.props.value)} onClick={() => this.props.handleClick(this.props.value)}>
                    &#9733;
                </div>
            )
        }
    }
}

export default SingleStar;