import React, { useState } from 'react'
import authServices from '../services/auth'
import { Link } from 'react-router-dom'

<style>

</style>

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = (event) => {
        event.preventDefault()

        const user = {
            name,
            email,
            password
        }
        console.log(user)

        authServices.signup(user)
        setName('')
        setEmail('')
        setPassword('')
    }
  return (
      <div>
          <h1 className='heading'>welcome to signup form </h1>
          <div>
              <form onSubmit={handleSignup}>
                  <div>
                      <h3 className='heading'>Register Here</h3>
                      <p className='heading'>Please fill in this form to create an account.</p>
                      <hr />
                      <div className='lb-signup'>
                          <label><b>Name</b></label>
                      </div>
                      <div>
                          <input type="text"
                              placeholder="Enter your name"
                              name="username" required
                              value={name}
                              onChange={(event)=> setName(event.target.value)}
                          />
                      </div>
                      <div className='lb-signup'>
                          <label><b>Email</b></label>
                      </div>
                      <div>
                          <input type="Email"
                              placeholder="Enter Email"
                              name="Email" required
                              value={email}
                              onChange={(event)=> setEmail(event.target.value)}
                          />
                      </div>
                      <div className='lb-signup'>
                          <label><b>Password</b></label>
                      </div>
                      <div>
                          <input type="password"
                              placeholder="Enter Password"
                              name="psw" required
                              value={password}
                              onChange={(event)=> setPassword(event.target.value)}
                          />
                      </div>
                      <div>
                          <button type="submit" className="signupbtn">Sign Up</button>
                      </div>
                      {/* <div className="clearfix">
                          <button type="button" className="cancelbtn">Cancel</button>
                      </div> */}
                      <div className='para-2'>
                      <p> Already Register ? <Link to={'/'}>Login</Link> </p>
                      </div>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default Signup