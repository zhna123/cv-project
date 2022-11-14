import React, { Component } from "react";
import EducationEdit from "./EducationEdit";
import EducationList from "./EducationList";

class EducationControl extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.handleEducationDelete = this.props.handleEducationDelete;
        this.handleEducationEdit = this.props.handleEducationEdit;

        this.state = {isEdit: false, educationInput: {}}
    }

    handleDelete(id, event) {
        event.preventDefault();
        this.handleEducationDelete(id, event)
    }

    handleEditClick(id, value, event) {
        event.preventDefault();
        this.setState({ isEdit: true, educationInput: {
            id: id,
            school_name: value.school_name,
            title_of_study: value.title_of_study,
            graduation_date: value.graduation_date
        } });
    }

    handleEdit(id, value, event) {
        event.preventDefault();
        this.handleEducationEdit(id, value, event);
        this.setState({ isEdit: false})
    }

    cancelEdit(event) {
        event.preventDefault();
        this.setState({isEdit: false});
    }
    
    render() {

        const { educationList } = this.props;
        const { isEdit, educationInput } = this.state;

        return (
            <div>
                {
                    isEdit ? <EducationEdit educationInput = { educationInput } 
                                        handleEdit = { this.handleEdit }
                                        cancelEdit = {this.cancelEdit }/> : 
                    <EducationList educationList = { educationList } 
                                handleDelete = { this.handleDelete } 
                                handleEdit = { this.handleEditClick }/>
                }
                
            </div>
        );
    }
}

export default EducationControl;