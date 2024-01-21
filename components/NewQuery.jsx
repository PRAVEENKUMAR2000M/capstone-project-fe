import { AppBar, Toolbar, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import data from '../dp.json'


function NewQuery() {

    // const user = useSelector(state => state.candidate)
    // console.log(user)
    const [Category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState('')
    const [voicecommunication, setVoicecommunication] = useState('')
    const [querytitle, setQueryTitle] = useState('')
    const [querydescription, setQuerydescription] = useState('')

    const handleCategory = (event) => {
        setCategory(event.target.value)
    }

    return (
        <div>
            <div>
                <AppBar>
                    <Toolbar>
                        <div>
                            <h2>Create Query</h2>
                            {/* <h4 className='icon1'>{user.candidate.name}</h4> */}
                            <Box width={'20%'}>
                                <AccountCircleIcon className='icon2' />
                            </Box>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            <div>
                <form className='query-form'>
                    <div className='form-container'>
                        <h6 className='topic'>Topic</h6>
                        <div>
                            <h6>Category</h6>
                            <select className='select-opt-1' value={Category} onChange={handleCategory}>
                                <option>----select Category----</option>
                                {
                                    data.category.map((cat) => (
                                        <option key={cat.id}>{cat.title}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <h6>subcategory</h6>
                            <select className='select-opt-1'>
                                <option>----select Subcategory----</option>
                            </select>
                        </div>
                        <div>
                            <h6>Prefered Voice Communication Language</h6>
                            <select className='select-opt-2'>
                                <option>----select Language----</option>
                                {
                                    data.language.map((voice) => (
                                        <option key={voice.id}>{voice.title}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <br />
                        <h6 className='details'>Details</h6>
                        <br />
                        <div>
                            <h6>Query Title</h6>
                            <input
                                type='texts'
                                placeholder='enter the query title'
                            />
                        </div>
                        <div>
                            <h6>Query Description</h6>
                            <input
                                type='texts'
                                placeholder='enter the descriptions'
                            />
                        </div>
                        <div className='button-row'>
                            <button className='cancel-btn1'>cancel</button>

                            <button className='create-btn1'>create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewQuery;
