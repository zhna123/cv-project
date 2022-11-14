import React, { Component } from "react";
import uniqid from "uniqid";

class EducationAdd extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleEducationChange = this.handleEducationChange.bind(this);
        this.handleEducationAdd = this.props.handleEducationAdd;

        this.state = {
            id: uniqid(),
            school_name: '',
            title_of_study: '',
            graduation_date: '',
        }
    }

    handleEducationChange(input, event) {
        this.setState({id: this.state.id});
        this.setState({
            [input]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const educationInput = this.state;
        this.handleEducationAdd(educationInput, event);
        this.props.resetClick();
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.resetClick();
    }
     
    render() {

        const { school_name, title_of_study, graduation_date } = this.state;

        return (
            <div className="add_form">
                <p>
                    <label htmlFor='school'>SCHOOL</label>
                    <input type='text' id='school' value={ school_name } 
                        onChange={ this.handleEducationChange.bind(this, 'school_name') }></input>
                </p>
               
               <p>
                    <label htmlFor='title'>TITLE OF STUDY</label>
                    <input type='text' id='title' value={ title_of_study } 
                        onChange={ this.handleEducationChange.bind(this, 'title_of_study')}></input>
               </p>
                
                <p>
                    <label htmlFor='date'>GRADUATION DATE</label>
                    <input type='text' id='date' value={ graduation_date } 
                        onChange={this.handleEducationChange.bind(this, 'graduation_date')}></input>
                </p>
                <p>
                    <button onClick={ this.handleCancel }>CANCEL</button>
                    <button onClick={ this.handleSubmit }>DONE</button>
                </p>
                
            </div>
            
        );
    }
}

export default EducationAdd;