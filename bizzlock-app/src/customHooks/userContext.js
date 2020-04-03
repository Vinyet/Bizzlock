import React, { createContext, useContext, useEffect } from 'react';
//import SignUp from '../pages/SignUp';


const UserContext = createContext();

const userState = {
    loggedout: 'You are logged out',
    loggedin: 'You are logged in'
}

function HeaderStyle() {
    const [header, setHeader] = useContext(UserContext);

    useEffect(() => {
        setHeader(header);
    })

    return (
        userState.loggedout ? <p>I am logged out</p> : <p>I am logged in</p>
    )
}

export {
    UserContext,
    userState,
    HeaderStyle
}

