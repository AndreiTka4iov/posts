import React from 'react'
import cl from '../../../styles/post-page/sendComment.module.css'

function SendComment() {
  return (
    <div className={cl.sendComment}>
        <input type="text" placeholder='Enter your comment...'/>
        <button><i className='bx bxs-send'></i></button>
    </div>
  )
}

export default SendComment