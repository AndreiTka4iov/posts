import React, { useEffect, useMemo, useState } from 'react'
import InputUsers from '../components/UI/input/InputUsers'
import cl from '../components/styles/users-page/usersPage.module.css'
import PostService from '../API/PostService'
import Loader from '../components/UI/loader/Loader'
import User from '../components/UI/usersPage/User'
import useInput from '../hooks/useInput'

function Users() {
    const [loader, setLoader] = useState(true)
    const [users, setUsers] = useState(false)
    const search = useInput('')
   
    const searchUsers = useMemo(() => {
        
        if (search.value !== ''){
            return users.filter(users => users.username.toLowerCase().includes(search.value.toLowerCase()))
        } else { return users }
    }, [users, search.value])

    useEffect(() => {
        async function asyncResponse() {
            const response = await PostService.getAllUsers()
            setUsers([...response.data])
            setLoader(false)
        }

        asyncResponse()
          
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={cl.users}>
            <InputUsers 
            onChange={(e) => search.onChange(e)}
            value={search.value}/>
            <div className={cl.usersScreen}>
                {loader
                ? <Loader/>
                : searchUsers.length === 0 
                ? 
                <div className={cl.list}>
                    <i className='bx bx-confused'></i>
                    <h3>Nothing found</h3>
                </div>
                : 
                <div className={cl.user}>
                    {searchUsers.map((user) =>
                        <User key={user.id} user={user}/>
                    )}
                </div>
                }
            </div>
        </div>
    )
}

export default Users