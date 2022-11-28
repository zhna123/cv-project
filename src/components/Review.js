import React from "react";

const Review = ({prevStep, nextStep, values}) => {

    const next = (e) => {
        e.preventDefault();
        nextStep();
    }

    const previous = (e) => {
        e.preventDefault();
        prevStep();
    }



    let emptyEduDiv;
    let emptyWorkDiv;
    if (values.education.length === 0) {
        emptyEduDiv = <div>No Education Experience Entered.</div>
    }
    if (values.work.length === 0) {
        emptyWorkDiv = <div>No Work Experience Entered.</div>
    }

    return (
        <form id="cv_form">
            <h1>CV APP</h1>
            <h2>Review</h2>
            <fieldset className="group review_group">
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
            <fieldset className="group review_group">
                <legend>Education Experience</legend>
                { emptyEduDiv }
                <ul>
                {
                    values.education.map(item => {
                        return (
                            <li key={ item.id } className="edu_list">
                                <ul>
                                    <li>SCHOOL: {item.school_name}</li>
                                    <li>MAJOR: {item.title_of_study}</li>
                                    <li>GRADUATION DATE: {item.graduation_date}</li>
                                </ul>
                            </li>
                        );
                    })
                }
                </ul>
            </fieldset>
            <fieldset className="group review_group">
                <legend>Work Experience</legend>
                { emptyWorkDiv }
                <ul>
                {
                    values.work.map( item => {
                        return (
                            <li key={ item.id } className="work_list" >
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
            <button onClick={ next }>FINISH</button>
            <button onClick={ previous }>PREVIOUS</button>
        </form>
    );
    
}

export default Review;