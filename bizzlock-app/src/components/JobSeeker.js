import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import customTheme, { LocationOptions, IndustryOptions } from './FormErrorHandler';
import Select from 'react-select';
//import makeAnimated from 'react-select/animated';


const JobSeeker = () => {
    const history = useHistory();
    const [location, setLocation] = useState('');
    const [industry, setIndustry] = useState('');

    function handleClick() {
        history.push(`/company-listing/?location=${location}?industry=${industry}`);
    }

    return (
        <div className='jobseeker-container'>
            <img src='https://image.flaticon.com/icons/svg/2680/2680961.svg' alt='job-seeker-icon'/>
            <p>I&apos;m looking for a job and I want to read about other people&apos;s experiences</p>
            <div className="jobseeker-select">
                <Select options={LocationOptions} onChange={(e) => setLocation(e.value)} placeholder="Select location" theme={customTheme}/><br/>
                <Select options={IndustryOptions} onChange={(e) => setIndustry(e.value)} placeholder="Select industry" theme={customTheme}/>
            </div>
            <button onClick={handleClick}>SEARCH</button>
        </div>    
    )
}

export default JobSeeker;