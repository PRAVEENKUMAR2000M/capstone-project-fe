import { AppBar, Toolbar, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import queryId from '../services/queryId';
import getQuery from '../services/getQuery';
import { useSearchParams } from 'react-router-dom';


function Query() {
    // const query = useSelector((state) => state.savequery.savequery)
    // console.log(query)

    const [query, setQuery] = useState([])
    console.log(query)
    const [queryid, setQueryid] = useState([])
    // console.log(queryid)
    // const [storequery, setStorequery] = useState('')

    let [params] = useSearchParams()

    useEffect(() => {
        getQuery(params.get('id'))
            .then(candidate => {
                setQuery(candidate)
        })
    }, [])


    // useEffect(() => {
    //     getQuery()
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    // {data && data (user => console.log(user))}

    // useEffect(() => {
    //     queryId()
    //         .then(queries => {
    //             setQueryid(queries)
    //         })
    // }, [])
   
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
            {/* <div>
                {query && query.map((queryItem) => (
                    <h3 key={queryItem._id}>
                        Query ID: {queryItem._id}, Category: {queryItem.category}, Subcategory: {queryItem.subcategory}, Voice Communication Language: {queryItem.voicecommunication}, Query Title: {queryItem.querytitle}, Query Description: {queryItem.querydescription}
                    </h3>
                ))}
            </div> */}
        </div>
    );
}

export default Query;
