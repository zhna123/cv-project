import React, { Component } from "react";

class EducationEdit extends Component {

    constructor(props) {
        super(props);
        this.handleEducationChange = this.handleEducationChange.bind(this);
        this.handleEdit = this.props.handleEdit;
        this.editClick = this.editClick.bind(this);
        const { educationInput } = this.props;
        this.state = {
            id: educationInput.id,
            school_name: educationInput.school_name,
            title_of_study: educationInput.title_of_study,
            graduation_date: educationInput.graduation_date,
            error: false
        }
    }

    handleEducationChange(input, event) {
        this.setState({id: this.state.id});
        this.setState({
            [input]: event.target.value
        });
    }

    editClick(educationInput, e) {
        e.preventDefault();
        const {id, school_name, title_of_study, graduation_date} = educationInput;
        if (school_name !== '' && title_of_study !== '' && graduation_date !== '' ) {
            this.handleEdit(id, educationInput, e)
        } else {
            this.setState({error: true});
        }     
    }
     
    render() {

        const {id, school_name, title_of_study, graduation_date, error} = this.state;
        const educationInput = {id, school_name, title_of_study, graduation_date};
        const { cancelEdit } = this.props;

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
                { error && <div className='error'>All fields are required.</div>}

                <p>
                    <button onClick={ cancelEdit }>CANCEL</button>
                    <button onClick={ this.editClick.bind(this, educationInput) }>DONE</button>
                </p>
                
            </div>
            
        );
    }
}

export default EducationEdit;