import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useLocation, useHistory } from 'react-router-dom';
import { getCompanies, getUsers, createUser, updateCompany, updateUser } from '../../services/data';
import { getCurrentUser } from '../../services/auth';
import CommentCreator from '../../components/Comments/CommentCreator';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Alert from '@material-ui/lab/Alert';


const UpdateCompany = props => {
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const loc = useLocation();
    const history = useHistory();
    const [ firebaseCompany, setFirebaseCompany ] = useState([]);
    const [ firebaseUserData, setFirebaseUserData ] = useState([]);
    const [ toUpdate, setToUpdate ] = useState({});
    const [ updatedWorkLife, setUpdatedWorkLife ] = useState(undefined);
    const [ updatedSalary, setUpdatedSalary ] = useState(undefined);
    const [ updatedOverallRating, setUpdatedOverallRating ] = useState(undefined);
    const [ updatedComment, setUpdatedComment ] = useState('');
    const [ successMessage, setSuccessMessage ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState(false);

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
        setToUpdate(update)
    }, [firebaseCompany])

    useEffect(() => {
        const getFirebaseUser = async () => {
            const getFirebaseUserData = await getUsers();
            setFirebaseUserData(getFirebaseUserData);
        }
        getFirebaseUser();
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedForm = {
            ...toUpdate[0],
            workLife: toUpdate[0].workLife + updatedWorkLife,
            salary: toUpdate[0].salary + updatedSalary,
            overallRating: toUpdate[0].overallRating + updatedOverallRating,
            usersWhoRated: toUpdate[0].usersWhoRated + 1,
        }
        const user = getCurrentUser();
        const userExists = firebaseUserData.filter((firebaseUser) => (firebaseUser.uid === user.uid))
        if (userExists.length) {
            console.log('this user already exists')
            const [userData] = userExists; 
            const sameUserCopy = {...userData};
            sameUserCopy.ratedCompanies.push(toUpdate[0].name);
            updateCompany(updatedForm)
            updateUser(sameUserCopy);
        } else {
            console.log('this user does not exist, creating a new one')
            const newUser = { uid: user.uid, ratedCompanies: [toUpdate[0].name] }
            createUser(newUser); 
            updateCompany(updatedForm); 
        } 
        setErrorMessage(false);
        setSuccessMessage(true); 
    }

    function handleCancel(e) {
        e.preventDefault();
        history.push("/sign-up");
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
                                        <Rating name="worklife-controlled" onChange={(event, newValue) => {setUpdatedWorkLife(newValue)}} />
                                    </Box>      
                                </div>
                            </div>
                            <div className="star-rating-container">
                                <label htmlFor='star-rating' className='star-label'>How well does this company pay?</label>
                                <div className="star-rating">
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Rating name="salary-controlled" onChange={(event, newValue) => {setUpdatedSalary(newValue)}} />
                                    </Box>
                                </div>
                            </div>
                            <div className="star-rating-container"> 
                                <label htmlFor='star-rating' className='star-label'>How would you rate your stay at this company?</label>
                                <div className="star-rating">    
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Rating name="overall-controlled" onChange={(event, newValue) => {setUpdatedOverallRating(newValue); }}/>
                                    </Box>
                                </div>    
                            </div>
                    </div>
                    <label htmlFor="comment" className="comments-label"><strong>Comment</strong> (optional)</label>
                    <div className="comments-area">
                        <CommentCreator setComment={setUpdatedComment} />
                    </div>
                    <div className="submit-btn">
                        <input type="submit" id="create-btn" value="SUBMIT"></input>
                        <button onClick={handleCancel}>CANCEL</button>
                        {(successMessage) ?  <Alert variant="outlined" severity="success">Great! Your registry will be up soon. <a href="/">Back to homepage.</a></Alert>  : null}
                    </div>
                </form>
        </animated.div>    
    )
}

export default UpdateCompany;