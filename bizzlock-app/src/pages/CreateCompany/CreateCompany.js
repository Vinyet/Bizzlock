import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory, useParams } from 'react-router-dom';
import CommentsSection from '../../components/Comments/Comments';


// ref + react-hook-form, clase del 03/04
const CreateCompany = () => {
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const history = useHistory();
    const { companyName } = useParams();
    const [ location, setLocation] = useState(); // hq? 
    const [ industry, setIndustry] = useState(); 
    const [ rating, setRating ] = useState(); // number?
    const [ salary, setSalary ] = useState(); // number?
    const [comment, setComment] = useState('');

    function handleCancel(e) {
        e.preventDefault();
        history.push("/sign-up");
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIndustry(industry.value);
        setComment(comment);
    }

    return (
        <>
            <div className='create-company-form'>
                <h2>Create registry for {companyName}</h2>
                <p className="text-above">If the company you work for does not appear on Bizzlock, you can add it below.<br/> <b>No one in the organisation will get notified, nor will they know who added the company.</b></p>           
                <form className="create-form">   
                    <div className="information-selects">
                        <div className="industry-select">
                            <select id="industry" required onChange={(e) => setIndustry(e.target.value)}>
                                <option value="">Select the industry</option>
                                <option value="Communication, Marketing and PR">Communication, Marketing and PR</option>    
                                <option value="Engineering &amp; IT">Engineering &amp; IT</option>
                                <option value="Education">Education</option>
                            </select>
                        </div>
                        <div className="location-select">    
                            <select onChange={(e) => setLocation(e.target.value) } placeholder="Select location">
                                <option>Select the location</option>
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
                    <input type="text" placeholder="Sitio web"></input>
                    <hr/>
                    <div className="company-feedback">         
                        <h5>Rate the following aspects:</h5>
                            <p>How well does this company pay? (in context, etc)</p>
                            <p>How long have you been working for this company?</p>
                            <p>How would you rate your overall experience with this company?</p>
                            <p>How is the work/life balance?</p>
                        <hr/>
                        <h5>What job perks does this company offer?</h5>
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
                                <input type="checkbox" className="perks-check"></input> <p>X</p><br/>
                                <input type="checkbox" className="perks-check"></input> <p>Formación</p><br/>
                                <input type="checkbox" className="perks-check"></input> <p>Health insurance</p><br/>
                                <input type="checkbox" className="perks-check"></input> <p>Free parking</p><br/>
                                <input type="checkbox" className="perks-check"></input> <p>Plus por objetivos</p><br/>
                            </div>
                        </div>
                    </div>
                        <div className="comments-area">
                        <label>Leave a comment (optional)</label>
                        <CommentsSection value={comment} />
                        <div className="submit-btns">
                            <input type="submit" id="create-btn" value="CREATE" onClick={handleSubmit}></input>
                            <button onClick={handleCancel}>CANCEL</button>
                        </div>
                    </div>
                </form>
            </div>
        </>    
    )
}


export default CreateCompany;