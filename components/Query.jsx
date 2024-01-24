import { AppBar, Toolbar, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Query() {

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
        </div>
    );
}

export default Query;
