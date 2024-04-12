"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'


const Navb = ({linkActive}) => {
  const [isSideBarOpen,setSideBar] = useState(false)

  return (
    <div >
      <Nav isSidebarOpen={isSideBarOpen} setIsSidebarOpen={setSideBar} linkActive={linkActive}/>
      <Sidebar isSidebarOpen={isSideBarOpen} setIsSidebarOpen={setSideBar} linkActive={linkActive}/>
    </div>
  )
}

export default Navb
