import React, { Component } from "react";
import "../styles/style.css"
import ButtonAdd from "./ButtonAdd";
import EducationAdd from "./EducationAdd";
import EducationControl from "./EducationControl";

class Education extends Component {

    constructor(props) {
        super(props);
        this.prevStep = this.props.prevStep;
        this.nextStep = this.props.nextStep;
        this.continue = this.continue.bind(this);
        this.previous = this.previous.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);

        this.handleClick = this.handleClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
        this.state = {isClicked: false, isEdit: false, educationInput: {}};
    }

    continue(e) {
        e.preventDefault();
        this.nextStep();
    }

    previous(e) {
        e.preventDefault();
        this.prevStep();
    }

    handleClick(e) {
        this.setState({isClicked: true});
    }

    resetClick(e) {
        this.setState({isClicked: false});
    }

    // edit related ******************
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
        this.props.editEducation(id, value, event);
        this.setState({ isEdit: false})
    }

    cancelEdit(event) {
        event.preventDefault();
        this.setState({isEdit: false});
    }

    render() {
        const { values, addEducation, deleteEducation } = this.props;
        const { isClicked, isEdit, educationInput } = this.state;

        return (
            <form id="cv_form">
                <h1>CV APP</h1>
                <fieldset className="group edu_group">
                    <legend>Education Experience</legend>
                    <EducationControl 
                        educationList = { values.education }
                        handleEducationDelete = { deleteEducation }

                        educationInput = { educationInput }
                        handleEditClick = { this.handleEditClick }
                        handleEdit = {this.handleEdit }
                        cancelEdit = {this.cancelEdit}
                        isEdit = { isEdit }
                    />
                    {   
                        isClicked ? 
                            <EducationAdd 
                                handleEducationAdd = { addEducation }
                                resetClick = { this.resetClick }
                            /> 
                            : (isEdit ? <div /> : <ButtonAdd onClick = {this.handleClick}/>)
                    }
                </fieldset>
                <button onClick={ this.continue }>NEXT</button>
                <button onClick={ this.previous }>PREVIOUS</button>
            </form>
        );
    }
}

export default Education;