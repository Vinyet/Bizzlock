import React from 'react';
import EmployeeComponent from '../components/EmployeeComponent';
import JobSeekerComponent from '../components/JobSeekerComponent.js';
import '../index.css';


const Home = () => {
    return ( 
        <>
        <div className="home-container">
            <EmployeeComponent/>
            <JobSeekerComponent/>
        </div>    
        </>
    )
}

export default Home;