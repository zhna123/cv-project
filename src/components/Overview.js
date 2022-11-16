import React, { Component } from "react";

class Overview extends Component {

    constructor(props) {
        super(props);
        this.prevStep = this.props.prevStep;
        this.previous = this.previous.bind(this);
        this.createNew = this.createNew.bind(this);
    }

    previous(e) {
        e.preventDefault();
        this.prevStep();
    }

    createNew(e) {
        e.preventDefault();
        window.location.reload();
    }

    render() {
        const { values } = this.props;
        const {username, email, phone, education, work} = values;

        let emptyEduDiv;
        let emptyWorkDiv;
        if (education.length === 0) {
            emptyEduDiv = <div>No Education Experience Entered.</div>
        }
        if (work.length === 0) {
            emptyWorkDiv = <div>No Work Experience Entered.</div>
        }

        return (
            <div className="overview">
                <div className="ov_title">
                    <h1> {username}'s CV </h1>
                </div>
                <div className="ov_general">
                    <div>NAME: { username }</div>
                    <div>EMAIL: { email }</div>
                    <div>PHONE: { phone }</div>
                </div>
                <div className="ov_edu">
                    { emptyEduDiv }
                    <ul>
                        {
                            education.map(item => {
                                return (
                                    <li key={ item.id } className="edu_list">
                                        <ul>
                                            <li>SCHOOL: {item.school_name}</li>
                                            <li>MAJOR: {item.title_of_study}</li>
                                            <li>GRADUATION DATE: {item.graduation_date}</li>
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="ov_work">
                    { emptyWorkDiv }
                    <ul>
                        {
                            work.map(item => {
                                return (
                                    <li key={ item.id } className="work_list">
                                        <ul>
                                            <li>COMPANY: { item.company_name } </li>
                                            <li>POSITION: { item.position } </li>
                                            <li>DESCRIPTION: { item.description } </li>
                                            <li>START DATE: { item.date_from } </li>
                                            <li>END DATE: { item.date_until } </li>
                                        </ul>                   
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="ov_footer">
                    <button onClick={ this.previous }>BACK TO EDIT</button>
                    <button onClick={ this.createNew }>CREATE NEW</button>
                </div>
            </div>
        );
    }
}

export default Overview;