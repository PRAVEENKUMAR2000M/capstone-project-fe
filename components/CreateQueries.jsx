import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import getCandidate from '../services/candidate'
import createQuery from '../services/createQuery'
import { AppBar, Toolbar, Box } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




function CreateQueries() {


  const queryFuction = () => {
   navigate('/newQuery')
 }
  const user = useSelector(state => state.candidate)
  console.log(user)
  const navigate = useNavigate()
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
          payload:candidateObj
        })
      })
      .catch(error => {
      console.log(error)
      })
    
    // if (!candidate.candidate) {
    //   navigate('/signin')
    // }
  },[])

  useEffect(() => {
    createQuery()
      .then(createQuery => {
        // console.log(createQuery)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      <AppBar>
        <Toolbar>
          <div>
            <h2>My Queries</h2>
            <h4 className='icon1'>{user.candidate.name}</h4>
            <Box width={'20%'}>
              <AccountCircleIcon className='icon2' />
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <div className='btn-c'>
        <button className='btn-q'onClick={queryFuction}>Create Query</button>
      </div>
    </div>

  )
}

export default CreateQueries