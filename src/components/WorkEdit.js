import React, { Component } from "react";

class WorkEdit extends Component {

    constructor(props) {
        super(props);
        this.handleWorkChange = this.handleWorkChange.bind(this);
        const { workInput } = this.props;
        this.state = {
            id: workInput.id,
            company_name: workInput.company_name,
            position: workInput.position,
            description: workInput.description,
            date_from: workInput.date_from,
            date_until: workInput.date_until
        }
    }

    handleWorkChange(input, event) {
        this.setState({id: this.state.id});
        this.setState({
            [input]: event.target.value
        });
    }
     
    render() {

        const {id, company_name, position, description, date_from, date_until} = this.state;
        const workInput = {id, company_name, position, description, date_from, date_until};
        const { handleEdit, cancelEdit } = this.props;

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
                <button onClick={ cancelEdit }>CANCEL</button>
                <button onClick={ handleEdit.bind(this, id, workInput) }>DONE</button>
                
            </div>
            
        );
    }
}

export default WorkEdit;