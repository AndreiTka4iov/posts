import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostService from '../../../API/PostService'
import cl from '../../styles/user-page/userPostList/userPostList.module.css'
import Loader from '../loader/Loader'
import ListPosts from './ListPosts'

function UserPostList() {
    const {id} = useParams()
    const load = useSelector(state => state.load.load)
    const [loader, setLoader] = useState(false)
    const [posts, setPosts] = useState(false)
    const lastElem = useRef()
    const observer = useRef()

    useEffect(() => {
        if (!load) return
        var callback = function(entries, observer) {
            const asyncRes = async () => {
                const response = await PostService.getAllPostByUser(id)
                setPosts([...response.data])
                setLoader(false)
              }       
              asyncRes()        
        };
    
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElem.current)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [load])
        


    if(!load){
        return
    }

    
    return (
        <div className={cl.userPost} ref={lastElem}>
            <h3>Posts List:</h3>
            {loader || !posts 
            ? <Loader/>
            : 
            <div className={cl.list}>
               {posts.map(post =>
                   <ListPosts key={post.id} post={post}/> 
                )}
            </div>
            }
        </div>
    )
}

export default UserPostList