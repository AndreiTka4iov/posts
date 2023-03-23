import React from 'react'
import cl from '../components/styles/post-page/Post.module.css'
import CommentsList from '../components/UI/postPage/comment/CommentsList';
import PostBlock from '../components/UI/postPage/PostBlock';

function Post() {
    return (
        <div className={cl.post}> 
            <PostBlock />
            <CommentsList />
        </div>
    )
}

export default Post