import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var[name,setname]=useState("ram")
    var[val,setval]=useState()

    const handleinput= (e) => {
        console.log(e.target.value)
      setname(e.target.value)
    }
    
    const subhandler= () => {
        console.log("HEYYY "+name)
      setval(name)

    }
    return(
    <div>
      <h1>State Basics</h1>
      <h1>Welcome {val}</h1>
      <TextField label="Name" variant='outlined'onChange={handleinput}/><br/>
      <Button variant='contained' onClick={subhandler}>Submit</Button>
    </div>
    )

  }
export default State
