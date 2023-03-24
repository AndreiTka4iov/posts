import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostService from '../../../API/PostService'
import cl from '../../styles/input/InputHeader.module.css'
import Loader from '../loader/Loader'
import ResultSeatch from '../search/ResultSeatch'

const InputHeader = () => {
  const dispatch = useDispatch()
  const search = useSelector(state => state.input.input)
  const [loader, setLoader] = useState(false)
  const [query, setQuery] = useState(false)
  const [resPosts, setResPosts] = useState([])
  const [resQuery, setResQuery] = useState([])

  useEffect(() => {
    const response = resPosts.filter(query => query.title.toLowerCase().includes(search.toLowerCase()))
    setResQuery([...response])
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resPosts, search])

  useEffect(() => {
    setLoader(true)
    if(search === '') {setQuery(false); return}

    const reqQuery = async() => {
      const response = await PostService.getAll(100, 1)
      setResPosts([...response.data])
    }
    
    if(resPosts.length === 0) {
      reqQuery()
    }
    
    setQuery(true)
    setLoader(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <div className={cl.input}>
        <input 
          type="text" 
          placeholder='Search by web...' 
          value={search} 
          onChange={(e) => dispatch({type: "SET_VALUE", payload: e.target.value})} 
        />
        <button>
            <i className='bx bx-search' ></i>
        </button>

        {query
        ? 
        <div className={cl.resQuery}>
          {loader 
          ? <Loader/>
          : <ResultSeatch res={resQuery}/>
          }
        </div>
        : ''
        }
    </div>
  )
}

export default InputHeader