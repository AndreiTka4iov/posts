import React from 'react'
import { Link } from 'react-router-dom'
import cl from '../../styles/button/headerButton/HeaderButton.module.css'


const HeaderButton = ({children, classIcon, href}) => {
  return (
    <Link to={href} className={cl.button}>
        <i className={classIcon}></i>
        {children}
    </Link>
  )
}

export default HeaderButton