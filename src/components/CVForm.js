import React, { useState } from "react";
import General from "./General";
import Education from "./Education";
import Work from "./Work";
import Review from "./Review";
import Overview from "./Overview";

const CVForm = () => {
    const [userInfo, setUserInfo] = useState({
            username: '',
            email: '',
            phone: '',
            education: [],
            work: [],
    });
    const [step, setStep] = useState(1);

    const handleChange = (input, e) => {
        setUserInfo({...userInfo, [input]: e.target.value})
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const nextStep = () => {
        setStep(step + 1);
    }

    // =================== education
    const addEducation = (educationInput, event) => {
        setUserInfo({...userInfo, education: userInfo.education.concat(educationInput)})
    }

    const deleteEducation = (id, event) => {
        setUserInfo({...userInfo, education: userInfo.education.filter(edu => edu.id !== id)})
    }

    const editEducation = (id, value, event) => {
        setUserInfo({...userInfo, education: userInfo.education.map( item => {
            return item.id === id ? value : item
        })})
    }

     // ======================== work
     const addWork = (workInput, event) => {
        setUserInfo({...userInfo, work: userInfo.work.concat(workInput)})
    }

    const deleteWork = (id, event) => {
        setUserInfo({...userInfo, work: userInfo.work.filter( work => work.id !== id )})
    }

    const editWork = (id, value, event) => {
        setUserInfo({...userInfo, work: userInfo.work.map( item => {
            return item.id === id ? value : item
        })})
    }

    switch(step) {
        case 1:
            return (
                <General 
                    nextStep = {nextStep}
                    handleChange = {handleChange}
                    values = {userInfo}
                />
            );
        case 2: 
            return (
                <Education 
                    prevStep = {prevStep}
                    nextStep = {nextStep}
                    addEducation = {addEducation}
                    deleteEducation = {deleteEducation}
                    editEducation = {editEducation}
                    values = {userInfo}
                />
            );
        case 3:
            return (
                <Work 
                    prevStep = {prevStep}
                    nextStep = {nextStep}
                    addWork = {addWork}
                    deleteWork = {deleteWork}
                    editWork = {editWork}
                    values = {userInfo}
                />
            );
        case 4:
            return (
                <Review 
                    prevStep = {prevStep}
                    nextStep = {nextStep}
                    values = {userInfo}
                />
            );
        case 5:
            return (
                <Overview 
                    prevStep = {prevStep}
                    values = {userInfo}
                />
            );
        default:
            // do nothing
    }
}

export default CVForm;