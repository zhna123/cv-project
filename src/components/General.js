import React, { Component } from "react";
import "../styles/style.css"

class General extends Component {

    constructor(props) {
        super(props);
        this.continue = this.continue.bind(this);
        this.nextStep = this.props.nextStep;

        this.state = {error: false}
    }

    continue(values, e) {
        e.preventDefault();
        // validation
        const { username, email, phone } = values;
        if (username !== '' && email !== '' && phone !== '') {
            this.nextStep();
        } else {
            this.setState({ error: true})
        }
    }

    render() {
        const {handleChange, values } = this.props;
        const { error } = this.state;

        return (
            <form id="cv_form">
                <h1>CV APP</h1>
                <fieldset className="group">
                    <legend>General Information</legend>
                    <label htmlFor='username'>NAME
                        <input type='text' id='username' value={values.username} onChange={handleChange.bind(this, 'username')}></input>
                    </label>
                    <label htmlFor='email'>EMAIL
                        <input type='text' id='email' value={values.email} onChange={handleChange.bind(this, 'email')} required></input>
                    </label>
                    <label htmlFor='phone'>PHONE
                        <input type='text' id='phone' value={values.phone} onChange={handleChange.bind(this, 'phone')} required></input>
                    </label>
                    { error && <div className='error'>All fields are required.</div>}
                </fieldset>
                <button onClick={ this.continue.bind(this, values) }>NEXT</button>
            </form>
            
            
        );
    }
}

export default General;