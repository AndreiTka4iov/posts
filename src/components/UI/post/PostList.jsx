import React, { useEffect, useState } from 'react'
import PostService from '../../../API/PostService'
import cl from '../../styles/Post/PostList.module.css'
import Content from './content/Content'
import UserPost from './user/UserPost'


const PostList = ({...post}) => {
  const [user, setUser] = useState([])

  useEffect(()=>{
    async function getUser() {
      const response = await PostService.userPost(post.post.userId)
      setUser(...response.data);
    }
    getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={cl.post}>
        <UserPost id={user.id}>{user.name}</UserPost>
        <Content post={post.post}></Content>
    </div>
  )
}

export default PostList