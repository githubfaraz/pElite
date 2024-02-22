import Footer from '@/components/Footer'
import MainNavbar from '@/components/MainNavbar'
import Navb from '@/components/Navb'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

// Note:remember to remove the navbar
const page = () => {
  return (
    <div>
        
        
        <Navb linkActive='4' />
        
        {/* MainSection */}
        <div className='flex sm:flex-row flex-col sm:space-x-8 space-y-10 sm:my-24 mb-6 sm:mx-10 mx-5 h-full'>
            <div className='relative inline-block'>
                <Image
                    src='/production.jpg'
                    height={800}
                    width={1250}
                    alt='dog-chewing-bully-stick'
                    className='rounded-2xl brightness-50  h-full w-full'
                    style={{ zIndex: 1}}
                />
                <div className='absolute sm:top-1/4 top-4 text-center sm:mt-64 mt-16 sm:text-6xl text-4xl font-semibold text-white' style={{fontFamily: "playfair_display"}}>
                    Contact Us
                    <h1 className='sm:text-xl text-sm font-light text-center sm:w-5/6 w-full mx-auto' style={{fontFamily: 'roboto'}}>Ask about our products,our processes,implementation or anything else.We would be interested to hear from you.</h1>
                </div>
            </div>
            <div className=' w-full'>
                <form >
                    <div className='flex sm:flex-row sm:space-x-2 flex-col space-y-4 sm:space-y-0'>
                        <div className='flex flex-col'>
                            <label className='ml-2 font-medium text-lg' style={{fontFamily: "playfair_display"}}>First Name</label>
                            <input className='p-2 w-72 rounded-lg border-2 border-gray-400' type="email" style={{borderWidth: '0.75px'}}/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='ml-2 font-medium text-lg' style={{fontFamily: "playfair_display"}}>Second Name</label>
                            <input className='p-2 w-72 rounded-lg border-2 border-gray-400' style={{borderWidth: '0.75px'}} type="email"/>
                        </div>
                    </div>
                    <div className='flex flex-col sm:space-y-2 mt-4 w-full'>
                        <label className='ml-2 font-medium text-lg' style={{fontFamily: "playfair_display"}}>Email Address</label>
                        <input className='p-2 w-full rounded-lg border-2 border-gray-400' style={{borderWidth: '0.75px'}} type="email"/>
                    </div>
                    <div className='flex flex-col space-y-2 mt-4 ' >
                        <label className='ml-2 font-medium text-lg' style={{fontFamily: "playfair_display"}}>Phone Number</label>
                        <input className='p-2 w-full rounded-lg border-2 border-gray-400' style={{borderWidth: '0.75px'}} />
                    </div>
                    <div className='flex flex-col space-y-2 mt-4'>
                        <label className='ml-2 font-medium text-lg' style={{fontFamily: "playfair_display"}}>Message</label>
                        <textarea name="message" id="message" cols={30} rows={5} style={{borderWidth: '0.75px'}} className='p-2 w-full rounded-lg border-2 border-gray-400 '/>
                    </div>
                    <button className='mt-4 text-center bg-burgundy text-white py-3 px-4 w-full rounded-2xl border-4 border-slate-200 text-lg font-semibold hover:bg-white hover:text-burgundy hover:border-burgundy hover:transition-all' style={{fontFamily: "poppins",borderWidth: '2px'}}>Send Message</button>
                </form>
            </div>
            

        </div>
{/* MainSection */}
        <hr />
        <Footer />
    </div>
  )
}

export default page
