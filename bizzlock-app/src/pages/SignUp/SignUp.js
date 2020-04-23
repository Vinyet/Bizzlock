import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';
import { getCompanies } from '../../services/data';
import { getAPIcompanies } from '../../services/apiServices';
import { register } from '../../services/auth';


const SignUp = () => {
    const history = useHistory();
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const [ checked, setChecked ] = useState(false);
    const [ dbCompanies, setDbCompanies ] = useState([]) // ARRAY: all companies fetched from Firebase
    const [ companies, setCompanies ] = useState([]); // ARRAY: companies from Firebase or Google that match submittedCompany
    const [ inputCompany, setInputCompany ] = useState(''); // STRING: company selected from Firebase
    const [ chosenCompany, setChosenCompany ] = useState(); // STRING: company chosen on submit
    const [ newCompany, setNewCompany ] = useState('');
    const [ loading, setLoading ] = useState(true) // BOOLEAN: devolver false al final de la búsqueda

    // LOADING ???? 
    useEffect(() => {
        //setLoading(false);
    }, []);

    // SHOW LINK IF COMPANY IS NEW
    const ShowLink = (submittedCompany) => { 
        // auth.signInAnonymously(); ?? place inside create company page?
        /*setNewCompany(submittedCompany) 
        return <div>Hello</div>*/
    }

    // FETCH FIREBASE 
    useEffect(() => {
        const fetchCompanies = async () => {
            const dbCompanies = await getCompanies();
            setDbCompanies(dbCompanies);
        }
        fetchCompanies();
    }, []);

    // HANDLES COMPANY INPUT
    const handleInput = async (e) => {
        const submittedCompany = e.target.value;
        setInputCompany(submittedCompany);

        if (submittedCompany && submittedCompany.length > 2) {
            // FIREBASE
            const resultsFilter = dbCompanies.filter((company) => {
                const filteredCompanies = company.name.toLowerCase().includes(submittedCompany.toLowerCase()); 
                return filteredCompanies;
            })
            if (!!resultsFilter.length) { setCompanies(resultsFilter) }
            else {
            setCompanies([]);
            // GOOGLE 
            const googleAPIcompanies = await getAPIcompanies(submittedCompany);
            const APIcompanies = googleAPIcompanies.itemListElement.filter(company => {
                company = { name: company.result.name, type: company.result['@type'] }
                if (company.type.includes("Organization")) { 
                    const filteredAPIcompanies = company.name.toLowerCase().includes(submittedCompany.toLowerCase()); 
                    return filteredAPIcompanies; 
                }
            }).map(elem => {
                elem = { name: elem.result.name, type: elem.result['@type'] };
                const companyType = elem.type.filter(x => x === "Organization") 
                elem.type = companyType[0]
                return elem;
            })
                if (!!APIcompanies.length) { setCompanies(APIcompanies); } else { setCompanies([]); ShowLink(submittedCompany) }
            }
        }
    }

    // SUBMIT BUTTON 
    const handleClick = async (e) => {
        e.preventDefault();
        if (chosenCompany === undefined) {
            return alert("Choose a company first!") // sustituir alerts por cambios estilos FormErrorHandler
        } else if (checked === false) {
            return alert('Please, accept the Privacy Policy first.')
        } else {
        const user = await register();
        history.push(`/update-company?company=${chosenCompany}`);
        }
    }

    return (
        <animated.div style={fadeIn} className="form-box">
            <form action=""> 
                <h3>What is your company&apos;s name?</h3>
                <div>
    <input type="search" placeholder="Your company" value={inputCompany} onChange={handleInput}>{}</input>
                    <div className="company-results">
                        {companies.map((company) => 
                            <li key={company.id} value={chosenCompany} onClick={() => setChosenCompany(company.name)}>{company.name}</li>
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