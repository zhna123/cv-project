import React, { Component } from "react";
import uniqid from "uniqid";

class WorkAdd extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleWorkChange = this.handleWorkChange.bind(this);
        this.handleWorkAdd = this.props.handleWorkAdd;

        this.state = {
            id: uniqid(),
            company_name: '',
            position: '',
            description: '',
            date_from: '',
            date_until: '',
            error: false
        }
    }

    handleWorkChange(input, event) {
        this.setState({id: this.state.id});
        this.setState({
            [input]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const {id, company_name, position, description, date_from, date_until} = this.state;
        const workInput = {id, company_name, position, description, date_from, date_until};
        if (company_name !== '' && position !== '' && description !== '' && date_from !== '' && date_until !== '') {
            this.handleWorkAdd(workInput, event);
            this.props.resetClick();
        } else {
            this.setState({ error: true})
        }
       
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.resetClick();
    }
     
    render() {

        const { company_name, position, description, date_from, date_until, error } = this.state;

        return (
            <div className="add_form">
                <p>
                    <label htmlFor='company'>COMPANY</label>
                    <input type='text' id='company' value={ company_name } 
                        onChange={ this.handleWorkChange.bind(this, 'company_name') }></input>
                </p>
               
               <p>
                    <label htmlFor='position'>POSITION</label>
                    <input type='text' id='position' value={ position } 
                        onChange={ this.handleWorkChange.bind(this, 'position')}></input>
               </p>
                
                <p>
                    <label htmlFor='desc'>DESCRIPTION</label>
                    <input type='text' id='desc' value={ description } 
                        onChange={this.handleWorkChange.bind(this, 'description')}></input>
                </p>

                <p>
                    <label htmlFor='from'>START DATE</label>
                    <input type='text' id='from' value={ date_from } 
                        onChange={this.handleWorkChange.bind(this, 'date_from')}></input>
                </p>

                <p>
                    <label htmlFor='until'>END DATE</label>
                    <input type='text' id='until' value={ date_until } 
                        onChange={this.handleWorkChange.bind(this, 'date_until')}></input>
                </p>
                { error && <div className='error'>All fields are required.</div>}
                
                <p>
                    <button onClick={ this.handleCancel }>CANCEL</button>
                    <button onClick={ this.handleSubmit }>DONE</button>
                </p>
            </div>
            
        );
    }
}

export default WorkAdd;