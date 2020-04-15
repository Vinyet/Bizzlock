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
            <h2>~ How Bizzlock works ~</h2>
            <div className="how-it-works-icons">
                <img src="https://image.flaticon.com/icons/svg/477/477833.svg" alt="Compare salaries"></img>
                <img src="https://image.flaticon.com/icons/svg/2303/2303845.svg" alt="Read employee experiences"></img>
                <img src="https://image.flaticon.com/icons/svg/2789/2789779.svg" alt="Find the job for you"></img>
                <img src="https://image.flaticon.com/icons/svg/2762/2762118.svg" alt="Know what you signed up for"></img>
            </div> 
            <div className="how-it-works-text">   
                <p>Compare salaries</p>
                <p>Read other employees&apos; experiences</p>
                <p>Find the right job for you</p>
                <p>Know what you&apos;re signing up for</p>
            </div>
        </div>
        </>
    )
}

export default Home;