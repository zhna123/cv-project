import React, { useState } from "react";
import "../styles/style.css"
import ButtonAdd from "./ButtonAdd";
import EducationAdd from "./EducationAdd";
import EducationControl from "./EducationControl";

const Education = ({prevStep, nextStep, addEducation, deleteEducation, editEducation, values}) => {

    const [clicked, setClicked] = useState(false)
    const [edit, setEdit] = useState(false)
    const [educationInput, setEducationInput] = useState({})

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

    // edit related ******************
    const handleEditClick = (id, value, event) => {
        event.preventDefault();
        setEdit(true);
        setEducationInput({
            id: id,
            school_name: value.school_name,
            title_of_study: value.title_of_study,
            graduation_date: value.graduation_date
        })
    }

    const handleEdit = (id, value, event) => {
        event.preventDefault();
        editEducation(id, value, event);
        setEdit(false);
    }

    const cancelEdit = (event) => {
        event.preventDefault();
        setEdit(false);
    }

    return (
        <form id="cv_form">
            <h1>CV APP</h1>
            <fieldset className="group edu_group">
                <legend>Education Experience</legend>
                <EducationControl 
                    educationList = { values.education }
                    handleEducationDelete = { deleteEducation }

                    educationInput = { educationInput }
                    handleEditClick = { handleEditClick }
                    handleEdit = {handleEdit }
                    cancelEdit = {cancelEdit}
                    isEdit = { edit }
                />
                {   
                    clicked ? 
                        <EducationAdd 
                            handleEducationAdd = { addEducation }
                            resetClick = { resetClick }
                        /> 
                        : (edit ? <div /> : <ButtonAdd onClick = {handleClick}/>)
                }
            </fieldset>
            <button onClick={ next }>NEXT</button>
            <button onClick={ previous }>PREVIOUS</button>
        </form>
    );
}

export default Education;