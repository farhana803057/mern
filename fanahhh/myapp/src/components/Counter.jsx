import { Button } from '@mui/material'
import React,{ useState } from 'react'

const Counter = () => {
    var[count,setCount]=useState(0)
    
    const add =() =>{
        setCount(count+1)
    }

    const Sub =() =>{
        setCount(count-1)
    }

  return (
    <div>
      <h1>Welcome:{count}</h1>
      <Button variant='contained' onClick={add}>Increment</Button>
      <Button variant='contained' onClick={Sub}>Decrement</Button>

    </div>
  )
}

export default Counter
