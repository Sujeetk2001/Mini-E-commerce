import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddItems from './components/AddItems'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
     <Navbar />
     <Outlet /> 
    </>
  )
}

export default App
