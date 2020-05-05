import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';
import { getCompanies } from '../../services/data';
import { getAPIcompanies } from '../../services/apiServices';


const SignUp = () => {
    const history = useHistory();
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const [ checked, setChecked ] = useState(false);
    const [ dbCompanies, setDbCompanies ] = useState([]);
    const [ companies, setCompanies ] = useState([]); 
    const [ inputCompany, setInputCompany ] = useState(''); 
    const [ chosenCompany, setChosenCompany ] = useState([{}]); 
    const [ newCompanyGoogle, setNewCompanyGoogle ] = useState();
    const [ newCompany, setNewCompany ] = useState('');

    useEffect(() => {
        const fetchCompanies = async () => {
            const dbCompanies = await getCompanies();
            setDbCompanies(dbCompanies);
        }
        fetchCompanies();
    }, []);

    const handleInput = async (e) => {
        const submittedCompany = e.target.value;
        setInputCompany(submittedCompany);
        if (submittedCompany && submittedCompany.length > 2) {
            const resultsFilter = dbCompanies.filter((company) => {
                const filteredCompanies = company.name.toLowerCase().includes(submittedCompany.toLowerCase()); 
                return filteredCompanies;
            })
            if (!!resultsFilter.length) {
                setCompanies(resultsFilter);
            } else {
                setCompanies([]);
                const googleAPIcompanies = await getAPIcompanies(submittedCompany);
                const APIcompanies = googleAPIcompanies.itemListElement.filter(company => {
                    company = { name: company.result.name, type: company.result['@type'] }
                    if (company.type.includes("Organization")) { 
                        const filteredAPIcompanies = company.name.toLowerCase().includes(submittedCompany.toLowerCase()); 
                        return filteredAPIcompanies; 
                    }
                }).map(elem => {
                    elem = { name: elem.result.name, type: elem.result['@type'], description:  elem.result.detailedDescription.articleBody};
                    const companyType = elem.type.filter(x => x === "Organization") 
                    elem.type = companyType[0];
                    return elem;
                })
                if (APIcompanies.length) {
                    setNewCompanyGoogle(APIcompanies[0])
                } else if (googleAPIcompanies.itemListElement.length && !APIcompanies.length) {
                    setNewCompany(submittedCompany)
                }
            }
        }
    }

    const handleInputSelector = (e) => {
        const pickedCompany = e.target.id;
        const getChosenCompany = dbCompanies.filter((company) => {
            if (company.id === pickedCompany) {
                const result = company;
                return result;
            } 
        })
        setChosenCompany(getChosenCompany);
        const listDisplay = e.target;
        if (listDisplay.style.display = 'block') {
            listDisplay.style.display = 'none';
            return listDisplay;
        } else if (listDisplay.style.display = 'none') {
            listDisplay.style.display = 'block';
            return listDisplay;
        }
    } 

    const handleClick = async (e) => {
        e.preventDefault();
        if (chosenCompany === undefined) {
            return alert("Choose a company first!") // sustituir alerts por cambios estilos FormErrorHandler
        } else if (checked === false) {
            return alert('Please, accept the Privacy Policy first.')
        } else if (newCompanyGoogle) {
            history.push('/create-company', newCompanyGoogle)
        } else if (companies) {
            history.push('/update-company', chosenCompany)
        } 
    }

    function showLink() { 
        if (inputCompany === '') {
            return false;
        } else if (newCompany) {
            //return <Link to={`/create-company/${newCompany}`}>{newCompany} has not been registered yet. Create it here!</Link> 
            return <p onClick={() => history.push('/create-company', newCompany)}>{newCompany} has not been registered yet. Create it here!</p>

        }
    }

    return (
        <div id="signup-container">
            <animated.div style={fadeIn} className="form-box">
                <form action=""> 
                    <h3>What is your company&apos;s name?</h3>
                    <div>
                    <input type="search" placeholder="Your company" value={inputCompany} onChange={handleInput}>{}</input>
                        <div className="company-results">
                            {(inputCompany === '') ? false :                       
                            companies.map((company) => 
                                <li key={company.id} id={company.id} value={chosenCompany} onClick={handleInputSelector}>{company.name}</li>
                            )}
                            {newCompanyGoogle ? <li value={newCompanyGoogle} onClick={handleInputSelector}>{newCompanyGoogle.name}</li> : null}
                        </div>
                    </div>
                    <div className="new-registry-text">
                        {showLink()}
                    </div>
                    <div className='privacy-check'>
                        <input type="checkbox" id="check-privacy" onChange={(e)=> setChecked(!checked)}></input>
                        <label htmlFor="true">I accept Bizzlock&apos;s <a href="/privacy-policy" id="privacy-link">Privacy Policy</a></label>
                    </div>
                    <input type="submit" id="signup-btn" value="UPDATE" onClick={handleClick}></input>
                </form>
            </animated.div>    
        </div>
    )
}


export default SignUp;