import React from 'react';
import { useHistory } from 'react-router-dom';


const Employee = () => {
    const history = useHistory();

    function handleClick() {
        history.push("/sign-up");
    }

    return (
        <>
        <div className="employee-container">
            <img src='https://image.flaticon.com/icons/svg/1584/1584911.svg' alt="employee-icon"/>
            <p>I work for a company and want to share my experience with other potential employees</p>          
            <button id='employee-btn' onClick={handleClick}>GIVE FEEDBACK</button>
        </div>    
        </>
    )
}

export default Employee;