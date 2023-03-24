import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostService from '../../../API/PostService'
import cl from '../../styles/user-page/infoBlock.module.css'
import Loader from '../loader/Loader'

function InfoBlock() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState([])

    useEffect(() => {
        const asyncRes = async () => {
          const response = await PostService.getUser(id)
          setUser(...response.data)
          setLoader(false)
          dispatch({type: "SET_LOAD"})
        }       
        asyncRes()        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    if (loader) {
        return <Loader/>
    }
    
    return (
        <div className={cl.info}>
            <div className={cl.main}>
                <div className={cl.avatar}>
                    <i className='bx bx-user-circle' ></i>
                </div>
                <div className={cl.name}>
                    <h3>{user.name}</h3>
                    <a href="/">{user.website}</a>
                </div>
            </div>
            <div className={cl.second}>
                <a href={'mailto:'+ user.email}><span className="material-symbols-outlined">mail</span>{user.email}</a>
                <a href={'tel:'+ user.phone}><span className="material-symbols-outlined">phone_iphone</span>{user.phone}</a>
                <a href="/"><span className="material-symbols-outlined">apartment</span> {user.company.name}</a>
                <a href="/"><span className="material-symbols-outlined">location_city</span>{user.address.city}</a>
                <a href="/"><span className="material-symbols-outlined">signpost</span>{user.address.street}</a>
            </div>
        </div>
    )
}

export default InfoBlock