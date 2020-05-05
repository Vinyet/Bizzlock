import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';
import { getCompanies } from '../../services/data';
import CommentCreator from '../../components/Comments/CommentCreator';

const UpdateCompany = props => {
    const location = useLocation();
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const [ firebaseCompany, setFirebaseCompany ] = useState();
    const [ checked, setChecked ] = useState(false); 
    const [ overallRating, setOverallRating ] = useState(undefined); // 0 is falsy?
    const [ workLife, setWorkLife ] = useState(undefined);
    const [ salary, setSalary ] = useState(undefined);
    const [ comment, setComment ] = useState('');
    const [ form, setForm ] = useState({});

    useEffect(() => {
        const companyParsing = () => {
            const firebaseCompany = {
                name: location.state[0].name,
                industry: location.state[0].industry,
                location: location.state[0].location,
                comments: location.state[0].comments,
                // founded and description will disappear?
            }
        setFirebaseCompany(firebaseCompany);
        }
    })

    console.log('location is ', location)

    const handleWorkLife = (e) => {
        const ratingNumber = e.target.name;
        setWorkLife(ratingNumber);
        return (e.target.style.filter === 'grayscale(100%)') ? e.target.style.filter = 'grayscale(0%)' : e.target.style.filter = 'grayscale(100%)';
    }

    const handleSalary = (e) => {
        const ratingNumber = e.target.name;
        setSalary(ratingNumber);
        return (e.target.style.filter === 'grayscale(100%)') ? e.target.style.filter = 'grayscale(0%)' : e.target.style.filter = 'grayscale(100%)';
    }

    const handleOverallRating = (e) => {
        const ratingNumber = e.target.name;
        setOverallRating(ratingNumber);
        return (e.target.style.filter === 'grayscale(100%)') ? e.target.style.filter = 'grayscale(0%)' : e.target.style.filter = 'grayscale(100%)';
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!checked) {
            alert('Please, accept the Privacy policy')
        } else {
            /*const form = {
                workLife: (firebaseCompany.worklife + worklife) / 2, 
                salary: (firebaseCompany.salary + salary) / 2,
                overallRating: (firebaseCompany.overallRating + overallRating) / 2,
                comment: company.comments.push(comment)
            }           */
            setForm(form);
            /*const user = { input: form }
            await register(user);
            postCompany(form);*/
        }      
    }

    return (
        <animated.div style={fadeIn} className="update-container">
            <h2></h2>
                <p className="text-above">Fill the following form to update this company&apos;s registry. <br/>No one in the organisation will get notified, nor will they know you updated this file.</p>           
                <form className="create-form" onSubmit={handleFormSubmit}>   
                    <div className="company-feedback">   
                            <div className="star-rating-container">
                                <div className='star-rating'>
                                <label htmlFor='star-rating'>How is the work/life balance?</label>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star worklife-star" name={1} alt="one-star" onClick={handleWorkLife}></img>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star worklife-star" name={2} alt="three-stars" onClick={handleWorkLife}></img>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star worklife-star" name={3} alt="two-stars" onClick={handleWorkLife}></img>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star worklife-star" name={4} alt="four-stars" onClick={handleWorkLife}></img>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star worklife-star" name={5} alt="five-stars" onClick={handleWorkLife}></img>
                                </div>
                                <div className='star-rating'>
                                <label htmlFor='star-rating'>How well does this company pay?</label>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star pay-star" name={1} alt="one-star" onClick={handleSalary}></img>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star pay-star" name={2} alt="two-stars" onClick={handleSalary}></img>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star pay-star" name={3} alt="three-stars" onClick={handleSalary}></img>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star pay-star" name={4} alt="four-stars" onClick={handleSalary}></img>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star pay-star" name={5} alt="five-stars" onClick={handleSalary}></img>
                                </div>
                                <div className='star-rating'>
                                <label htmlFor='star-rating'>How would you rate your stay at this company?</label>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star overall-star" name={1} alt="one-star" onClick={handleOverallRating}></img>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star overall-star" name={2} alt="two-stars" onClick={handleOverallRating}></img>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star overall-star" name={3} alt="three-stars" onClick={handleOverallRating}></img>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star overall-star" name={4} alt="four-stars" onClick={handleOverallRating}></img>
                                    <img src="https://image.flaticon.com/icons/svg/2107/2107957.svg" style={{filter: 'grayscale(100%)'}} className="star overall-star" name={5} alt="five-stars" onClick={handleOverallRating}></img>
                                </div>
                            </div>
                    </div>
                    <label htmlFor="comment" className="comments-label">Comment (optional)</label>
                    <div className="comments-area">
                        <CommentCreator value={comment} onChange={setComment}/>
                    </div>
                    <div className="submit-btn">
                        <div className='privacy-check'>
                            <input type="checkbox" id="check-privacy" onChange={(e)=> setChecked(!checked)}></input>
                           <label htmlFor="true">I accept Bizzlock&apos;s <a href="/privacy-policy" id="privacy-link">Privacy Policy</a>.</label>
                        </div>
                        <input type="submit" id="create-btn"></input>
                    </div>
                </form>
        </animated.div>    
    )
}

/* show other people's comments? insta a finalizar el formulario y a dar confianza! */

export default UpdateCompany;