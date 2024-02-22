'use client'
import Link from 'next/link'
import React from 'react'

const LearnMoreButton = () => {
  return (
    <Link href='/blogs' className='hidden'>
        <button className="bg-white py-2 px-6 border-orange-700 hover:border-slate-200 hover:text-white hover:bg-orange-700 border-2 sm:hidden rounded-full stroke-2 text-lg block sm:w-52 w-full">Learn More</button>
    </Link>
  )
}

export default LearnMoreButton
