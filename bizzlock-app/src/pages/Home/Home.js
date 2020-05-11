import React from 'react';
import Employee from '../../components/Employee';
import JobSeeker from '../../components/JobSeeker';


const Home = () => {
    return ( 
        <>
        <div className="home-container">
            <Employee />
            <JobSeeker />
        </div>
        <div className="how-it-works-section">
            <h2>~ How <span id='bizzlock-title-home'>Bizzlock</span> Works ~</h2>
            <div className="how-it-works-icons">
                <img src="https://image.flaticon.com/icons/svg/477/477905.svg" alt="Compare salaries"></img>
                <img src="https://image.flaticon.com/icons/svg/812/812717.svg" alt="Read employee experiences"></img>
                <img src="https://image.flaticon.com/icons/svg/1243/1243560.svg" alt="Find the job for you"></img>
                <img src="https://image.flaticon.com/icons/svg/1358/1358533.svg" alt="Know what you signed up for"></img>
            </div> 
            <div className="how-it-works-text">   
                <p>Compare salaries</p>
                <p>Read employees&apos; experiences</p>
                <p>Find the right job for you</p>
                <p>Know what you&apos;re signing up for</p>
            </div>
        </div>
        </>
    )
}

export default Home;