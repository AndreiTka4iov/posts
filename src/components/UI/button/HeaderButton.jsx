import React from 'react'
import cl from '../../styles/button/headerButton/HeaderButton.module.css'


const HeaderButton = ({children, classIcon, href}) => {
  return (
    <a href={href} className={cl.button}>
        <i className={classIcon}></i>
        {children}
    </a>
  )
}

export default HeaderButton