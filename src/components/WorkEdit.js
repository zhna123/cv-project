import React, { useState } from "react";

const WorkEdit = ({workInput, handleEdit, cancelEdit}) => {

    const [work, setWork] = useState(workInput)
    const [error, setError] = useState(false);

    const handleWorkChange = (input, event) => {
        setWork({...work, [input]: event.target.value})
    }

    const editClick = (e) => {
        e.preventDefault();
        const {id, company_name, position, description, date_from, date_until} = work;
        if (company_name !== '' && position !== '' && description !== '' && date_from !== '' && date_until !== '') {
            handleEdit(id, work, e);
        } else {
            setError(true);
        }

    }
     
    
    return (
        <div className="add_form">
            <p>
                <label htmlFor='company'>COMPANY</label>
                <input type='text' id='company' value={ work.company_name } 
                    onChange={ handleWorkChange.bind(null, 'company_name') }></input>
            </p>
            
            <p>
                <label htmlFor='position'>POSITION</label>
                <input type='text' id='position' value={ work.position } 
                    onChange={ handleWorkChange.bind(null, 'position')}></input>
            </p>
            
            <p>
                <label htmlFor='desc'>DESCRIPTION</label>
                <input type='text' id='desc' value={ work.description } 
                    onChange={handleWorkChange.bind(null, 'description')}></input>
            </p>

            <p>
                <label htmlFor='from'>START DATE</label>
                <input type='text' id='from' value={ work.date_from } 
                    onChange={handleWorkChange.bind(null, 'date_from')}></input>
            </p>

            <p>
                <label htmlFor='until'>END DATE</label>
                <input type='text' id='until' value={ work.date_until } 
                    onChange={handleWorkChange.bind(null, 'date_until')}></input>
            </p>
            { error && <div className='error'>All fields are required.</div>}

            <button onClick={ cancelEdit }>CANCEL</button>
            <button onClick={ editClick }>DONE</button>
            
        </div>
        
    );
    
}

export default WorkEdit;