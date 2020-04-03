import React from 'react';
import { UserContext, userState } from '../customHooks/userContext';

// how to insert header inside div. provider/consumer?

const Header = () => {
    return (
        <>
        <UserContext.Provider value={userState.loggedout}>
            <header> 
                <a href="/"><img src="/logov.png" alt="bizzlock-logo" className="logo"/></a>
                <div></div>
            </header>
        </UserContext.Provider>
        </>
    )
}

export default Header;