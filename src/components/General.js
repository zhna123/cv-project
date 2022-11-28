import React, { useState } from "react";
import "../styles/style.css"

const General = ({nextStep, handleChange, values}) => {

    const [error, setError] = useState(false);

    const next = (values, e) => {
        e.preventDefault();
        // validation
        const { username, email, phone } = values;
        if (username !== '' && email !== '' && phone !== '') {
            nextStep();
        } else {
            setError(true);
        }
    }

    return (
        <form id="cv_form">
            <h1>CV APP</h1>
            <fieldset className="group">
                <legend>General Information</legend>
                <label htmlFor='username'>NAME
                    <input type='text' id='username' value={values.username} onChange={handleChange.bind(null, 'username')}></input>
                </label>
                <label htmlFor='email'>EMAIL
                    <input type='text' id='email' value={values.email} onChange={handleChange.bind(null, 'email')} required></input>
                </label>
                <label htmlFor='phone'>PHONE
                    <input type='text' id='phone' value={values.phone} onChange={handleChange.bind(null, 'phone')} required></input>
                </label>
                { error && <div className='error'>All fields are required.</div>}
            </fieldset>
            <button onClick={ next.bind(null, values) }>NEXT</button>
        </form>
    );
}

export default General;