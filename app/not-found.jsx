import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='mx-auto py flex flex-col space-y-4'>
      <Image alt='nfound' className='w-96 h-80 mx-auto' src='noFound.svg' height={90} width={100}/>
      <Link href='/' className='px-20 py-4 rounded-md mx-auto w-fit bg-orange-400 text-white'>Return Home</Link>
    </div>
  )
}

export default notFound
