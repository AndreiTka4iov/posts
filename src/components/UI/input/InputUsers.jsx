import React from 'react'
import cl from '../../styles/input/inputUsers.module.css'

function InputUsers({...props}) {
  return (
    <div className={cl.inputUsers}>
        <input type="text" placeholder='Search by users...' {...props}/>
        <button>
            <i className='bx bx-search' ></i>
        </button>
    </div>
  )
}

export default InputUsers