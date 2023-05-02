import React from 'react'
import { useState } from 'react'

const login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

  return (
    <div>
        <input type="text" placeholder="username" onChange={e=>setUsername(e.target.value)}/>
        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
        <button>Login</button>
    </div>
  )
}

export default login