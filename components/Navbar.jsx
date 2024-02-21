'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-burgundy text-white px-9 py-2 h-10'>
        <ul className='flex flex-row space-x-10'>
            <li>Our Companies:</li>
            <li>
                <Link href='/company' className='btn btn-primary bg-amber-600 p-1 rounded-md'>KSK International LLC</Link>
            </li>
            <li>
                <Link href='/company' className='btn btn-primary bg-amber-600 p-1 rounded-md'>Mysha Khan LLC</Link>
            </li>
            <li>
                <Link href='/company' className='btn btn-primary bg-amber-600 p-1 rounded-md'>JUST ASK LLC</Link>
            </li>
            <li>
                <Link href='/company' className='btn btn-primary bg-amber-600 p-1 rounded-md'>Medlink World LLC</Link>
            </li>
            <li>
                <Link href='/company' className='btn btn-primary bg-amber-600 p-1 rounded-md'>Zeake Khan LLC</Link>
            </li>
            <li>
                <Link href='/company' className='btn btn-primary bg-amber-600 p-1 rounded-md'>Sierra Global Health LLC</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
