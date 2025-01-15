import React from 'react'
import { Button,TextField } from '@mui/material'

const SignUp = () => {
  return (
    <div>
    <h1>SighUp Page</h1>
    Email: <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
    password: <TextField id="outlined-basic" label="Password" variant="outlined" /><br/>
    <Button variant="contained">SignUp</Button> 
    </div>
  )
}

export default SignUp
