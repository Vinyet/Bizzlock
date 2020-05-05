import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';
import CommentsSection from '../Comments/CommentsSection';


const CompanyDetails = props => {
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const location = useLocation();
    const [ companyLocation, setCompanyLocation] = useState(); 
    const [ industry, setIndustry] = useState(); // 
    //const [ rating, setRating ] = useState(); // num estrellas, y de cuántas valoraciones totales
    //const [ salary, setSalary ] = useState(); // number?

    return (
        <animated.div style={fadeIn} className="company-details-container">
            <div className="company-detail-container">
                <h2>Company name</h2>
                <div className='company-header'>
                    <img src="companylogo.png" alt="logo"></img>
                    <div className="company-description">
                        Company description (from Google)
                        </div>
                </div>
                    <div className="information-selects">
                        <div className="industry-select">
                        <label htmlFor='industry-select'>Select the industry:</label>
                        <select id="industry" props="defaultValue" required onChange={(e) => setIndustry(e.target.value)}>
                            <option value="" disabled>Choose an option</option>
                            <option value="Communication, Marketing and PR">Communication, Marketing and PR</option>    
                            <option value="Engineering &amp; IT">Engineering &amp; IT</option>
                            <option value="Education">Education</option>
                    </select>
                        </div>
                        <div className="location-select">    
                            <label htmlFor='location-select'>Select the location <small>(or the headquarters you work at):</small> </label>
                            <select onChange={(e) => setCompanyLocation(e.target.value) } placeholder="Select location">
                                <option>New York</option>
                                <option>Barcelona</option>
                                <option>Madrid</option>
                            </select>
                        </div>
                    <div className='company-feedback'>
                        <label htmlFor="perks-flex">This company offers the following perks:</label>
                        <div className="perks-flex">
                            <div>
                                <input type="checkbox" className="perks-check" checked></input><p>Restaurant discounts</p><br/>
                                <input type="checkbox" className="perks-check" checked></input><p>Gym</p><br/>
                                <input type="checkbox" className="perks-check" checked></input><p>Nursery</p><br/>
                                <input type="checkbox" className="perks-check"></input><p>Birthdays off</p><br/>
                                <input type="checkbox" className="perks-check"></input><p>Flexible schedule</p><br/>
                            </div>
                            <div>
                                <input type="checkbox" className="perks-check" checked></input> <p>Free coffee</p><br/>
                                <input type="checkbox" className="perks-check"></input> <p>Free fruit and snacks</p><br/>
                                <input type="checkbox" className="perks-check" checked></input> <p>Relaxing employee area</p><br/>
                                <input type="checkbox" className="perks-check"></input> <p>Good views</p><br/>
                                <input type="checkbox" className="perks-check"></input> <p>Fully equipped kitchen</p><br/>
                            </div>
                            <div>
                                <input type="checkbox" className="perks-check"></input> <p>Good views</p><br/>
                                <input type="checkbox" className="perks-check" checked></input> <p>Formación</p><br/>
                                <input type="checkbox" className="perks-check" checked></input> <p>Health insurance</p><br/>
                                <input type="checkbox" className="perks-check"></input> <p>Free parking</p><br/>
                                <input type="checkbox" className="perks-check"></input> <p>Plus por objetivos</p><br/>
                            </div>
                        </div>
                    </div>
                </div>
                <h5>This is what previous employees had to say:</h5>
            <CommentsSection />
            </div>
        </animated.div>
    )

}

export default CompanyDetails;

