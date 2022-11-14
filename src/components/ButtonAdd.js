import React, { Component } from "react";

class ButtonAdd extends Component {

    constructor(props) {
        super(props);
    }

    render() {
         
        const { onClick } = this.props;

        return (
            <button className="add" onClick={ onClick }>ADD</button>
        );
    }
}

export default ButtonAdd;