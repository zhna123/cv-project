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

        this.handleClick = this.handleClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
        this.state = {isClicked: false};
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

    render() {
        const { values, addWork, deleteWork, editWork } = this.props;

        return (
            <form id="cv_form">
                <h1>CV APP</h1>
                <fieldset className="group work_group">
                    <legend>Work Experience</legend>
                    <WorkControl workList = { values.work }
                            handleWorkDelete = { deleteWork }
                            handleWorkEdit = { editWork }/>
                    {   
                        this.state.isClicked ? 
                            <WorkAdd 
                                handleWorkAdd = { addWork }
                                resetClick = { this.resetClick }
                            /> 
                            : <ButtonAdd onClick = {this.handleClick}/>
                    }
                </fieldset>
                <button onClick={ this.continue }>NEXT</button>
                <button onClick={ this.previous }>PREVIOUS</button>
            </form>
        );
    }
}

export default Work;