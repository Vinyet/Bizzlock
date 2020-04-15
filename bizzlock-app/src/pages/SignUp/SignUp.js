import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';
import { getCompanies } from '../../services/data';
import axios from 'axios';

    /* LOGIC:
    -add query string to google call
    -if neither have a match, display 'notonthelist' <a>
    -if firebase has it, return firebase results (current) 
    -if firebase doesn't have it, return google result 
    */

const SignUp = () => {
    const history = useHistory();
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const API_BASE_URL = 'https://kgsearch.googleapis.com/v1/entities:search?key=AIzaSyB8WigLf8eLlQAQyN9D_0O2Qzndr22_vCA&types=organization&limit=1&indent=true&query="apple"'; // query = selectedCompany ¿? 
    const [ checked, setChecked ] = useState(false);
    const [ dbCompanies, setDbCompanies ] = useState([]) // array: all companies fetched from firebase
    const [ companies, setCompanies ] = useState([]); // array: companies from firebase that match what the user has typed (input) 
    const [ APIcompanies, setAPIcompanies ] = useState([]); // object: empty, waiting for user to type.
    const [ selectedCompany, setSelectedCompany ] = useState(''); // string: company selected from firebase (input)
    const [ chosenCompany, setChosenCompany ] = useState(); // string: company chosen after click (button)

    /* FETCH FIREBASE */ 
    useEffect(() => {
        const fetchCompanies = async () => {
            const dbCompanies = await getCompanies();
            setDbCompanies(dbCompanies);
        }
        fetchCompanies();
    }, []);

    /* FETCH GOOGLE API */
    function getAPIcompanies() {
        return new Promise(async (resolve, reject) => {
            try {
            const response = await axios.get(API_BASE_URL);
            resolve(response.data);
        } catch (err) {
            reject('Error fetching');
            }
        })
    }

    useEffect(() => {
        const fetchAPIcompanies = async () => {
            const googleAPIcompanies = await getAPIcompanies();
            const APIcompanyName = googleAPIcompanies.itemListElement[0].result.name;
            setAPIcompanies(APIcompanyName) // please     
        }
        fetchAPIcompanies();
    }, [])


    /* HANDLES COMPANY SELECTED BY USER */
    const handleSelect = (e) => {
        const submittedCompany = e.target.value;
        setSelectedCompany(submittedCompany);

        if (submittedCompany && submittedCompany.length > 2) {

            // si no está ni en Firebase, ni en Google -> return { <a href="/create-company" id="notonthelist">X does not have a registry yet, but you can create it here.</a> }

            // si está en Firebase:
            const resultsFilter = dbCompanies.filter((company) => {
                const filteredCompanies = company.name.toLowerCase().includes(submittedCompany.toLowerCase()); 
                return filteredCompanies; // boolean
            })
            setCompanies(resultsFilter); 
        } else {
            // si no está en Firebase, pero sí en Google
            setCompanies([]);
        }
    }

    // sustituir alerts por cambios estilos FormErrorHandler
    function handleClick(e) {
        e.preventDefault();
        if (chosenCompany === "") {
            return alert("Choose a company first!")
        } else if (checked === false) {
            return alert('Please, accept the Privacy Policy first.')
        } else {
        history.push(`/update-company?company=${chosenCompany}`);
        }
    }

    return (
        <animated.div style={fadeIn} className="form-box">
            <form action=""> 
                <h3>What is your company&apos;s name?</h3>
                    <div>
                        <input type="search" placeholder="Your company" value={selectedCompany} onChange={handleSelect}></input>
                        <div className="company-results">
                            {companies.map((company) => 
                                <li key={company.id} value={chosenCompany} onClick={setChosenCompany}>{company.name}</li>
                            )}
                        </div>
                    </div>
                <div className="new-registry-link"></div>
                <div className='privacy-check'>
                    <input type="checkbox" id="check-privacy" onChange={()=> setChecked(!checked)}></input>
                    <label htmlFor="true">I accept Bizzlock&apos;s <a href="/privacy-policy" id="privacy-link">Privacy Policy</a></label>
                </div>
                <input type="submit" id="signup-btn" value="UPDATE" onClick={handleClick}></input>
            </form>
        </animated.div>    
    )
}

export default SignUp;