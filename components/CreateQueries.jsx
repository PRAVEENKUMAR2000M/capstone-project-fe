import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import getCandidate from '../services/candidate'
import createQuery from '../services/createQuery'
import getQuery from '../services/getQuery'
import { AppBar, Toolbar, Box } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom'


function CreateQueries() {


  // const location = useLocation()


  // const [queryData, setQueryData] = useState([]);
  const [savequery, setSavequery] = useState([])
  console.log(savequery)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  // useEffect(() => {
  //   const initialData = location.state?.newQuery || {}
  //   setQueryData((prevData) => [...prevData, { ...initialData }]);
  // }, [location?.state?.newQuery]);


  const queryFuction = () => {
    navigate('/newQuery')
  }
  const user = useSelector(state => state.candidate)
  console.log(user)
  const dispatch = useDispatch()

  useEffect(() => {
    getCandidate()
      .then(candidate => {
        console.log(candidate)

        const candidateObj = {
          name: candidate.name,
          email: candidate.email
        }
        dispatch({
          type: 'SET_CANDIDATE',
          payload: candidateObj
        })
      })
      .catch(error => {
        console.log(error)
      })

  }, [])

  // useEffect(() => {
  //   createQuery()
  //     .then(createQuery => {
  //       console.log(createQuery)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])


  useEffect(() => {
    getQuery()
      .then(candidateQueries => {
        setSavequery(candidateQueries)
        console.log(candidateQueries)
        dispatch({
          type: 'SET_SAVEQUERY',
          payload: candidateQueries
        })
      })
  }, [dispatch])

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    navigate('/')
  }


  return (
    <div>
      <AppBar>
        <Toolbar>
          <div>
            <h2>My Queries</h2>
            <h4 className='icon1'>{user.candidate.name}</h4>
            <Box width={'20%'}>
              <AccountCircleIcon className='icon2' onClick={() => setIsLoggedIn(!isLoggedIn)} />
              {isLoggedIn && <span onClick={() => handleLogout()}><select className='logout-btn3'>
                <option>logout</option>
                <option>cancel</option>
              </select></span>}
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <div className='btn-c'>
        <button className='btn-q' onClick={queryFuction}>Create Query</button>
      </div>


      <div className='query-title'>
        <h2>Submitted Queries:</h2>
      </div>

      <div>
        {savequery.map((query) => {
console.log(query)
         return <Link key={query._id} to={(`/viewQuery?id=${query._id}`)} style={{ textDecoration: 'none', color: 'black' }} >
           <div key={query._id} className='query-box'>
              <h3>Query ID: {query._id}</h3>
              <div>Category: {query.category}</div>
              <div>Subcategory: {query.subcategory}</div>
              <div>Voice Communication Language: {query.voicecommunication}</div>
              <div>Query Title: {query.querytitle}</div>
              <div>Query Description: {query.querydescription}</div>
            </div>
          </Link>
        })}
      </div>

    </div>



  )
}

export default CreateQueries