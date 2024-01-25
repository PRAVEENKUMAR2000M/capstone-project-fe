import { AppBar, Toolbar, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';


function Query() {
    const query = useSelector((state) => state.savequery.savequery)
    console.log(query)
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
            <div>
                {query && query.map((queryItem) => (
                    <h3 key={queryItem._id}>
                        Query ID: {queryItem._id}, Category: {queryItem.category}, Subcategory: {queryItem.subcategory}, Voice Communication Language: {queryItem.voicecommunication}, Query Title: {queryItem.querytitle}, Query Description: {queryItem.querydescription}
                    </h3>
                ))}
            </div>
        </div>
    );
}

export default Query;
