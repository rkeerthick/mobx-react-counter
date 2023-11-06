import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
  )
}

export default Routing