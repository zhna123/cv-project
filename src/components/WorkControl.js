import React, { Component } from "react";
import WorkList from "./WorkList";
import WorkEdit from "./WorkEdit";


class WorkControl extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleWorkDelete = this.props.handleWorkDelete;
    }

    handleDelete(id, event) {
        event.preventDefault();
        this.handleWorkDelete(id, event)
    }
    
    render() {

        const { workList, isEdit, workInput, handleEditClick, handleEdit, cancelEdit } = this.props;

        return (
            <div>
                {
                    isEdit ? <WorkEdit workInput = { workInput } 
                                        handleEdit = { handleEdit }
                                        cancelEdit = { cancelEdit }/> : 
                    <WorkList workList = { workList } 
                                handleDelete = { this.handleDelete } 
                                handleEdit = { handleEditClick }/>
                }
                
            </div>
        );
    }
}

export default WorkControl;