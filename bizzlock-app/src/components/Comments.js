import React from 'react';

/*
const CommentsDisplay = () => {
    return (
        <div className="comments-section">
            <div className="comment-container">
                <div className="comment-avatar"></div>
                <div className="comment-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
            </div>    
        </div>    
    )
}*/


const CommentsCreate = () => {
    return (
        <div className="comments-section">
            <div className="comments-container">
                <div className="comment-avatar"></div>
                <textarea placeholder="Leave a comment explaining your experiences with this company"></textarea>
            </div> 
        </div>
    )
}

export default CommentsCreate;