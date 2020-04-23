import React from 'react';
import { useSpring, animated } from 'react-spring';


const UpdateCompany = () => {
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <animated.div style={fadeIn} className="update-container">
            <form action="">
                <h2>Create registry for company.name</h2>
                <label>Test</label>
                <input type="text"></input>
            </form>
        </animated.div>    
    )
}

export default UpdateCompany;