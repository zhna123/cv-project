import React, { Component } from "react";

class Review extends Component {

    constructor(props) {
        super(props);
        this.nextStep = this.props.nextStep;
        this.prevStep = this.props.prevStep;
        this.continue = this.continue.bind(this);
        this.previous = this.previous.bind(this);
    }

    continue(e) {
        e.preventDefault();
        this.nextStep();
    }

    previous(e) {
        e.preventDefault();
        this.prevStep();
    }

    render() {

        const { values } = this.props;

        return (
            <form id="cv_form">
                <h1>CV APP</h1>
                <h2>Review</h2>
                <fieldset className="group">
                    <legend>General Information</legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>NAME:</td>
                                <td>{ values.username }</td>
                            </tr>
                            <tr>
                                <td>EMAIL:</td>
                                <td>{ values.email }</td>
                            </tr>
                            <tr>
                                <td>PHONE:</td>
                                <td>{ values.phone }</td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
                <fieldset className="group">
                    <legend>Education Experience</legend>
                    <ul>
                    {
                        values.education.map((item, index) => {
                            return (
                                <li key={index} >
                                    Graduated from <span>{item.school_name}</span> on <span>{item.graduation_date}</span> with 
                                    major <span>{item.title_of_study}</span>.                          
                                </li>
                            );
                        })
                    }
                    </ul>
                </fieldset>
                <fieldset className="group">
                    <legend>Work Experience</legend>
                    <ul>
                    {
                        values.work.map((item, index) => {
                            return (
                                <li key={index} >
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
                </fieldset>
                <button onClick={ this.continue }>SUBMIT</button>
                <button onClick={ this.previous }>PREVIOUS</button>
            </form>
        );
    }
}

export default Review;