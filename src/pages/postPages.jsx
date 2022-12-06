import React from "react";
import './../assets/style.css'
import { useLocation, useParams } from "react-router-dom";

const PostPage = () => {
    const { state } = useLocation();
    console.log(state)
    const { idPost } = useParams();

    return (
        <>
            <div className="contentPost">
                <div className="wrapContent">
                    <div className="header">
                        <h1>Content Post ke - {state.postId}. {state.postName}</h1>
                    </div>
                    <div className="content">
                        <span>{state.contentPost}</span>
                    </div>
                    <div className="footer">
                        <span>Author : {state.authorPost}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostPage;