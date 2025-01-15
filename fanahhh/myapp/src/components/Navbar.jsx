
import React from 'react'
import { AppBar,Toolbar,Button} from '@mui/material'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>   
       <AppBar>
        <Toolbar>
            <h1>Myapp</h1>&nbsp;
            <Link to='/log'>
            <Button variant="contained">Login</Button>
            </Link>
            <Link to='/Sign'>
            <Button variant="contained">SignUp</Button>
            </Link>
            
            <Link to='/state'>
            <Button variant="contained">State</Button>
            </Link>

            <Link to='/counter'>
            <Button variant="contained">counter</Button>
            </Link>
            
            <Link to='/Name'>
            <Button variant="contained">name</Button>
            </Link>

            <Link to='/Api'>
            <Button variant="contained">api</Button>
            </Link>
            
            
        </Toolbar>
      </AppBar>
<br /><br /><br /><br /><br />

    </div>
  )
}

export default Navbar
