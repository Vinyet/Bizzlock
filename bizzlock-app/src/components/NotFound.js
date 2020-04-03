import React from 'react';
import NotFoundImg from "./notfoundimg.png";


const NotFound = () => {
    return (
        <>
        <div style={{backgroundColor: 'white'}}>
            <img src={NotFoundImg} alt='page-not-found'></img>
        </div>
        </>
    )
}


export default NotFound;