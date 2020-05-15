/*import React from 'react';
//import { getCompanies } from '../../services/data';


const CommentsSection = ({ setComments }) => {

    useEffect(() => {
        const fetchComments = async () => {
            // make a collection for comments and put it in services?
            const getAllComments = await getCompanies();
            setAllComments(getAllComments);
        }
        fetchComments();
    }, []);


    return (
        <div className="comments-section">
            {allComments.map((comment) => {
                return (
                    <div className="comment-container" key={comment.id}>
                        {comment}
                    </div>
                )
                })}
        </div>
    )
}


export default CommentsSection;*/