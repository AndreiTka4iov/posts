import React from 'react'
import cl from '../../styles/header/header.module.css'
import HeaderButton from '../button/HeaderButton'
import SwitchMode from '../button/switchMode'
import InputHeader from '../input/inputHeader'

function Header() {
  return (
    <header className={cl.header}>
        <HeaderButton href='/' classIcon='bx bx-home'>Home</HeaderButton>
        <InputHeader></InputHeader>
        <div className={cl.btn}>
          <HeaderButton href='/users' classIcon='bx bx-user-pin'>Users</HeaderButton>
          <HeaderButton href='/profile' classIcon='bx bx-user'>Profile</HeaderButton>
          <SwitchMode></SwitchMode>
        </div>
    </header>
  )
}

export default Header