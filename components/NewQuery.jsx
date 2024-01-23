import { AppBar, Toolbar, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import data from '../db.json'
import createQuery from '../services/createQuery'


function NewQuery() {


    const [category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState('')
    const [voicecommunication, setVoicecommunication] = useState('')
    const [querytitle, setQueryTitle] = useState('')
    const [querydescription, setQuerydescription] = useState('')
    const [storecategory, setStorecategory] = useState('')

    const handleNewQueryForm = async(event) => {
        event.preventDefault()

        const newQuery = {
            category,
            subcategory:subcategory.title,
            voicecommunication,
            querytitle,
            querydescription,
        }
        console.log(newQuery)
        await createQuery(newQuery)
    }


    const handleCategory = (event) => {
        const selectSubcategory = event.target.value
        // console.log(selectSubcategory)
        setCategory(selectSubcategory)

        const matchingSubcategory = data.subcategory.find(
            (subcat) => subcat.title === selectSubcategory

        )
        // console.log(matchingSubcategory)
        if (matchingSubcategory) {
            setSubcategory(matchingSubcategory)
        } else {
            setCategory('');
        }
    }

    const handleSubcategory = (event) => {
        // console.log(event.target.value)
        // setSubcategory(event.target.value)
        setStorecategory(event.target.value)
        // console.log(storecategory)
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
                <form className='query-form' onSubmit={handleNewQueryForm}>
                    <div className='form-container'>
                        <h6 className='topic'>Topic</h6>
                        <div>
                            <h6>Category</h6>
                            <select className='select-opt-1' value={category} onChange={handleCategory}>
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
                            <select className='select-opt-1' value={storecategory} onChange={handleSubcategory}>
                                <option>----select Subcategory----</option>
                                {
                                    subcategory && subcategory.subtitle?.map((subtitle) => (
                                        <option key={subtitle.id}>{subtitle}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <h6>Prefered Voice Communication Language</h6>
                            <select className='select-opt-2' value={voicecommunication} onChange={(event => setVoicecommunication(event.target.value))}>
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
                                value={querytitle}
                                onChange={(event => setQueryTitle(event.target.value))}
                            />
                        </div>
                        <div>
                            <h6>Query Description</h6>
                            <input
                                type='texts'
                                placeholder='enter the descriptions'
                                value={querydescription}
                                onChange={(event => setQuerydescription(event.target.value))}
                            />
                        </div>
                        <div className='button-row'>
                            <button type='submit' className='cancel-btn1'>cancel</button>

                            <button type='submit' className='create-btn1'>create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewQuery;
