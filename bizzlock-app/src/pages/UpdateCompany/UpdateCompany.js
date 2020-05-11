import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';
import { getCompanies, getUsers } from '../../services/data';
import { getCurrentUser } from '../../services/auth';
import CommentCreator from '../../components/Comments/CommentCreator';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Alert from '@material-ui/lab/Alert';


const UpdateCompany = props => {
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const loc = useLocation();
    const [ firebaseCompany, setFirebaseCompany ] = useState([]);
    const [ firebaseUserData, setFirebaseUserData ] = useState([]);
    const [ updateCompany, setUpdateCompany ] = useState({});
    const [ user, setUser ] = useState();
    const [ workLife, setWorkLife ] = useState(undefined);
    const [ salary, setSalary ] = useState(undefined);
    const [ overallRating, setOverallRating ] = useState(undefined);
    const [ comment, setComment ] = useState('');
    const [ form, setForm ] = useState({});
    const [ successMessage, setSuccessMessage ] = useState(false);

    useEffect(() => {
        const fetchCompanies = async () => {
            const getFirebaseCompanies = await getCompanies();
            setFirebaseCompany(getFirebaseCompanies);
        }
        fetchCompanies();
    }, []);

    useEffect(() => {
        const update = firebaseCompany.filter(company => {
            const match = company.id === loc.state.id;
            return match;
        })
        setUpdateCompany(update)
    }, [firebaseCompany])

    useEffect(() => {
        const getFirebaseUser = async () => {
            const getFirebaseUserData = await getUsers();
            setFirebaseUserData(getFirebaseUserData);
        }
        getFirebaseUser();
    })

    const handleFormSubmit = (e) => {
        console.log('already in firebase to be updated: ', updateCompany[0])
        e.preventDefault();
        const form = {
            workLife: (updateCompany[0].workLife + workLife) / updateCompany.usersWhoRated,
            salary: (updateCompany[0].salary + salary) / updateCompany.usersWhoRated,
            overallRating: (updateCompany[0].overallRating + overallRating) / updateCompany.usersWhoRated,
            comments: updateCompany[0].comments.push(comment) 
        }
        setForm(form);
        const user = getCurrentUser();
        setUser(user);
        firebaseUserData.filter((firebaseUser) => {
            if (firebaseUser.uid === user.uid) {
                const sameUser = firebaseUser;
                console.log('This user is already registered. SameUser is :', sameUser);
                if (sameUser.ratedCompanies.includes(updateCompany.name)) {
                    console.log('This user has already voted here');
                    alert('You can&apos; vote on the same company twice!');
                } else {
                    sameUser.ratedCompanies.push(updateCompany);
                }
            }
        })
        const usersWhoRated = updateCompany[0].usersWhoRated.push(user.uid);
        //postCompany(form, userseWhoRated);   POST OR UPDATE?? 
    }


    return (
        <animated.div style={fadeIn} className="update-container">
            <h2>Give your feedback on {loc.state.name}</h2>
                <p className="text-above">Fill the following form to update this company&apos;s registry. <br/>No one in the organisation will get notified, nor will they know you updated this file.</p>           
                <form className="create-form" onSubmit={handleFormSubmit}>   
                    <div className="company-feedback">   
                            <div className="star-rating-container">
                                <label htmlFor='star-rating' className='star-label'>How is the work/life balance?</label>
                                <div className="star-rating">
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Rating name="worklife-controlled" onChange={(event, newValue) => {setWorkLife(newValue)}} />
                                    </Box>      
                                </div>
                            </div>
                            <div className="star-rating-container">
                                <label htmlFor='star-rating' className='star-label'>How well does this company pay?</label>
                                <div className="star-rating">
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Rating name="salary-controlled" onChange={(event, newValue) => {setSalary(newValue)}} />
                                    </Box>
                                </div>
                            </div>
                            <div className="star-rating-container"> 
                                <label htmlFor='star-rating' className='star-label'>How would you rate your stay at this company?</label>
                                <div className="star-rating">    
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Rating name="overall-controlled" onChange={(event, newValue) => {setOverallRating(newValue); }}/>
                                    </Box>
                                </div>    
                            </div>
                    </div>
                    <label htmlFor="comment" className="comments-label">Comment (optional)</label>
                    <div className="comments-area">
                        <CommentCreator setComment={setComment} />                    </div>
                    <div className="submit-btn">
                        <input type="submit" id="create-btn"></input>
                        {(successMessage) ?  <Alert variant="outlined" severity="success">Great! Your registry will be up soon. <a href="/">Back to homepage.</a></Alert>  : null}
                    </div>
                </form>
        </animated.div>    
    )
}

export default UpdateCompany;