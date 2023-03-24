import React from 'react'
import cl from '../../styles/user-page/userPostList/userPostList.module.css'
import { Link } from 'react-router-dom';

function ListPosts({...post}) {
    console.log(post.post);
  return (
    <Link to={'/post/'+post.post.id} className={cl.post}>
        <h3>{post.post.title}</h3>
        <span>{post.post.body}</span>
    </Link>
  )
}

export default ListPosts