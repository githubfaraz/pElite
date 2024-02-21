'use client'
import Link from 'next/link'
import React from 'react'

const MainNavbar = () => {
  return (
    <div className='sm:visible flex flex-row space-x-8 pt-5 text-amber-600 text-lg font-medium px-auto none invisible' style={{
        marginLeft: '26rem',
        fontFamily: 'meri'
    }}>
      <Link href='/products' className='font-extrabold'>Our Products</Link>
      <Link href='/about' className='font-medium'>About Us</Link>
      <Link href='/blogs'>Blogs</Link>
      <Link href='/contact'>Contact Us</Link>
    </div>
  )
}

export default MainNavbar
