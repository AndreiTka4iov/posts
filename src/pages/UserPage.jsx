import React from 'react'
import cl from '../components/styles/user-page/UserPage.module.css'
import InfoBlock from '../components/UI/userPage/InfoBlock'
import UserPostList from '../components/UI/userPage/UserPostList'

function UserPage() {
  return (
    <div className={cl.userPage}>
        <InfoBlock/>
        <UserPostList/>
    </div>
  )
}

export default UserPage