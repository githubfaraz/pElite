"use client"
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { links } from '../utils/constants'
import Image from 'next/image'


const Sidebar = ({isSidebarOpen, setIsSidebarOpen,linkActive}) => {
  
  const closeSidebar = () =>{
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={`sidebar ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0  bg-white transition-transform z-10 w-screen h-full `}>
      
      <div className="sidebar-header flex justify-between items-center px-4 py-6">
        {/* <img src={logo} className='logo' alt='comfy sloth' /> */}
        <button className="close-btn text-red-dark text-2xl" type='button' onClick={closeSidebar}>
          <FaTimes style={{ color: 'brown' }} />
        </button>
      </div>
      <Link href='/products' className="ml-2 mx-auto flex flex-row space-x-2 pl-32">
              <Image
                src='/logoP.png'
                alt='elite-bully-sticks-facebook'
                height={200}
                width={70}
                className='h-20 w-20'
              />
      </Link>
      <ul className="links mb-8">
        {links.map(({ id, text, url }) => (
          <li key={id}>
            <Link href={url} onClick={closeSidebar}><button className="block text-base capitalize px-6 py-4 text-gray-500 transition duration-300 hover:bg-grey-10 hover:text-grey-2">{text}</button></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
