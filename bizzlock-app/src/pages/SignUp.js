import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
//import { UserContext, userState, HeaderStyle } from '../customHooks/userContext';



const SignUp = () => {
    const [ user, setUser ] = useState();
    const [ company, setCompany ] = useState();
    const [ checked, setChecked ] = useState(false)

    function handleCheckbox() {
        checked === false ? setChecked(true) : setChecked(false)
    }

    function handleClick(e) {
        e.preventDefault();

        const username = document.querySelector('input[type=text');
        const companyname = document.querySelector('input[type=search]');

        // mejorar el toggle del border
        if (checked === false) {
            alert('Please, accept the Privacy Policy.');
        } else if (username.value === '' && companyname.value === '') {
            username.style.border = '1px solid red';
            companyname.style.border = '1px solid red';
        } else if (username.value === '') {
            username.style.border = '1px solid red';
        } else if (companyname.value === '') {
            companyname.style.border = '1px solid red';
        } else {
            setUser(username.value);
            setCompany(companyname.value);
            console.log('user: ' + user);
            console.log('company: ' + company) 
            // firebase?
            //companyname.value in firebase ? history.push('/update-company') : history.push('/create-company');
        }
    }

    return (
        <>
        <div className="form-box">
            <form action=""> 
                <h3>Sign in</h3>
                <input type="text" id="uname" placeholder="Username"></input>
                <input type="search" id="company-search-input" placeholder="Company"></input>
                <div className='privacy-check'>
                    <input type="checkbox" id="check-privacy" onClick={handleCheckbox}></input>
                    <p>Check our <a href="/privacy-policy">Privacy Policy</a></p>
                </div>
                <input type="submit" id="signup-btn" value="SUBMIT" onClick={handleClick}></input>
            </form>
        </div>    
        </>
    )
}

export default SignUp;