import React from "react";

const EducationList = ({educationList, handleDelete, handleEdit}) => {

    
    return (
        <div>
            {
                <ul>
                    {
                        educationList.map((item, index) => {
                            return (
                                <li key={index} className='edu_list'>
                                    <div>
                                        <ul>
                                            <li>SCHOOL: {item.school_name}</li>
                                            <li>MAJOR: {item.title_of_study}</li>
                                            <li>GRADUATION DATE: {item.graduation_date}</li>
                                        </ul>
                                    </div>

                                    <div className="modify_buttons">
                                        <button onClick={ handleEdit.bind(this, item.id, item) }>EDIT</button>
                                        <button onClick={ handleDelete.bind(this, item.id)}>DELETE</button>                   
                                    </div>  
                                </li>
                            );
                        })
                    }
                </ul>
            }
        </div>
    );
}

export default EducationList;