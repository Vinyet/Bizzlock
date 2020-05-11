import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const cities = [
    { title: 'Álava' },
    { title: 'Albacete' },
    { title: 'Alicante' },
    { title: 'Almería' },
    { title: 'Asturias' },
    { title: 'Ávila' },
    { title: 'Badajoz' },
    { title: 'Baleares' },
    { title: 'Barcelona' },
    { title: 'Burgos' },
    { title: 'Cáceres' },
    { title: 'Cádiz' },
    { title: 'Cantabria' },
    { title: 'Castellón' },
    { title: 'Ciudad Real' },
    { title: 'Córdoba' },
    { title: 'La Coruña' },
    { title: 'Cuenca' },
    { title: 'Gerona' },
    { title: 'Granada' },
    { title: 'Guadalajara' },
    { title: 'Guipúzcoa' },
    { title: 'Huelva' },
    { title: 'Jaén' },
    { title: 'León' },
    { title: 'Lérida' },
    { title: 'Lugo' },
    { title: 'Madrid' },
    { title: 'Málaga' },
    { title: 'Murcia' },
    { title: 'Navarra' },
    { title: 'Orense' },
    { title: 'Palencia' },
    { title: 'Las Palmas' },
    { title: 'Pontevedra' },
    { title: 'La Rioja' },
    { title: 'Salamanca' },
    { title: 'Segovia' },
    { title: 'Sevilla' },
    { title: 'Soria' },
    { title: 'Tarragona' },
    { title: 'Santa Cruz de Tenerife' },
    { title: 'Teruel' },
    { title: 'Toledo' },
    { title: 'Valencia' },
    { title: 'Valladolid' },
    { title: 'Vizcaya' },
    { title: 'Zamora' },
    { title: 'Zaragoza' },
]

const industries = [
    { title: 'Arts and graphic design' },
    { title: 'Business Administration' },
    { title: 'Construction' },
    { title: 'Finances' },
    { title: 'Health' },
    { title: 'Human Resources' },
    { title: 'IT' },
    { title: 'Marketing and Communication' },
    { title: 'Retail' },
    { title: 'Sales' },
    { title: 'Science and Engineering' },
    { title: 'Tourism and Hospitality' },
    { title: 'Others' }
]

const JobSeeker = () => {
    const [ location, setCity ] = useState(undefined);
    const [ industry, setIndustry ] = useState(undefined);

    return (
        <div className='jobseeker-container'>
            <img src='https://image.flaticon.com/icons/svg/1924/1924437.svg' alt='job-seeker-icon'/>
            <p>I&apos;m looking for a job and I want to read about other people&apos;s experiences</p>
            <div className="jobseeker-select">
            <Autocomplete id="free-solo-demo" freeSolo options={cities.map((option) => option.title)} onChange={(event, newValue) => {setCity(newValue)}} renderInput={(params) => (
                <TextField {...params} label="Localización" margin="normal" variant="outlined" />
            )}/>
            <Autocomplete id="free-solo-demo" freeSolo options={industries.map((option) => option.title)} onChange={(event, newValue) => {setIndustry(newValue)}} renderInput={(params) => (
                <TextField {...params} label="Industry" margin="normal" variant="outlined" />
            )}/>
            </div>
            <Link to={`/company-listing/${location}/${industry}`}>
            <button>SEARCH</button>
            </Link>
        </div>    
    )
}

export default JobSeeker;

