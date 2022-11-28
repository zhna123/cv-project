import React, { useState } from "react";
import uniqid from "uniqid";

const EducationAdd = ({handleEducationAdd, resetClick}) => {

    const [eduInput, setEduInput] = useState({
            id: uniqid(),
            school_name: '',
            title_of_study: '',
            graduation_date: ''
    })

    const [error, setError] = useState(false);

    const handleEducationChange = (input, event) => {
        setEduInput({
            ...eduInput,
            [input]: event.target.value 
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const {school_name, title_of_study, graduation_date} = eduInput;
        if (school_name !== '' && title_of_study !== '' && graduation_date !== '' ) {
            handleEducationAdd(eduInput, event);
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
                <label htmlFor='school'>SCHOOL</label>
                <input type='text' id='school' value={ eduInput.school_name } 
                    onChange={ handleEducationChange.bind(null, 'school_name') }></input>
            </p>
            
            <p>
                <label htmlFor='title'>TITLE OF STUDY</label>
                <input type='text' id='title' value={ eduInput.title_of_study } 
                    onChange={ handleEducationChange.bind(null, 'title_of_study')}></input>
            </p>
            
            <p>
                <label htmlFor='date'>GRADUATION DATE</label>
                <input type='text' id='date' value={ eduInput.graduation_date } 
                    onChange={handleEducationChange.bind(null, 'graduation_date')}></input>
            </p>
            { error && <div className='error'>All fields are required.</div>}
            <p>
                <button onClick={ handleCancel }>CANCEL</button>
                <button onClick={ handleSubmit }>DONE</button>
            </p>
        </div>
        
    );
    
}

export default EducationAdd;