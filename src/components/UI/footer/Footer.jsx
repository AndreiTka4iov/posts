import React from 'react'
import cl from '../../styles/footer/footer.module.css'

function Footer() {
  return (
    <footer className={cl.footer}>
        <span>© 2023</span>
        <div className={cl.contact}>
            <a href="https://discord.com/users/239443966586519554">
                <i className='bx bxl-discord-alt' ></i>
            </a>
            <a href="https://t.me/Tcka4">
                <i className='bx bxl-telegram' ></i>
            </a>
            <a href="https://github.com/AndreiTka4iov">
                <i className='bx bxl-github' ></i>
            </a>
            <a href="https://www.linkedin.com/in/андрей-ткачев-72734626b/">
                <i className='bx bxl-linkedin' ></i>
            </a>
        </div>
    </footer>
  )
}

export default Footer