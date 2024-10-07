import React, { useState } from 'react'

function Login() {
  const login = () => {

  };

  return (
    <div className='login-container'>
      <input type='text'/>
      <input type='password'/>
      <button onclick={login}>Login</button>
    </div>
  )
}

export default Login
