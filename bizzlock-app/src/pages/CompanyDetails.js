import React from 'react';
import { useSpring, animated } from 'react-spring';
import Comments from '../components/Comments';


const CompanyDetails = () => {
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <animated.div style={fadeIn} className="company-details-container">
            <div className="company-detail-container">Company info goes here</div>
            <Comments />
        </animated.div>
    )
}

export default CompanyDetails;