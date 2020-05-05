import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// make selects optional! 

const JobSeeker = props => {
    const [location, setLocation] = useState('');
    const [industry, setIndustry] = useState('');

    return (
        <div className='jobseeker-container'>
            <img src='https://image.flaticon.com/icons/svg/1924/1924437.svg' alt='job-seeker-icon'/>
            <p>I&apos;m looking for a job and I want to read about other people&apos;s experiences</p>
            <div className="jobseeker-select">
                <select onChange={(e) => setLocation(e.target.value)} placeholder="Select location">
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
                <select onChange={(e) => setIndustry(e.target.value)} placeholder="Select industry">
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
            <Link to={`/company-listing/${location}/${industry}`}>
            <button>SEARCH</button>
            </Link>
        </div>    
    )
}

export default JobSeeker;

