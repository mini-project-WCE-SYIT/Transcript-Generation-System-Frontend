import './App.css'
import React, { useState, useEffect } from 'react'
import Checkout from './components/Checkout'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Procedure from './components/Procedure'
import AdminHome from './components/AdminHome'
import Template1 from './templates/Template1'
import Template2 from './templates/Template2'
import ShowTranscript from './components/ShowTranscript'

const App = () => {
  const role = useSelector((state) => state.authReducer.authData?.data.role)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={role ? <Navigate to='/admin/home' /> : <Login />}
        />
        <Route exact path='/form' element={<Checkout />} />
        <Route exact path='/procedure' element={<Procedure />} />
        <Route exact path='/temp1' element={<ShowTranscript />} />
        {/* <Route exact path='/temp1' element={<Template1 />} /> */}
        <Route exact path='/temp2' element={<Template2 />} />
        <Route
          exact
          path='/admin/home'
          element={role === 'admin' ? <AdminHome /> : <Navigate to='../' />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
