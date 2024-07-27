import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-slate-400 text-2xl'>
        <div>
            <h2 className='font-serif font-semibold'>Sheryians</h2>
        </div>
        <div className='font-mono'>
            <Link className='m-5' href='/'>Home</Link>
            <Link className='m-5' href='/about'>About</Link>
            <Link className='m-5' href='/product'>Products</Link>
            <Link className='m-5' href='/course'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar