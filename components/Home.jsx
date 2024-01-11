import React, { useState } from 'react'
import '../src/App.css'
import { Link } from 'react-router-dom'
import authServices from '../services/auth'

function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignin = (event) => {
        event.preventDefault()

        const user = {
            email,
            password
        }
        console.log(user)
        authServices.signin(user)
        setEmail('')
        setPassword('')
    }
    return (
        <div>
            <h1 className='container'>ZEN CLASS</h1>
            <div>
                <form onSubmit={handleSignin}>

                    <label className='col-md-1'>Email</label>
                    <div className='col-md-2'>
                        <input
                            type='email'
                            name='email'
                            placeholder='enter your email'
                            value={email}
                            onChange={(event)=> setEmail(event.target.value)}
                        />
                    </div>
                    <div className='col-md-3'>
                        <label>Password</label>
                        <div className='col-md-4'>
                            <input
                                type='password'
                                name='password'
                                placeholder='enter your password'
                                value={password}
                                onChange={(event)=>setPassword(event.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='col-md-5'>Signin</button>
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