import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='Wrapper'>
        <div className="loginMain">
            <input className='input' id='loginEmail' type="email" placeholder='Email'/>
            <input className='input' id='loginPassword' type="password" placeholder='Password'/>
            <button className='LoginBtn'>Login</button>
        </div>
    </div>
  )
}
