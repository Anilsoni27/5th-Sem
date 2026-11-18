import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');   
    const [password, setPassword] = useState('');
    const loginHandler = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    }
  return (
    <div>
        <h1>Login Page</h1>
        <input type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}>
        </input>
        <br></br>

        <input type="password" 
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button onClick={loginHandler}>Login</button>

    </div>
  )
}

export default Login