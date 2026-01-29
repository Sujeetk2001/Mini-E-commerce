import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-500 flex justify-between px-10 py-5 items-center'>
      <h1 className='text-4xl text-white font-semibold'>DELTA</h1>
      <div className='flex gap-40 text-white list-none text-lg'>
        <NavLink to="/" className={({isActive})=>isActive ? 'text-orange-600' : ''} >Home</NavLink>
        <NavLink to="/product" className={({isActive})=>isActive ? 'text-orange-600' : ''}>Products</NavLink>
        <NavLink to="/addItems" className={({isActive})=>isActive ? 'text-orange-600' : ''}>Add Items</NavLink>
      </div>
    </div>
  )
}

export default Navbar
