import React, { useState, useEffect } from 'react';
import { getCompanies } from '../services/data';

// separate into 3 components?

const CompanyListing = () => {
    const [ companies, setCompanies ] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            const dbCompanies = await getCompanies();
            setCompanies(dbCompanies);
        }
        fetchCompanies();
    }, []);

    return (
    <>
    <input type="search" id="listing-search" placeholder="Search by name..."></input>
    <div className="listing-container">
        <div className="listing-results">

            <ul>
                <li>
                    <div className="company-result">
                        <div className="company-photo">
                            <img src="https://logosmarcas.com/wp-content/uploads/2018/05/Apple-logo.png" alt="company-logo"></img>
                        </div>
                        <div className="company-info">
                            <h4><a href="https://www.apple.com/es/">Apple</a></h4>
                            <p>***  - €€€€€</p>
                            <p>Apple makes phones and computers.</p>
                        </div>    
                    </div>
                </li>    
            </ul>

            <div>
                {companies.map((company) => {
                    return (
                        <div key={company.id}>
                            <h2>{company.name}</h2>
                            <p>{company.founded}</p>
                        </div>    
                    )
                })}
            </div>

        </div>
        <sidebar className="listing-sidebar">
            <h4>Salary</h4>
            <p>€ € € € €</p>
            <h4>Rating</h4>
            <p>* * * * *</p>
            <h4>Location</h4>
            <select>
                <option>Barcelona</option>
                <option>Madrid</option>
            </select>
            <h4>Job perks</h4>
                <p><input type="checkbox"></input>Gym</p>
                <p><input type="checkbox"></input>Free coffee</p>
                <p><input type="checkbox"></input>Birthdays off</p>
            <button>FILTRAR</button>
        </sidebar>
    </div>
    </>
    )
}

export default CompanyListing;