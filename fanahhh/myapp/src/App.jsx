import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './components/State'
import Counter from './components/Counter'
import Name from './components/Name'
import Api from './components/Api'

function App() {

  return (
    <div>
  
  <Navbar/>
  <Routes>
  <Route path="/log" element={<Login/>}/>
  <Route path="/sign" element={<SignUp/>}/>
  <Route path="/state" element={<State/>}/>
  <Route path="/counter" element={<Counter/>}/>
  <Route path="/name" element={<Name/>}/>
  <Route path="/api" element={<Api/>}/>

  </Routes>
    </div>
  )
}

export default App
