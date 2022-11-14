import React, { Component } from "react";
import "../styles/style.css"

class General extends Component {

    constructor(props) {
        super(props);
        this.continue = this.continue.bind(this);
        this.nextStep = this.props.nextStep;
    }

    continue(e) {
        e.preventDefault();
        this.nextStep();
    }

    render() {
        const {handleChange, values } = this.props;

        return (
            <form id="cv_form">
                <h1>CV APP</h1>
                <fieldset className="group">
                    <legend>General Information</legend>
                    <label htmlFor='username'>NAME
                        <input type='text' id='username' value={values.username} onChange={handleChange.bind(this, 'username')}></input>
                    </label>
                    <label htmlFor='email'>EMAIL
                        <input type='text' id='email' value={values.email} onChange={handleChange.bind(this, 'email')}></input>
                    </label>
                    <label htmlFor='phone'>PHONE
                        <input type='text' id='phone' value={values.phone} onChange={handleChange.bind(this, 'phone')}></input>
                    </label>
                </fieldset>
                <button onClick={ this.continue }>NEXT</button>
            </form>
            
            
        );
    }
}

export default General;