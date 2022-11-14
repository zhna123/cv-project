import React, { Component } from "react";

class WorkList extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        const { workList, handleDelete, handleEdit } = this.props;

        return (
            <ul>
                {
                    workList.map((item, index) => {
                        return (
                            <li key={index} className='work_list' >
                              <div>
                                <ul>
                                    <li>COMPANY: { item.company_name } </li>
                                    <li>POSITION: { item.position } </li>
                                    <li>DESCRIPTION: { item.description } </li>
                                    <li>START DATE: { item.date_from } </li>
                                    <li>END DATE: { item.date_until } </li>
                                </ul>       
                              </div>
                              <div className="modify_buttons">
                                <button onClick={ handleEdit.bind(this, item.id, item) }>EDIT</button>
                                <button onClick={ handleDelete.bind(this, item.id) }>DELETE</button>       
                              </div>        
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default WorkList;