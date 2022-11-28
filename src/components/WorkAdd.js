import React, { useState } from "react";
import uniqid from "uniqid";

const WorkAdd = ({handleWorkAdd, resetClick}) => {

    const [workInput, setWorkInput] = useState({
        id: uniqid(),
        company_name: '',
        position: '',
        description: '',
        date_from: '',
        date_until: '',
    })

    const [error, setError] = useState(false);

    const handleWorkChange = (input, event) => {
        setWorkInput({...workInput, [input]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const {company_name, position, description, date_from, date_until} = workInput;
        if (company_name !== '' && position !== '' && description !== '' && date_from !== '' && date_until !== '') {
            handleWorkAdd(workInput, event);
            resetClick();
        } else {
            setError(true);
        }
    }

    const handleCancel = (event) => {
        event.preventDefault();
        resetClick();
    }
     
    return (
        <div className="add_form">
            <p>
                <label htmlFor='company'>COMPANY</label>
                <input type='text' id='company' value={ workInput.company_name } 
                    onChange={ handleWorkChange.bind(null, 'company_name') }></input>
            </p>
            
            <p>
                <label htmlFor='position'>POSITION</label>
                <input type='text' id='position' value={ workInput.position } 
                    onChange={ handleWorkChange.bind(null, 'position')}></input>
            </p>
            
            <p>
                <label htmlFor='desc'>DESCRIPTION</label>
                <input type='text' id='desc' value={ workInput.description } 
                    onChange={ handleWorkChange.bind(null, 'description')}></input>
            </p>

            <p>
                <label htmlFor='from'>START DATE</label>
                <input type='text' id='from' value={ workInput.date_from } 
                    onChange={ handleWorkChange.bind(null, 'date_from')}></input>
            </p>

            <p>
                <label htmlFor='until'>END DATE</label>
                <input type='text' id='until' value={ workInput.date_until } 
                    onChange={ handleWorkChange.bind(null, 'date_until')}></input>
            </p>
            { error && <div className='error'>All fields are required.</div>}
            
            <p>
                <button onClick={ handleCancel }>CANCEL</button>
                <button onClick={ handleSubmit }>DONE</button>
            </p>
        </div>
        
    );
    
}

export default WorkAdd;