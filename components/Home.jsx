import React from 'react'
import '../src/App.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1 className='container'>ZEN CLASS</h1>
            <div>
                <form>

                    <label className='col-md-1'>Email</label>
                    <div className='col-md-2'>
                        <input
                            type='email'
                            name='email'
                            placeholder='enter your email'
                        />
                    </div>
                    <div className='col-md-3'>
                        <label>Password</label>
                        <div className='col-md-4'>
                            <input
                                type='password'
                                name='password'
                                placeholder='enter your password'
                            />
                        </div>
                    </div>
                    <div>
                        <button className='col-md-5'>Signin</button>
                    </div>
                    <div>
                        <p className='lb-1'>If you are new user</p>
                        <div className='lb-2'>
                            <Link to='/signup'>signup</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Home