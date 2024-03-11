import React from 'react'
import Image from 'next/image';
import Footer from '@/components/Footer';

const Page = () => {
  return (
    <div className='flex flex-col space-y-4'>
      <Image
        src='/construction.svg'
        alt='company_in_progress'
        width={400}
        height={400}
        className='mx-auto my-10'
        sizes="(max-width: 480px) 40vw,(max-width: 1200px) 30vw,23vw"
      />
      <p className='text-center  text-5xl font-bold'>Under Maintenance</p>
      <p className='text-center my-3'>Our website is under construction we are working <span className='inline sm:block'>very hard to give you the best experience with this one</span></p>
      <h1 className='text-center text-2xl font-extralight'>Notify me when it&apos;s ready</h1>
      <form className='mx-auto flex flex-col sm:flex-row sm:space-x-4 space-y-2'>
        <input type="text" placeholder='Email' className='bg-slate-300 rounded-sm p-2'/>
        <button className='text-white bg-burgundy px-3 sm:px-6 py-3 rounded-md'>NOTIFY ME</button>
      </form>
      <br />
      <hr />
      <br />
      <Footer />
    </div>
  )
}

export const metadata = {
  title: "Company",
  description: "Elite Bully Sticks information"
}


export default Page
