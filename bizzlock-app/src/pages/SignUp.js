import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Input from 'react-select';
import FormErrorHandler from '../components/FormErrorHandler';
//import { useHistory } from 'react-router-dom';
//import { UserContext, userState, HeaderStyle } from '../customHooks/userContext';


const SignUp = () => {
    const [ checked, setChecked ] = useState(false)
    const [ company, setCompany ] = useState();
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});

    function handleCheckbox() {
        checked === false ? setChecked(true) : setChecked(false)
    }

    function handleClick(e) {
        e.preventDefault();
        // include CheckboxError ONLY here (?)
        // no cogerlo con el dom, hacer con clase del 03/04
        const companyname = e.target.value;

        setCompany(companyname);
        console.log('company: ' + company) 
            //companyname.value in firebase ? history.push('/update-company') : history.push('/create-company');
    }

    return (
        <>
        <animated.div style={fadeIn} className="form-box">
            <form action=""> 
                <h3>What is your company&apos;s name?</h3>
                <Input id="company-search-input" autoFocus/>
                <div className='privacy-check'>
                    <input type="checkbox" id="check-privacy" onClick={handleCheckbox}></input>
                    <p>I accept Bizzlock&apos;s <a href="/privacy-policy" id="privacy-link">Privacy Policy</a></p>
                </div>
                <input type="submit" id="signup-btn" value="UPDATE" onClick={handleClick}></input>
                <a href="/create-company" id="notonthelist">Your company is not on the list? Create it here.</a><br/>

            </form>
        </animated.div>    
        </>
    )
}

export default SignUp;