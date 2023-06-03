import React from 'react'
import { Link } from 'react-router-dom'


function Navigation() {
  return (
    <nav className='flex justify-between items-center bg-white py-7 px-10 drop-shadow-lg'>
        <h1 className='text-3xl font-black'>Guide Me</h1>
        <ul className='flex gap-5 text-lg font-extrabold'>
            <Link to="/home" className='hover:opacity-50'>Home</Link>
            <Link to="/category" className='hover:opacity-50'>Category</Link>
            <Link to="/about" className='hover:opacity-50'>About</Link>
            <Link to="/contact" className='hover:opacity-50'>Contact</Link>
        </ul>
    </nav>
  )
}

export default Navigation