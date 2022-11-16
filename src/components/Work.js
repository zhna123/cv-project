import React, { Component } from "react";
import "../styles/style.css"
import ButtonAdd from "./ButtonAdd";
import WorkAdd from "./WorkAdd";
import WorkControl from "./WorkControl";

class Work extends Component {

    constructor(props) {
        super(props);
        this.prevStep = this.props.prevStep;
        this.nextStep = this.props.nextStep;
        this.continue = this.continue.bind(this);
        this.previous = this.previous.bind(this);

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);

        this.handleClick = this.handleClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
        this.state = {isClicked: false, isEdit: false, workInput: {}};
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

    // edit related ***********
    handleEditClick(id, value, event) {
        event.preventDefault();
        this.setState({ isEdit: true, workInput: {
            id: id,
            company_name: value.company_name,
            position: value.position,
            description: value.description,
            date_from: value.date_from,
            date_until: value.date_until
        } });
    }

    handleEdit(id, value, event) {
        event.preventDefault();
        this.props.editWork(id, value, event);
        this.setState({ isEdit: false})
    }

    cancelEdit(event) {
        event.preventDefault();
        this.setState({isEdit: false});
    }

    render() {
        const { values, addWork, deleteWork } = this.props;
        const {isClicked, isEdit, workInput} = this.state;

        return (
            <form id="cv_form">
                <h1>CV APP</h1>
                <fieldset className="group work_group">
                    <legend>Work Experience</legend>
                    <WorkControl workList = { values.work }
                            handleWorkDelete = { deleteWork }

                            workInput = { workInput }
                            handleEditClick = { this.handleEditClick }
                            handleEdit = {this.handleEdit }
                            cancelEdit = {this.cancelEdit}
                            isEdit = { isEdit } />
                    {   
                        isClicked ? 
                            <WorkAdd 
                                handleWorkAdd = { addWork }
                                resetClick = { this.resetClick }
                            /> 
                            : ( isEdit ? <div /> : <ButtonAdd onClick = {this.handleClick}/>)
                    }
                </fieldset>
                <button onClick={ this.continue }>NEXT</button>
                <button onClick={ this.previous }>PREVIOUS</button>
            </form>
        );
    }
}

export default Work;