import React from 'react'
import cl from '../../styles/post-page/PostBody.module.css'

function PostBody({...post}) {
  return (
    <div className={cl.body}>
        <h3>{post.post.title}</h3>
        <p>{post.post.body}</p>
    </div>
  )
}

export default PostBody