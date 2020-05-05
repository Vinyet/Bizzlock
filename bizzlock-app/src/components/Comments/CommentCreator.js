import React, { useState } from 'react';


const CommentCreator = () => {
    const [ comment, setComment ] = useState('');
    const [ error, setError ] = useState(''); 

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setError('');

        if(!comment) {
            setError('Message is empty');
            return;
        }
    }

    return (
        <>
        <textarea className="comment-textarea" placeholder="Leave a comment explaining your experiences with this company." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        </>
    )
}

export default CommentCreator;