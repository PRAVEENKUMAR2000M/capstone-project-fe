import { AppBar, Toolbar, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import queryId from '../services/queryId';
import getQuery from '../services/getQuery';
import { useNavigate, useSearchParams } from 'react-router-dom';
import deleteQuery from '../services/deleteQuery';
import getCandidate from '../services/candidate';
import { updateQuery } from '../services/deleteQuery';



function Query() {


    const [query, setQuery] = useState([])
    const [queryid, setQueryid] = useState([])
    const [storequery, setStorequery] = useState('')
    const [status, setStatus] = useState('')
   


    const navigate = useNavigate()

    useEffect(() => {
        getQuery()
            .then(candidateQueries => {
                setQuery(candidateQueries)
            })
    }, [])


    let [params] = useSearchParams()

    useEffect(() => {
        queryId(params.get('id'))
            .then(queries => {
                setQueryid(queries)
            })
    }, [])

    useEffect(() => {
        const user = query.find((subquery) => subquery._id === queryid._id);
        if (user) {
            setStorequery([user]);
        }
    }, [query, queryid]);

    useEffect(() => {

    }, [])


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


    const handleBack = async () => {
        await navigate('/createquery')
    }

    const handleStatus = (event) => {
        setStatus(event.target.value)
    }

    const handleSubmilt = async (event) => {
        event.preventDefault()

        const newStatus = {
            status
        }
        console.log(newStatus)
        await createStatus(newStatus)
        setSavestatus(newStatus)
    }
    return (
        <div>
            <form onSubmit={handleSubmilt}>
                <div>
                    <AppBar>
                        <Toolbar>
                            <div>
                                <h2>Query</h2>
                                <h4 className='icon1'>{user.candidate.name}</h4>
                                <Box width={'20%'}>
                                    <AccountCircleIcon className='icon2' />
                                </Box>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className='setquery'>
                    {storequery && storequery.map((str) => (
                        <div key={str._id} className='query-2'>
                            <h5 className='status-hd'>Current Status:</h5>
                            <h6 className='status-1'>{str.status}</h6>
                            <h3 className='heading'>{str.querydescription}</h3>
                            <h5 className='queryid-1'>QueryID:</h5>
                            <h6 className='queryid-2'>{str._id}</h6>
                            <h5 className='category-1'>Category:</h5>
                            <h6 className='category-2'>{str.category}</h6>
                            <h5 className='subcategory-1'>Subcategory:</h5>
                            <h6 className='subcategory-2'>{str.subcategory}</h6>
                            <h5 className='voice-1'>Preferred Language:</h5>
                            <h6 className='voice-2'>{str.voicecommunication}</h6>
                            <h5 className='title-1'>Query Title: </h5>
                            <h6 className='title-2'>{str.querytitle}</h6>
                            <h5 className='description-1'>Query Description:</h5>
                            <h6 className='description-2'>{str.querydescription}</h6>
                            
                        </div>
                    ))}
                </div>
                <div>
                    <button className='back-btn-2' onClick={handleBack}>Back</button>
                </div>
                <div>
                    <button className='delete-btn' onClick={() => {
                        deleteQuery(params.get('id'))
                            .then(deleteQuery => {
                                console.log(deleteQuery)
                                navigate('/createquery')
                            })
                    }}>delete</button>
                </div>
                <h6 className='status-heading'>Select Status:</h6>
                <div className='status-option'>
                    <select value={status} onChange={handleStatus}>
                        <option>---select---</option>
                        <option>Unasign</option>
                        <option>Asign</option>
                        <option>Resolve</option>
                        <option>Close</option>
                    </select>
                </div>

                <button className='save-btn' onClick={() => {
                    updateQuery(params.get('id'), { status })
                        .then(updateQuery => {
                            console.log(updateQuery)
                        })
                }}>save</button>
            </form>
        </div>


    );
}

export default Query;
