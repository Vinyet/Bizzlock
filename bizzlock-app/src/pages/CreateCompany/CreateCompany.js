import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CommentsCreate from '../../components/Comments';


// ref + react-hook-form, clase del 03/04

const CreateCompany = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyLocation, setCompanyLocation] = useState('');
    const [industry, setIndustry] = useState('');
    const [comment, setComment] = useState('');
    const history = useHistory();
    // const errors 

    useEffect(() => {
        setCompanyName(companyName);
        setCompanyLocation(companyLocation);
    }, []);

    function handleCancel(e) {
        e.preventDefault();
        history.push("/");
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCompanyName(companyName.value);
        setIndustry(industry.value);
        setComment(comment);
        console.log('company name is ' + companyName)
    }

    return (
        <>
            <div className='create-form'>
                <h2>Create a new company</h2>
                <p>If the company you work for does not appear on Bizzlock, you can add it below.<br/> <b>No one in the organisation will get notified, nor will they know who added the company.</b></p>           
                <form className="create-company-form">
                    <label>What&apos;s the company&apos;s name?</label>
                    <input type="text" onChange={(e) => setCompanyName(e.target.value)}></input>
                    <label>Where is it located?</label>
                    <input type="text" onChange={(e) => setCompanyLocation(e.target.value)}></input>
                    <label htmlFor="industry">Industry</label>
                    <select id="industry" props="defaultValue" required onChange={(e) => setIndustry(e.target.value)}>
                        <option value="" disabled>Choose an option</option>
                        <option value="Communication, Marketing and PR">Communication, Marketing and PR</option>    
                        <option value="Engineering &amp; IT">Engineering &amp; IT</option>
                        <option value="Education">Education</option>
                    </select>
                    <p style={{textAlign: "left"}}><b>What job perks does the company offer?</b></p>
                    <div className="perks-flex">
                        <div>
                            <input type="checkbox" className="perks-check"></input><p>Restaurant discounts</p><br/>
                            <input type="checkbox" className="perks-check"></input><p>Gym</p><br/>
                            <input type="checkbox" className="perks-check"></input><p>Nursery</p><br/>
                            <input type="checkbox" className="perks-check"></input><p>Birthdays off</p><br/>
                            <input type="checkbox" className="perks-check"></input><p>Flexible schedule</p><br/>
                        </div>
                        <div>
                            <input type="checkbox" className="perks-check"></input> <p>Free coffee</p><br/>
                            <input type="checkbox" className="perks-check"></input> <p>Free fruit and snacks</p><br/>
                            <input type="checkbox" className="perks-check"></input> <p>Relaxing employee area</p><br/>
                            <input type="checkbox" className="perks-check"></input> <p>Good views</p><br/>
                            <input type="checkbox" className="perks-check"></input> <p>Fully equipped kitchen</p><br/>
                        </div>
                        <div>
                            <input type="checkbox" className="perks-check"></input> <p>Good views</p><br/>
                            <input type="checkbox" className="perks-check"></input> <p>Formación</p><br/>
                            <input type="checkbox" className="perks-check"></input> <p>Health insurance</p><br/>
                            <input type="checkbox" className="perks-check"></input> <p>Free parking</p><br/>
                            <input type="checkbox" className="perks-check"></input> <p>Plus por objetivos</p><br/>
                        </div>
                    </div>
                    <label>Comment  (optional)</label>
                    <CommentsCreate onChange={(e) => setComment(e.target.value)} />
                    <div className="submit-btns">
                        <input type="submit" id="create-btn" value="CREATE" onClick={handleSubmit}></input>
                        <button onClick={handleCancel}>CANCEL</button>
                    </div>
                </form>
            </div>
        </>    
    )
}

/*<h6>Rate the following aspects:</h6>*/


export default CreateCompany;