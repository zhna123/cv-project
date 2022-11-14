import React, { Component } from "react";

class EducationEdit extends Component {

    constructor(props) {
        super(props);
        this.handleEducationChange = this.handleEducationChange.bind(this);
        const { educationInput } = this.props;
        this.state = {
            id: educationInput.id,
            school_name: educationInput.school_name,
            title_of_study: educationInput.title_of_study,
            graduation_date: educationInput.graduation_date,
        }
    }

    handleEducationChange(input, event) {
        this.setState({id: this.state.id});
        this.setState({
            [input]: event.target.value
        });
    }
     
    render() {

        const {id, school_name, title_of_study, graduation_date} = this.state;
        const educationInput = {id, school_name, title_of_study, graduation_date};
        const { handleEdit, cancelEdit } = this.props;

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
                    <button onClick={ cancelEdit }>CANCEL</button>
                    <button onClick={ handleEdit.bind(this, id, educationInput) }>DONE</button>
                </p>
                
            </div>
            
        );
    }
}

export default EducationEdit;