import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';


const Contact = () => {
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const [ name, setName ] = useState();
    const [ subject, setSubject ] = useState();
    const [ text, setText ] = useState();
    const [ form, setForm ] = useState();
    const [ thankYou, setThankYou ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {
            name,
            subject,
            text
        }
        setForm(form);
        (form.name) ? setThankYou(true) : setThankYou(false);
    }

    return (
    <animated.div style={fadeIn} className='contact-container'>
        <h2>Contact</h2>
        <form action='POST' onSubmit={handleSubmit}>
            <div className="contact-name">
                <label>NAME</label>
                <input type='text' name="name" value={name} onChange={((e) => setName(e.target.value))}></input>
            </div>
            <div className="contact-subject" name="subject">
                <label>SUBJECT</label>    
                <input type='text' value={subject} onChange={((e) => setSubject(e.target.value))}></input>
            </div>
            <textarea placeholder='Write your message' name="message" value={text} onChange={((e) => setText(e.target.value))}></textarea>
            <button>SEND</button>
            {(thankYou) ? <p>Thank you! We will get back to you as soon as possible.</p> : null}
        </form>
    </animated.div>
    )
}

export default Contact;