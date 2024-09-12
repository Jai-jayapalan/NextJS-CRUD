import React from 'react'
import Link from 'next/link'

const NavBar = async() => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-8'>
        <Link className='text-white font-bold' href={'/'}>GetCode.</Link>
        <Link className='px-3 py-3 bg-slate-100 text-black' href={'/addTopic'}>Add Topic</Link>
    </nav>
  )
}

export default NavBar