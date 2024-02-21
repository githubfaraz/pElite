'use client'
import Link from 'next/link'
import React from 'react'

const ContactUsButton = () => {
  return (
    <Link href='/contact' >
      <button  className='rounded-full py-2 sm:px-6  border-2 bg-amber-800 hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg sm:w-52 w-full' style={{fontFamily: "poppins"}}>
        Contact Us
      </button>
    </Link>
  )
}

export default ContactUsButton
