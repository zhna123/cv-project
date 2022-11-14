import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Work from "./Work";
import Review from "./Review";
import Overview from "./Overview";

class CVForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            username: '',
            email: '',
            phone: '',
            education: [],
            work: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.editEducation = this.editEducation.bind(this);

        this.addWork = this.addWork.bind(this);
        this.deleteWork = this.deleteWork.bind(this);
        this.editWork = this.editWork.bind(this);

        this.prevStep = this.prevStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
    }

    // =================== education
    addEducation(educationInput, event) {
        this.setState({
            education: this.state.education.concat(educationInput)
        });
    }

    deleteEducation(id, event) {
        this.setState({
            education: this.state.education.filter( edu => edu.id !== id )
        });
    }

    editEducation(id, value, event) {
        this.setState({
            education: this.state.education.map( item => {
                return item.id === id ? value : item
            })
        });
    }
    // ======================== work
    addWork(workInput, event) {
        this.setState({
            work: this.state.work.concat(workInput)
        });
    }

    deleteWork(id, event) {
        this.setState({
            work: this.state.work.filter( work => work.id !== id )
        });
    }

    editWork(id, value, event) {
        this.setState({
            work: this.state.work.map( item => {
                return item.id === id ? value : item
            })
        });
    }

    handleChange(input, event) {
        this.setState({
            [input]: event.target.value,
        });
    }

    prevStep() {
        const {step} = this.state;
        this.setState({step: step - 1});
    }

    nextStep() {
        const {step} = this.state;
        this.setState({step: step + 1});
    }

    render() {
        const {step} = this.state;
        const {username, email, phone, education, work} = this.state;
        const values = {username, email, phone, education, work};

        switch(step) {
            case 1:
                return (
                    <General 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                );
            case 2: 
                return (
                    <Education 
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        addEducation = {this.addEducation}
                        deleteEducation = {this.deleteEducation}
                        editEducation = {this.editEducation}
                        values = {values}
                    />
                );
            case 3:
                return (
                    <Work 
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        addWork = {this.addWork}
                        deleteWork = {this.deleteWork}
                        editWork = {this.editWork}
                        values = {values}
                    />
                );
            case 4:
                return (
                    <Review 
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        values = {values}
                    />
                );
            case 5:
                return (
                    <Overview 
                        values = {values}
                    />
                );
            default:
                // do nothing
        }
    }
}

export default CVForm;