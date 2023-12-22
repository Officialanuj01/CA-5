import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './Components/Register.jsx'
import Books from './Components/Books.jsx'
import './App.css'


function App() {
  

  return (
    <>
    
    <Routes>
      <Route exact path = "/" element = {<Books/>}/>
      <Route path = "Register" element = {<Register/>}/>

    </Routes>
    </>
  )
}

export default App
