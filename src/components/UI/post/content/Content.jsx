import React from 'react'
import { Link } from 'react-router-dom';
import cl from '../../../styles/Post/content/content.module.css'

function Content({...post}) {
  return (
    <Link to={"/posts/post/" + post.post.id} className={cl.content}>
        <h3>{post.post.title}</h3>
        <p>{post.post.body}</p>
    </Link>
  )
}

export default Content