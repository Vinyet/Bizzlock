import React, { useState } from 'react';


const CommentCreator = ({setComment}) => {

    const handleTextarea = (e) => {
        const message = e.target.value;
        setComment(message);
    }

    return (
        <>
        <textarea className="comment-textarea" placeholder="Leave a comment explaining your experiences with this company." onChange={handleTextarea}></textarea>
        </>
    )
}

export default CommentCreator;
