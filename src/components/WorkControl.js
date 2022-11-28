import React from "react";
import WorkList from "./WorkList";
import WorkEdit from "./WorkEdit";


const WorkControl = ({handleWorkDelete, workList, isEdit, workInput, handleEditClick, handleEdit, cancelEdit}) => {

    const handleDelete = (id, event) => {
        event.preventDefault();
        handleWorkDelete(id, event)
    }
    
    return (
        <div>
            {
                isEdit ? <WorkEdit workInput = { workInput } 
                                    handleEdit = { handleEdit }
                                    cancelEdit = { cancelEdit }/> : 
                <WorkList workList = { workList } 
                            handleDelete = { handleDelete } 
                            handleEdit = { handleEditClick }/>
            }
            
        </div>
    );
    
}

export default WorkControl;