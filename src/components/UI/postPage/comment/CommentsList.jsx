import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import cl from '../../../styles/post-page/comments.module.css'
import Loader from '../../loader/Loader'
import PostService from '../../../../API/PostService'
import CommentItem from './CommentItem'

function CommentsList() {
    const {id} = useParams()
    const [loader, setLoader] = useState(true)
    const [com, setCom] = useState([])

    useEffect(() => {
        async function asyncResponse() {
            const response = await PostService.getCommentsByPostId(id)
            setCom([...response.data])
            setLoader(false)
        }

        asyncResponse()
          
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <div className={cl.comments}>
            <h3>Comments:</h3>
            <div className={cl.allComments}>
                {loader 
                ? <Loader/>
                : <div className={cl.items}>
                    {com.map(comment => 
                        <CommentItem key={comment.id} comment={comment}/>
                    )}
                </div>
                }
            </div>
        </div>
    )
}

export default CommentsList