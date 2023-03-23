import React, { useEffect, useMemo, useRef, useState } from 'react'
import cl from '../components/styles/home-page/homePage.module.css'
import Loader from '../components/UI/loader/Loader'
import PostService from "../API/PostService";
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../components/UI/post/PostList';


const Home = () => {
  const dispatch = useDispatch()
  const loader = useSelector(state => state.loader.loader)
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(0) 
  const lastElem = useRef()
  const observer = useRef()

  const  sortedPosts = useMemo(() => {
    return [...posts]
  }, [posts])
  

  useEffect(() => {
    if (loader) return
    if (observer.current) observer.current.disconnect()
    var callback = function(entries, observer) {
        if(entries[0].isIntersecting && page < 10){
          setPage(page + 1)
        }
    };

    var options = {
      threshold: .5
    }

    observer.current = new IntersectionObserver(callback, options);
    observer.current.observe(lastElem.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loader])

  useEffect(() => {
    const asyncRes = async () => {
      dispatch({type: "SHOW_LOADER"})
      const response = await PostService.getAll(10, page)
      setPosts([...posts, ...response.data])
      dispatch({type: "HIDE_LOADER"})
    }
    asyncRes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  

  return (
    <div className={cl.home}>
        {sortedPosts.map((posts) => 
          <PostList key={posts.id} post={posts}/>
        )}
        <div className={cl.morePosts} ref={lastElem}>
          {loader ? <Loader/> : ''}
        </div>
    </div>
  )
}

export default Home