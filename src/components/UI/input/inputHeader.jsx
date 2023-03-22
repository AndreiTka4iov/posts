import React from 'react'
import cl from '../../styles/input/InputHeader.module.css'

const InputHeader = () => {
  return (
    <div className={cl.input}>
        <input type="text" placeholder='Search by web...'/>
        <select>
            <option value="all" disabled selected>Search by...</option>
            <option value="posts" >Posts</option>
            <option value="Users">Users</option>
        </select>
        <button>
            <i className='bx bx-search' ></i>
        </button>
    </div>
  )
}

export default InputHeader