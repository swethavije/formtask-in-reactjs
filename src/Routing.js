import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Form from './Form'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Form" element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing