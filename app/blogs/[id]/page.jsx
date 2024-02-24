import BlogDetails from '@/components/BlogDetails/BlogDetails'
import Footer from '@/components/Footer'
import Navb from '@/components/Navb'
import Image from 'next/image'
import React from 'react'

const page = ({params}) => {

  
  
  return (
    <div>
      <BlogDetails params={params}/>
    </div>
  )
}

export default page
