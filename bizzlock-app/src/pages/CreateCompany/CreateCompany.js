import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory, useLocation } from 'react-router-dom';
import { register } from '../../services/auth';
import { getAPIcompanies } from '../../services/apiServices';
import { postCompany } from '../../services/data';
import { getPerkIndex } from '../../logic/jobperks';
import CommentCreator from '../../components/Comments/CommentCreator';
import Box from '@material-ui/core/Box';
import StarBorderIcon from "@material-ui/icons/StarBorder";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Typography from "@material-ui/core/Typography";
import Rating from '@material-ui/lab/Rating';


const CreateCompany = props => {
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const history = useHistory();
    const location = useLocation();
    const [ newCompanyName, setNewCompanyName ] = useState('');
    const [ googleCompany, setGoogleCompany ] = useState(undefined);
    const industryRef = useRef(null);
    const locationRef = useRef(null);
    const websiteRef = useRef(null);
    const [ workLife, setWorkLife ] = useState(undefined);
    const [ salary, setSalary ] = useState(undefined);
    const [ overallRating, setOverallRating ] = useState(undefined);
    const [ perks, setPerks ] = useState([]);
    const [ checked, setChecked ] = useState(false);
    const [ comment, setComment ] = useState('');

    useEffect(() => {
        parse();
    })

    const parse = () => {
        if (typeof(location.state) === 'string') {
            const getNewCompany = location.state;
            setNewCompanyName(getNewCompany);
        } else if (typeof(location.state) === 'object') {
            const getGoogleCompany = location.state;
            setNewCompanyName(getGoogleCompany.name);
            setGoogleCompany(getGoogleCompany);
        }
    }
  
    const handleWorkLife = (e) => {
        (e.target.style = {filter: 'grayscale(100%)'}) ? e.target.style = {} : e.target.style = {filter: 'grayscale(100%)'} // no funciona
        const ratingNumber = e.target.name;      
        setWorkLife(ratingNumber);
    }

    const handleSalary = (e) => {
        (e.target.style = {}) ? e.target.style = "yellow" : e.target.style = "yellow";
        const ratingNumber = e.target.name;
        setSalary(ratingNumber);
    }

    const handleOverallRating = (e) => {
        (e.target.style = {}) ? e.target.style = "yellow" : e.target.style = "yellow";
        const ratingNumber = e.target.name;
        setOverallRating(ratingNumber);
    }

    const handleJobPerks = (e) => {
        const perkName = e.target.name;
        const perkIndex = getPerkIndex(perkName);
        setPerks([
            ...perks,
            { perkId: perkName }
        ])
    } 

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!checked) {
            alert('Please, accept the Privacy policy')
        } /*else {
            const form = {
                name: location.state.name,
                location: locationRef.current.value,
                industry: industryRef.current.value,
                website: websiteRef.current.value,
                jobPerks: perks,
                workLife: workLife,
                salary: salary,
                overallRating: overallRating
                }
            const user = { input: form }
            await register(user);
            postCompany(form);
        }      */
    }
    
    function handleCancel(e) {
        e.preventDefault();
        history.push("/sign-up");
    }

    return (
        <>
            <animated.div style={fadeIn} className='create-company-form'>
                <h2>Create registry for <span>{newCompanyName}</span></h2>
                <p className="text-above">No one in the organisation will get notified, nor will they know who added the company.</p>           
                <form className="create-form" onSubmit={handleFormSubmit}>   
                    {(googleCompany) ? 
                        <div className="company-description">DESCRIPTION GOES HERE</div>
                    : null
                    }
                    <div className="information-selects">
                        <div className="industry-select">
                            <label htmlFor="industry-option">INDUSTRY</label>
                            <select id="industry-option" required ref={industryRef}>
                                <option>Select industry</option> 
                                <option>Arts and graphic design</option>
                                <option>Business Administration</option>
                                <option>Construction</option>
                                <option>Finances</option>
                                <option>Health</option>
                                <option>Human Resources</option>
                                <option>IT</option>
                                <option>Marketing and Communication</option>
                                <option>Retail</option>
                                <option>Sales</option>
                                <option>Science and Engineering</option>
                                <option>Tourism and hospitality</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div className="location-select">    
                            <label htmlFor="location-option">LOCATION</label>
                            <select id="location-option" required ref={locationRef}>
                                <option>Select location</option> 
                                <option>Álava</option>
                                <option>Albacete</option>
                                <option>Alicante</option>
                                <option>Almería</option>
                                <option>Asturias</option>
                                <option>Ávila</option>
                                <option>Badajoz</option>
                                <option>Baleares</option>
                                <option>Barcelona</option>
                                <option>Burgos</option>
                                <option>Cáceres</option>
                                <option>Cádiz</option>
                                <option>Cantabria</option>
                                <option>Castellón</option>
                                <option>Ciudad Real</option>
                                <option>Córdoba</option>
                                <option>La Coruña</option>
                                <option>Cuenca</option>
                                <option>Gerona</option>
                                <option>Granada</option>
                                <option>Guadalajara</option>
                                <option>Guipúzcoa</option>
                                <option>Huelva</option>
                                <option>Huesca</option>
                                <option>Jaén</option>
                                <option>León</option>
                                <option>Lérida</option>
                                <option>Lugo</option>
                                <option>Madrid</option>
                                <option>Málaga</option>
                                <option>Murcia</option>
                                <option>Navarra</option>
                                <option>Orense</option>
                                <option>Palencia</option>
                                <option>Las Palmas</option>
                                <option>Pontevedra</option>
                                <option>La Rioja</option>
                                <option>Salamanca</option>
                                <option>Segovia</option>
                                <option>Sevilla</option>
                                <option>Soria</option>
                                <option>Tarragona</option>
                                <option>Sta Cruz de Tenerife</option>
                                <option>Teruel</option>
                                <option>Toledo</option>
                                <option>Valencia</option>
                                <option>Valladolid</option>
                                <option>Vizcaya</option>
                                <option>Zamora</option>
                                <option>Zaragoza</option>
                            </select>
                        </div>
                    </div> 
                    <div className="optional-info">
                        <div className="website-box">
                            <label htmlFor="website-input">WEBSITE (optional)</label><br/>
                            <input type="text" id="website-input" name="website" ref={websiteRef}></input>
                        </div>
                    </div>    

                    <div className="company-feedback">   
                            <h5>Rate the following aspects:</h5>
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

                        <h5>What job perks does this company offer?</h5>
                        <div className="perks-flex">
                            <div>
                                <input type="checkbox" className="perks-check" name="perk1" onChange={handleJobPerks}></input><p>Restaurant discounts</p><br/>
                                <input type="checkbox" className="perks-check" name="perk2" onChange={handleJobPerks}></input><p>Gym membership</p><br/>
                                <input type="checkbox" className="perks-check" name="perk3" onChange={handleJobPerks}></input><p>Nursery</p><br/>
                                <input type="checkbox" className="perks-check" name="perk4" onChange={handleJobPerks}></input><p>Birthdays off</p><br/>
                                <input type="checkbox" className="perks-check" name="perk5" onChange={handleJobPerks}></input><p>Flexible schedule</p><br/>
                            </div>
                            <div>
                                <input type="checkbox" className="perks-check" name="perk6" onChange={handleJobPerks}></input> <p>Free coffee</p><br/>
                                <input type="checkbox" className="perks-check" name="perk7" onChange={handleJobPerks}></input> <p>Free fruit and snacks</p><br/>
                                <input type="checkbox" className="perks-check" name="perk8" onChange={handleJobPerks}></input> <p>Relaxing employee area</p><br/>
                                <input type="checkbox" className="perks-check" name="perk9" onChange={handleJobPerks}></input> <p>Good views</p><br/>
                                <input type="checkbox" className="perks-check" name="perk10" onChange={handleJobPerks}></input> <p>Fully equipped kitchen</p><br/>
                            </div>
                            <div>
                                <input type="checkbox" className="perks-check" name="perk11" onChange={handleJobPerks}></input> <p>Open offices</p><br/>
                                <input type="checkbox" className="perks-check" name="perk12" onChange={handleJobPerks}></input> <p>Training</p><br/>
                                <input type="checkbox" className="perks-check" name="perk13" onChange={handleJobPerks}></input> <p>Health insurance</p><br/>
                                <input type="checkbox" className="perks-check" name="perk14" onChange={handleJobPerks}></input> <p>Free parking</p><br/>
                                <input type="checkbox" className="perks-check" name="perk15" onChange={handleJobPerks}></input> <p>Employee bonus plan</p><br/>
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
        </>    
    )
}

export default CreateCompany;