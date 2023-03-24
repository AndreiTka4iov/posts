import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';
import PostService from '../../../API/PostService';
import Loader from '../loader/Loader'
import UserPost from '../post/user/UserPost'
import cl from '../../styles/post-page/PostBlock.module.css'
import PostBody from './PostBody';

function PostBlock() {
  const {id} = useParams()
  const [post, setPost] = useState(false)
  const [user, setUser] = useState([])
  const [loader, setLoader] = useState(true)
  
  useEffect(() => {
      const asyncRes = async () => {
          setLoader(true)
          const response = await PostService.getPost(id)
          setPost(...response.data)          
      }
      asyncRes()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    const asyncRes = async () => {
      const response = await PostService.userPost(post.userId)
      setUser(...response.data)
      setLoader(false)
    }

    if (post !== false){
      asyncRes()
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post])

  return (
    <div className={cl.postBlock}>
        {loader 
        ? <Loader/> 
        : <div className={cl.text}>
            <UserPost id={user.id}>{user.name}</UserPost>
            <PostBody post={post}></PostBody>
          </div>
        }
    </div>
  )
}

export default PostBlock