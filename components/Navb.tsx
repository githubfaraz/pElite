"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'

interface props{
    linkActive: string;
}

const Navb = ({linkActive}: props) => {
  const [isSideBarOpen,setSideBar] = useState<boolean>(false)

  return (
    <div >
    <Nav isSidebarOpen={isSideBarOpen} setIsSidebarOpen={setSideBar} linkActive={linkActive}/>
    <Sidebar isSidebarOpen={isSideBarOpen} setIsSidebarOpen={setSideBar} linkActive={linkActive}/>
    </div>
  )
}

export default Navb
