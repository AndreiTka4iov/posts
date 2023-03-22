import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from '../../styles/button/headerButton/switchMode.module.css'

function SwitchMode() {
    const dispatch = useDispatch()
    const mode = useSelector(state => state.mode.dark)
    
    const switchMode = () => {
        if (mode){
            dispatch({type: "SET_LIGHT"})
        }else{
            dispatch({type: "SET_DARK"})
        }
    }

    return (
        <button className={cl.button} onClick={() => switchMode()}>
            {mode ? <i className='bx bxs-sun'></i> : <i className='bx bx-sun'></i>}
        </button>
    )
}

export default SwitchMode