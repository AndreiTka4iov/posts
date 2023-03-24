import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import cl from '../../styles/search/resultSearch.module.css'


function ResultSeatch({...res}) {
    const dispatch = useDispatch()
    const response = res.res
    return (
        <div className={cl.result}>
            {response.length === 0 
            ? 
            <div className={cl.clear}>
                <span className="material-symbols-outlined">list_alt</span>
                <p>The list is empty</p>
            </div>
            :
            response.map((res) => 
                <Link key={res.id} to={'/posts/post/' + res.id} onClick={() => dispatch({type: "CLEAR_VALUE"})}>{res.title }</Link>
            )
            }
            
        </div>
    )
}

export default ResultSeatch