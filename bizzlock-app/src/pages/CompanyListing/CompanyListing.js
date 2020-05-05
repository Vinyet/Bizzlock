import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { getCompanies } from '../../services/data';
//import CompanyDetails from '../../components/CompanyDetails/CompanyDetails';


const CompanyListing = props => {
    const { location, industry } = useParams(); 
    const extraFadeIn = useSpring({opacity: 2, from: {opacity: 0}});
    const [ companies, setCompanies ] = useState([]);
    const [ showDetails, setShowDetails ] = useState(false);
    const [ matches, setMatches ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const locationRef = useRef(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            const dbCompanies = await getCompanies();
            setCompanies(dbCompanies);
        }
        fetchCompanies();
        setLoading(false);
    }, []);

    useEffect(() => {
        if (industry && location) {
            const searchMatches = companies.filter((company) => {
                const locationMatches = company.location.toLowerCase() === location.toLowerCase();
                return locationMatches;
            })
            searchMatches.length ? setMatches(searchMatches) : setMatches([]); // ¿qué mostrar si no hay matches?
        }
    }, [companies, industry, location])

    const getCompanyList = () => {
        if (!!matches.length) {
            return matches.map((match) => {
                return (
                    <div className="results-box" key={match.id} >
                        <animated.div style={extraFadeIn} className="company-result-single" onClick={() => setShowDetails(match.id)}>
                            <div key={match.id} className="company-photo">
                                <img src="https://logosmarcas.com/wp-content/uploads/2018/05/Apple-logo.png" alt="company-logo"/>
                            </div>    
                            <div className="company-info">
                                <h2>{match.name}</h2>
                                {match.industry}
                                <p>Founded in {match.founded}</p>
                            </div>
                        </animated.div>
                    </div>
                )
            }) 
        } else {
            return (
                <div className="results-box">
                    <animated.div style={extraFadeIn} className="company-result-single">No results found</animated.div>
                </div>
            )
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();        
        if (e.target.value === companies[0].name) { // grab ANY object inside the array
            console.log(e.target.value)
        } else {
            console.log('no match found')
        }
    }

    const handleFilter = async (e) => {
        e.preventDefault();
        const filters = {
            location: locationRef.current.value // not working
        }          
    }

    const CompanyDetails = ({ id }) => {
        return <>Company ID: {id}</>;
    }

    if (loading) return (
        <div className="bouncing-loader">
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
  
    return (
        <>
        <div className="listing-banner">
            <input type="search" autoFocus id="listing-search" onChange={handleSearch} placeholder="Search" />
            <select>
                <option>Most relevant</option>
                <option>Closest to me</option>
                <option>Best rated</option>
                <option>Worst rated</option>
            </select>
        </div>

        <animated.div style={extraFadeIn} className="listing-container">

            <aside className="listing-sidebar">
                <h4 style={{display: 'inline-block', marginRight: '15px'}}>Salary</h4>
                <div className="slidercontainer">
                    <input type="range" min="1" max="100" defaultValue="50" className="slider"/>
                </div>
                <h4>Rating</h4>
                <img src="https://img.icons8.com/office/16/000000/filled-star.png" alt="one star"/> 
                <img src="https://img.icons8.com/office/16/000000/filled-star.png" alt="two stars"/> 
                <img src="https://img.icons8.com/office/16/000000/filled-star.png" alt="three stars"/> 
                <img src="https://img.icons8.com/office/16/000000/filled-star.png" alt="four stars"/> 
                <img src="https://img.icons8.com/office/16/000000/filled-star.png" alt="five stars"/>
                <h4>Change location</h4>
                <select ref={locationRef}>
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
                <h4>Change industry</h4>
                <select>
                    <option>Marketing &amp; Communications</option>
                    <option>Programming and IT</option>
                    <option>Retail</option>
                    <option>Education</option>
                </select>
                <h4>Job perks</h4>
                    <p><input type="checkbox"></input>Gym</p>
                    <p><input type="checkbox"></input>Restaurant discounts</p>
                    <p><input type="checkbox"></input>Nursery</p>
                    <p><input type="checkbox"></input>Free coffee</p>
                    <p><input type="checkbox"></input>Birthdays off</p>
                    <p><input type="checkbox"></input>Flexible schedule</p>
                    <p><input type="checkbox"></input>Relaxing employee area</p>
                    <p><input type="checkbox"></input>Good views</p>
                    <p><input type="checkbox"></input>Fully equipped kitchen</p>
                    <p><input type="checkbox"></input>Free fruit and snacks</p>
                    <p><input type="checkbox"></input>Formación</p>
                    <p><input type="checkbox"></input>Health insurance</p>
                    <p><input type="checkbox"></input>Free parking</p>
                    <p><input type="checkbox"></input>Plus por objetivos</p>
                <input type="submit" onClick={handleFilter} placeholder="FILTRAR"></input>
            </aside>

            <animated.div style={extraFadeIn} className="listing-results">
                {(showDetails) ? <CompanyDetails id={showDetails} /> : getCompanyList() }
            </animated.div>

        </animated.div>
        </>
    )
}

 
export default CompanyListing;

