import { AppBar, Toolbar, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import queryId from '../services/queryId';
import getQuery from '../services/getQuery';
import { useSearchParams } from 'react-router-dom';
import { Margin } from '@mui/icons-material';
import deleteQuery from '../services/deleteQuery';


function Query() {
    // const query = useSelector((state) => state.savequery.savequery)
    // console.log(query)

    const [query, setQuery] = useState([])
    // console.log(query)
    const [queryid, setQueryid] = useState([])
    console.log(queryid)
    const [storequery, setStorequery] = useState('')
    console.log(storequery)

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


    return (
        <div>
            <div>
                <AppBar>
                    <Toolbar>
                        <div>
                            <h2>Query</h2>
                            <Box width={'20%'}>
                                <AccountCircleIcon className='icon2' />
                            </Box>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            <div className='setquery'>
                {storequery && storequery.map((str) => (
                    <div key={str.id}>
                        <h6>QueryID: {str._id}</h6>
                        <h6>Category: {str.category}</h6>
                        <h6>Subcategory: {str.subcategory}</h6>
                        <h6>Voice Communication Language: {str.voicecommunication}</h6>
                        <h6>Query Title: {str.querytitle}</h6>
                        <h6>Query Description: {str.querydescription}</h6>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={() => {
                    deleteQuery(params.get('id'))
                        .then(deleteQuery => {
                            console.log(deleteQuery)
                        })
                }}>delete</button>
            </div>
        </div>
    );
}

export default Query;
