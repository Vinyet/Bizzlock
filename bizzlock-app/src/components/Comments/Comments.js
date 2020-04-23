import React, { useState } from 'react';


const CommentsSection = () => {
    return (
        <div className="comments-section">
            <div className="comments-container">
                <div className="comment-avatar"></div>
                <textarea placeholder="Leave a comment explaining your experiences with this company."></textarea>
            </div> 
        </div>
    )
}

export default CommentsSection;