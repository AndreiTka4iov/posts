import React from 'react'
import { Link } from 'react-router-dom';
import cl from '../../styles/users-page/user.module.css'

function User({...user}) {
    const response = user.user
    return (
        <Link to={'/posts/user/'+response.id} className={cl.user}>
            <div className={cl.avatar}>
                <i className='bx bx-user' ></i>
            </div>
            <div className={cl.userInfo}>
                <h3>{response.username}</h3>
                <p>{response.email}</p>
            </div>
        </Link>
    )
}

export default User