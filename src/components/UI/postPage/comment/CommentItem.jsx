import React from 'react'
import cl from '../../../styles/post-page/CommentItem.module.css'

function CommentItem({...comment}) {
    const response = comment.comment
  return (
    <div className={cl.item}>
        <h3>{response.email}</h3>
        <p>{response.body}</p>
    </div>
  )
}

export default CommentItem