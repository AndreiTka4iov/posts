import React from 'react'
import cl from '../../styles/header/header.module.css'
import HeaderButton from '../button/HeaderButton'
import InputHeader from '../input/inputHeader'

function Header() {
  return (
    <header className={cl.header}>
        <HeaderButton href='/' classIcon='bx bx-home'>Home</HeaderButton>
        <InputHeader></InputHeader>
        <HeaderButton href='/users' classIcon='bx bx-user-pin'>Users</HeaderButton>
    </header>
  )
}

export default Header