import { Routes, Route } from 'react-router-dom'
import Navbar from './commponet/Navbar'
import Contact from './commponet/Contact'
import Home from './component/home';
import RegistrationForm from './commponet/RegistrationForm'

import './App.css'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='RegistrationForm' element={<RegistrationForm/>}/>
      </Routes>
    </>
  )
}

export default App
