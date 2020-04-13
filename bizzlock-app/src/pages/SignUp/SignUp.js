import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';
import { getCompanies } from '../../services/data';


const SignUp = () => {
    const history = useHistory();
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const [ checked, setChecked ] = useState(false);
    const [ selectedCompany, setSelectedCompany ] = useState();
    const [ chosenCompany, setChosenCompany ] = useState();
    const [ companies, setCompanies ] = useState([{}]);
    const [ dbCompanies, setDbCompanies ] = useState([])

    useEffect(() => {
        const fetchCompanies = async () => {
            const dbCompanies = await getCompanies();
            setDbCompanies(dbCompanies);
        }
        fetchCompanies();
    }, []);

    function handleSelect(e) {

        const companyInput = e.target.value;
        setSelectedCompany(companyInput);

        if (companyInput !== '') {
            const companyFilters = dbCompanies.filter((company) => {
                const regex = new RegExp(`[${companyInput}]`, 'i')
                //console.log(company.name.search(regex))
                return company.name.search(regex) !== -1;
                //return company.name.includes(companyInput);
            })
            setCompanies(companyFilters)
        }
    }

    function handleClick(e) {
        // sustituir alerts por cambios estilos FormErrorHandler
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
                        <input type="search" placeholder="Company" onChange={handleSelect}></input>
                        <div className="company-results">
                            {companies.map((company) => 
                                <li key={company.id} value={chosenCompany} onClick={setChosenCompany}>{company.name}</li>
                            )}
                        </div>
                    </div>
                <a href="/create-company" id="notonthelist">Are you looking for X? This company does not have a registry yet, but you can create it here.</a><br/>
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