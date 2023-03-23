import React from 'react'
import cl from '../../../styles/Post/user/user.module.css'

function UserPost({children, href}) {
  return (
    <a href={href} className={cl.user}>
        <i className='bx bxs-user-circle' ></i>
        {children}
    </a>
  )
}

export default UserPost