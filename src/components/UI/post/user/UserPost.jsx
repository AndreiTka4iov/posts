import React from 'react'
import { Link } from 'react-router-dom'
import cl from '../../../styles/Post/user/user.module.css'

function UserPost({children, id}) {
  return (
    <Link to={"/posts/user/"+id} className={cl.user}>
        <i className='bx bxs-user-circle' ></i>
        {children}
    </Link>
  )
}

export default UserPost