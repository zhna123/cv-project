import React from "react";

const Overview = ({prevStep, values}) => {

    const previous = (e) => {
        e.preventDefault();
        prevStep();
    }

    const createNew = (e) => {
        e.preventDefault();
        window.location.reload();
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
            <div className="overview">
                <div className="ov_title">
                    <h1> {values.username}'s CV </h1>
                </div>
                <div className="ov_general">
                    <div>NAME: { values.username }</div>
                    <div>EMAIL: { values.email }</div>
                    <div>PHONE: { values.phone }</div>
                </div>
                <div className="ov_edu">
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
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="ov_work">
                    { emptyWorkDiv }
                    <ul>
                        {
                            values.work.map(item => {
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
                    <button onClick={ previous }>BACK TO EDIT</button>
                    <button onClick={ createNew }>CREATE NEW</button>
                </div>
            </div>
        );
    
}

export default Overview;