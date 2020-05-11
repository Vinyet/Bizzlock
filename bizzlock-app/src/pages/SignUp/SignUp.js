import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';
import { getCompanies } from '../../services/data';
import { getAPIcompanies } from '../../services/apiServices';
import { register } from '../../services/auth';
import Alert from '@material-ui/lab/Alert';


const SignUp = () => {
    const history = useHistory();
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const [ checked, setChecked ] = useState(false);
    const [ dbCompanies, setDbCompanies ] = useState([]);
    const [ companies, setCompanies ] = useState([]); 
    const [ inputCompany, setInputCompany ] = useState(''); 
    const [ chosenCompany, setChosenCompany ] = useState(); 
    const [ result, setResult ] = useState(false);
    const [ newCompanyGoogle, setNewCompanyGoogle ] = useState();
    const [ newCompany, setNewCompany ] = useState('');
    const [ privacyErrorMessage, setPrivacyErrorMessage ] = useState(false);
    const [ companyErrorMessage, setCompanyErrorMessage ] = useState(false);

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
                (submittedCompany.length < 4) ? setResult(false) : setResult(true);
            } else {
                setCompanies([]);
                (submittedCompany.length < 4) ? setResult(false) : setResult(true);
                const googleAPIcompanies = await getAPIcompanies(submittedCompany);
                const APIcompanies = googleAPIcompanies.itemListElement.filter(company => {
                    company = { name: company.result.name, type: company.result['@type'] }
                    if (company.type.includes("Organization")) { 
                        const filteredAPIcompanies = company.name.toLowerCase().includes(submittedCompany.toLowerCase()); 
                        return filteredAPIcompanies; 
                    }
                }).map(elem => {
                    elem = {
                        name: elem.result.name,
                        type: elem.result['@type'],
                        description: elem.result.detailedDescription.articleBody,
                        website: elem.result.url,
                        image: elem.result.image
                    };
                    const companyType = elem.type.filter(x => x === "Organization") 
                    elem.type = companyType[0];
                    return elem;
                })
                if (APIcompanies.length) {
                    setNewCompanyGoogle(APIcompanies[0]);
                    setNewCompany('');
                } else if (googleAPIcompanies.itemListElement.length && !APIcompanies.length) {
                    setNewCompany(submittedCompany)
                }
            }
        }
    }

    const handleInputSelector = (e) => {
        const pickedCompanyId = e.target.id;
        const pickedCompanyName = e.target.getAttribute('name')
        if (companies && !newCompanyGoogle) {
            const getChosenCompany = companies.filter((company) => {
                return company.id === pickedCompanyId;
            })
            setChosenCompany(getChosenCompany[0]);
        } else if (newCompanyGoogle) {
                setChosenCompany(newCompanyGoogle);
            }
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
        if (!chosenCompany) {
            setCompanyErrorMessage(true);
        } else if (checked === false) {
            setPrivacyErrorMessage(true);
        } else if (newCompanyGoogle) {
            register();
            history.push('/create-company', newCompanyGoogle)
        } else if (companies) {
            register();
            history.push('/update-company', chosenCompany)
        } 
    }

    function showLink() { 
        if (inputCompany.length < 3 && companies || newCompanyGoogle) {
            return false;
        } else {
            return <p onClick={() => history.push('/create-company', newCompany)}>&apos;{newCompany}&apos; has not been registered yet. Create it here!</p>
        }
    }

    return (
        <div id="signup-container">
            <animated.div style={fadeIn} className="form-box">
                <form action=""> 
                    <h3>What is your company&apos;s name?</h3>
                    <div>
                        <input type="search" placeholder="Enter a company" value={inputCompany} onChange={handleInput}>{}</input>
                            {(result) ? 
                                <div className="company-results">
                                    {companies.map((company) => 
                                        <li key={company.id} id={company.id} value={chosenCompany} onClick={handleInputSelector}>{company.name}</li>
                                    )}
                                    {newCompanyGoogle ? <li name={newCompanyGoogle.name} value={newCompanyGoogle} onClick={handleInputSelector}>{newCompanyGoogle.name}</li> : null}
                                </div>
                            : null}
                    </div>
                    <div className="new-registry-text">
                        {showLink()}
                    </div>
                    <div className='privacy-check'>
                        <input type="checkbox" id="check-privacy" onChange={(e)=> setChecked(!checked)}></input>
                        <label htmlFor="true">I accept Bizzlock&apos;s <a href="/privacy-policy" id="privacy-link">Privacy Policy</a></label>
                        {(companyErrorMessage) ? <Alert variant="outlined" severity="error">Please, choose a company to update or create.</Alert> : null}
                        {(privacyErrorMessage) ? <Alert variant="outlined" severity="error">Please, accept the Privacy Policy to proceed.</Alert> : null}
                    </div>
                    <input type="submit" id="signup-btn" value="GO!" onClick={handleClick}></input>
                </form>
            </animated.div>    
        </div>
    )
}


export default SignUp;