import React from 'react';
import { useHistory } from 'react-router-dom';


const JobSeekerComponent = () => {
    const history = useHistory();

    function handleClick() {
        history.push("/company-listing");
    }

    return (
        <>
        <div className='jobseeker-container'>
            <img src='https://image.flaticon.com/icons/svg/2680/2680961.svg' alt='job-seeker-icon'/>
            <p>Or are you just looking?</p>
                <button onClick={handleClick}>Search</button>
        </div>    
        </>
    )
}

export default JobSeekerComponent;