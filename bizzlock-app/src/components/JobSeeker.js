import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import makeAnimated from 'react-select/animated';


const JobSeeker = () => {
    const history = useHistory();
    const [location, setLocation] = useState('');
    const [industry, setIndustry] = useState('');

    function handleClick() {
        history.push(`/company-listing/?location=${location}?industry=${industry}`);
    }

    return (
        <div className='jobseeker-container'>
            <img src='https://image.flaticon.com/icons/svg/1924/1924437.svg' alt='job-seeker-icon'/>
            <p>I&apos;m looking for a job and I want to read about other people&apos;s experiences</p>
            <div className="jobseeker-select">
                <select onChange={(e) => setLocation(e.value) } placeholder="Select location">
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
                <select onChange={(e) => setIndustry(e.value) } placeholder="Select industry">
                    <option>Select industry</option>
                    <option>IT</option>
                    <option>Retail</option>
                </select>
            </div>
            <button onClick={handleClick}>SEARCH</button>
        </div>    
    )
}

export default JobSeeker;