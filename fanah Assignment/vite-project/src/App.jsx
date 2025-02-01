import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/Navbar'
import Add from './add'
import View from './view'

function App() {

  return (
    <>
    
    <br></br><br></br>
    <Navbar>
    </Navbar>
      <Routes>
       
        <Route path="/add" element={<Add/>}/>
        <Route path="/view" element={<View/>}/>
      
      </Routes>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      

    </>
  )

}

export default App