import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { getCompanies } from '../services/data';
import Select from 'react-select';
//import makeAnimated from 'react-select/animated';

// https://react-select.com/async
// separate into 3 components?
// upload files to firebase

const CompanyListing = () => {
    const [ companies, setCompanies ] = useState([]);
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const extraFadeIn = useSpring({opacity: 2, from: {opacity: 0}});
    let { query } = useParams();

    useEffect(() => {
        const fetchCompanies = async () => {
            const dbCompanies = await getCompanies();
            setCompanies(dbCompanies);
        }
        fetchCompanies();
    }, []);

    function handleSearch(e) {
        e.preventDefault();        
        if (e.target.value === companies[0].name) { // grab ANY object inside the array
            console.log(e.target.value)
            // filter company-result-single after first letter is introduced
        } else {
            console.log('no match found')
        }
    }

    return (
    <>
    <Select isSearcheable onChange={handleSearch} id="listing-search" placeholder="Search company..." />

    <animated.div style={fadeIn} className="listing-container">

        <div className="listing-results">
            <ul>
                <li>
                    <div className="company-results">
                    {companies.map((company) => {
                    return (
                        // top rated by default
                        <animated.div style={extraFadeIn} className="company-result-single" key={company.id}>
                            <div key={company.id} className="company-photo">
                                <img src="https://logosmarcas.com/wp-content/uploads/2018/05/Apple-logo.png" alt="company-logo"/>
                            </div>
                            <div className="company-info">
                                <a href="/company-details"><h2>{company.name}</h2></a>
                                <p>Founded in {company.founded}</p>
                            </div>    
                        </animated.div>    
                    )
                })}
                    </div>
                </li>    
            </ul>
        </div>

        <aside className="listing-sidebar">
            <h4>Salary</h4>
            <p>💵 💵 💵 💵 💵</p>
            <h4>Rating</h4>
            <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
            <h4>Change location</h4>
            <select>
                <option>Barcelona</option>
                <option>Madrid</option>
                <option>Valencia</option>
                <option>Sevilla</option>
                <option>Zaragoza</option>
            </select>
            <h4>Change industry</h4>
            <select>
                <option>Marketing &amp; Communications</option>
                <option>Programming and IT</option>
                <option>Retail</option>
                <option>Education</option>
            </select>
            <h4>Job perks</h4>
                <p><input type="checkbox"></input>Gym</p>
                <p><input type="checkbox"></input>Restaurant discounts</p>
                <p><input type="checkbox"></input>Nursery</p>
                <p><input type="checkbox"></input>Free coffee</p>
                <p><input type="checkbox"></input>Birthdays off</p>
                <p><input type="checkbox"></input>Flexible schedule</p>
                <p><input type="checkbox"></input>Relaxing employee area</p>
                <p><input type="checkbox"></input>Good views</p>
                <p><input type="checkbox"></input>Fully equipped kitchen</p>
                <p><input type="checkbox"></input>Free fruit and snacks</p>
                <p><input type="checkbox"></input>Formación</p>
                <p><input type="checkbox"></input>Health insurance</p>
                <p><input type="checkbox"></input>Free parking</p>
                <p><input type="checkbox"></input>Plus por objetivos</p>
            <input type="text" placeholder="Keywords"></input>
            <button>FILTRAR</button>
         </aside>
        </animated.div>
    </>
    )
}



export default CompanyListing;