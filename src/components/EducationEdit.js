import React, { useState } from "react";

const EducationEdit = ({educationInput, handleEdit, cancelEdit}) => {

    const [eduInput, setEduInput] = useState(educationInput);
    const [error, setError] = useState(false)

    const handleEducationChange = (input, event) => {
        setEduInput({
            ...eduInput,
            [input]: event.target.value
        })
    }

    const editClick = (e) => {
        e.preventDefault();
        const {id, school_name, title_of_study, graduation_date} = eduInput;
        if (school_name !== '' && title_of_study !== '' && graduation_date !== '' ) {
            handleEdit(id, eduInput, e)
        } else {
            setError(true)
        }     
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
                <button onClick={ cancelEdit }>CANCEL</button>
                <button onClick={ editClick }>DONE</button>
            </p>
            
        </div>
        
    );
    
}

export default EducationEdit;