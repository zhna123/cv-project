import React, { useState } from "react";
import "../styles/style.css"
import ButtonAdd from "./ButtonAdd";
import WorkAdd from "./WorkAdd";
import WorkControl from "./WorkControl";

const Work = ({prevStep, nextStep, addWork, deleteWork, editWork, values}) => {

    const [clicked, setClicked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [workInput, setWorkInput] = useState({});

    const next = (e) => {
        e.preventDefault();
        nextStep();
    }

    const previous = (e) => {
        e.preventDefault();
        prevStep();
    }

    const handleClick = (e) => {
        setClicked(true);
    }

    const resetClick = (e) => {
        setClicked(false);
    }

    // edit related ***********
    const handleEditClick = (id, value, event) => {
        event.preventDefault();
        setEdit(true);
        setWorkInput({
            id: id,
            company_name: value.company_name,
            position: value.position,
            description: value.description,
            date_from: value.date_from,
            date_until: value.date_until
        })
    }

    const handleEdit = (id, value, event) => {
        event.preventDefault();
        editWork(id, value, event);
        setEdit(false);
    }

    const cancelEdit = (event) => {
        event.preventDefault();
        setEdit(false);
    }

    

    return (
        <form id="cv_form">
            <h1>CV APP</h1>
            <fieldset className="group work_group">
                <legend>Work Experience</legend>
                <WorkControl workList = { values.work }
                        handleWorkDelete = { deleteWork }

                        workInput = { workInput }
                        handleEditClick = { handleEditClick }
                        handleEdit = {handleEdit }
                        cancelEdit = {cancelEdit}
                        isEdit = { edit } />
                {   
                    clicked ? 
                        <WorkAdd 
                            handleWorkAdd = { addWork }
                            resetClick = { resetClick }
                        /> 
                        : ( edit ? <div /> : <ButtonAdd onClick = {handleClick}/>)
                }
            </fieldset>
            <button onClick={ next }>NEXT</button>
            <button onClick={ previous }>PREVIOUS</button>
        </form>
    );
    
}

export default Work;