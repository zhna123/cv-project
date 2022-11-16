import React, { Component } from "react";
import EducationEdit from "./EducationEdit";
import EducationList from "./EducationList";

class EducationControl extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEducationDelete = this.props.handleEducationDelete;
    }

    handleDelete(id, event) {
        event.preventDefault();
        this.handleEducationDelete(id, event)
    }
    
    render() {

        const { educationList, handleEditClick, handleEdit, cancelEdit, isEdit, educationInput } = this.props;

        return (
            <div>
                {
                    isEdit ? <EducationEdit educationInput = { educationInput } 
                                        handleEdit = { handleEdit }
                                        cancelEdit = { cancelEdit }/> : 
                    <EducationList educationList = { educationList } 
                                handleDelete = { this.handleDelete } 
                                handleEdit = { handleEditClick }/>
                }
                
            </div>
        );
    }
}

export default EducationControl;