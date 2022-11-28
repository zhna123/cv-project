import React, { useState } from "react";
import EducationEdit from "./EducationEdit";
import EducationList from "./EducationList";

const EducationControl = ({ handleEducationDelete, 
    educationList, handleEditClick, handleEdit, cancelEdit, isEdit, educationInput }) => {

    const handleDelete = (id, event) => {
        event.preventDefault();
        handleEducationDelete(id, event)
    }

    return (
        <div>
            {
                isEdit ? <EducationEdit educationInput = { educationInput } 
                                    handleEdit = { handleEdit }
                                    cancelEdit = { cancelEdit }/> : 
                <EducationList educationList = { educationList } 
                            handleDelete = { handleDelete } 
                            handleEdit = { handleEditClick }/>
            }
            
        </div>
    );
}

export default EducationControl;