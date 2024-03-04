'use client'
import Footer from '@/components/Footer'
import MainNavbar from '@/components/MainNavbar'
import Navb from '@/components/Navb'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
// Note:remember to remove the navbar
const Page = () => {
    const [state, handleSubmit] = useForm("mayrjoke");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
  return (
    <div>
        
        
        <Navb linkActive='4' />
        
        {/* MainSection */}
        <div className='flex lg:flex-row flex-col lg:space-x-8 space-y-10 lg:my-24 mb-6 lg:mx-10 mx-5 h-full'>
            <div className='relative inline-block'>
                <Image
                    src='/production.jpg'
                    height={800}
                    width={1250}
                    alt='dog-chewing-bully-stick'
                    className='rounded-2xl brightness-50  h-full w-full'
                    style={{ zIndex: 1}}
                />
                <div className='absolute md:top-1/4 top-4 text-center md:mt-64 mt-16 md:text-6xl text-4xl font-semibold text-white' style={{fontFamily: "playfair_display"}}>
                    Contact Us
                    <h1 className='md:text-xl text-sm font-light text-center md:w-5/6 w-full mx-auto' style={{fontFamily: 'roboto'}}>Ask about our products,our processes,implementation or anything else.We would be interested to hear from you.</h1>
                </div>
            </div>
            <div className=' w-full'>
            <form
            method="POST"
            action="https://formspree.io/f/mayrjoke"
            >
                    <div className='flex lg:flex-row lg:space-x-2 flex-col space-y-4 lg:space-y-0'>
                        <div className='flex flex-col'>
                            <label htmlFor="first_name" className='ml-2 font-medium text-lg' style={{fontFamily: "playfair_display"}}>First Name</label>
                            <input className='p-2 w-72 md:w-full lg:w-72  rounded-lg border-2 border-gray-400' type="text"
                                    name="first_name"
                                    id="first_name"
                                    placeholder="First Name"
                                    aria-required="true"
                                    required
                                    style={{borderWidth: '0.75px'}}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="second_name"  className='ml-2 font-medium text-lg' style={{fontFamily: "playfair_display"}}>Second Name</label>
                            <input className='p-2 w-72 md:w-full lg:w-72 rounded-lg border-2 border-gray-400'
                                name="second_name"
                                id="second_name"
                                placeholder="Second Name"
                                aria-required="true"
                                required
                            style={{borderWidth: '0.75px'}} />
                        </div>
                    </div>
                    <div className='flex flex-col sm:space-y-2 mt-4 w-full'>
                        <label htmlFor="email_address"  className='ml-2 font-medium text-lg' style={{fontFamily: "playfair_display"}}>Email Address</label>
                        <input className='p-2 w-full rounded-lg border-2 border-gray-400'
                            name="email"
                            id="email"
                            placeholder="Email"
                            aria-required="true"
                            required
                            style={{borderWidth: '0.75px'}} 
                            type="email"/>
                    </div>
                    <div className='flex flex-col space-y-2 mt-4 ' >
                        <label htmlFor="phone_number" className='ml-2 font-medium text-lg' style={{fontFamily: "playfair_display"}}>Phone Number</label>
                        <input className='p-2 w-full rounded-lg border-2 border-gray-400' 
                            name="phone_number"
                            id="phone_number"
                            placeholder="Phone Number"
                            aria-required="true"
                            required
                            style={{borderWidth: '0.75px'}} />
                       
                    </div>
                    <div className='flex flex-col space-y-2 mt-4'>
                        <label htmlFor="message" className='ml-2 font-medium text-lg' style={{fontFamily: "playfair_display"}}>Message</label>
                        <textarea name="message" id="message" placeholder="Message"
                            aria-required="true"
                            required cols={30} rows={5} style={{borderWidth: '0.75px'}} className='p-2 w-full rounded-lg border-2 border-gray-400 '/>
                    </div>
                    <button type="submit" aria-label="Send Message" className='mt-4 text-center bg-burgundy text-white py-3 px-4 w-full rounded-2xl border-4 border-slate-200 text-lg font-semibold hover:bg-white hover:text-burgundy hover:border-burgundy hover:transition-all' style={{fontFamily: "poppins",borderWidth: '2px'}}>Send Message</button>
                </form>
            </div>
            

        </div>
{/* MainSection */}
        <hr />
        <Footer />
    </div>
  )
}

export default Page
