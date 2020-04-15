import React from 'react';
//import { UserContext, userState } from '.../'; /* can't access it! */


// how to insert header inside div. provider/consumer?
// <UserContext.Provider value={userState.loggedout}>

const Header = () => {
    return (
        <header> 
            <a href="/"><img src="/test.png" alt="bizzlock-logo" className="logo"/></a>
        </header>
    )
}

export default Header;