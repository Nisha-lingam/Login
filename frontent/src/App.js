import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Userdata from './Userdata'
import Create from './Create'
import Register from './Register'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/admin' element={<Userdata />} />
          <Route path='/user' element={<Create/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
