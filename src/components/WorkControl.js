import React, { Component } from "react";
import WorkList from "./WorkList";
import WorkEdit from "./WorkEdit";


class WorkControl extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.handleWorkDelete = this.props.handleWorkDelete;
        this.handleWorkEdit = this.props.handleWorkEdit;

        this.state = {isEdit: false, workInput: {}}
    }

    handleDelete(id, event) {
        event.preventDefault();
        this.handleWorkDelete(id, event)
    }

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
        this.handleWorkEdit(id, value, event);
        this.setState({ isEdit: false})
    }

    cancelEdit(event) {
        event.preventDefault();
        this.setState({isEdit: false});
    }
    
    render() {

        const { workList } = this.props;
        const { isEdit, workInput } = this.state;

        return (
            <div>
                {
                    isEdit ? <WorkEdit workInput = { workInput } 
                                        handleEdit = { this.handleEdit }
                                        cancelEdit = {this.cancelEdit }/> : 
                    <WorkList workList = { workList } 
                                handleDelete = { this.handleDelete } 
                                handleEdit = { this.handleEditClick }/>
                }
                
            </div>
        );
    }
}

export default WorkControl;