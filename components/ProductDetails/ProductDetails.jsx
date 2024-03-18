// 'use client'
import React from 'react'
import Navb from '../Navb'
import Image from 'next/image'
// import { Product } from '@/types/Product'
import FAQ from '../FAQ'
import Footer from '../Footer'
import useProduct from '@/hooks/useProduct'


async function ProductDetails ({ params })  {

    const res = await fetch(`https://pets-elite-b.fly.dev/api/bully-sticks/${params.id}`);
    const product = await res.json();


    const nutritionFacts = product.nutrition_facts
                .map((item,index)=>(
                    <li key={index}>{item}</li>
                ));
    const feedingGuidelines = product.feeding_guidelines.split('.')
                .map((item,index)=>(
                    <li key={index}>{item}</li>
                ));



  return (
    <div>
      {/* <MainNavbar /> */}
      <Navb linkActive='9' />
      <div className='flex sm:flex-row flex-col sm:space-x-12 space-y-4 sm:mx-10 mx-4 sm:my-8 my-2'>
        <div className='sm:w-1/2 w-full flex-col space-y-2 '>
            <Image 
                src={product.image.filePath}
                alt='bully-stick'
                height={100}
                width={1600}
                className='border shadow-xl mb-8 rounded-lg'
            />
        </div>

        <div className='flex flex-col sm:space-y-6 space-y-3 sm:w-1/2 w-full'>
            <div className='flex flex-col space-y-3'>
                <h2 className='sm:text-5xl text-4xl font-bold text-orange-500 font-playfair_display' style={{fontFamily: 'playfair_display'}}>{product.name}</h2>
                <p className='text-lg font-light' style={{fontFamily: 'inter'}}>{product.details}</p>
            </div>
            <div>
                <h2 className='sm:text-4xl text-3xl font-semibold text-orange-500 mb-4 font-playfair_display' >Product Overview</h2>
                <div className='flex flex-col space-y-3 bg-gray-100 p-3'>
                    <div className='flex flex-col space-x-0 lg:flex-row sm:space-x-2 bg-gray-100'>
                        <div className='py-2 sm:px-8 px-2 bg-gray-100 sm:w-80 w-full flex flex-row space-x-4 align-middle rounded-md'>
                            <Image
                                src='/dog-size.png'
                                height={20}
                                width={50}
                                alt='animal-consumption'
                            />
                    
                            <h2 className=' text-gray-900 rounded-2xl my-auto font-semibold text-lg' style={{fontFamily: 'meri'}}>{product.size_consumption.join(',')}</h2>
                        </div>
                        <div className='py-2 sm:px-8 px-2 bg-gray-100 sm:w-80 w-full flex flex-row space-x-4 align-middle rounded-md'>
                            <Image
                                src='/life-stage.png'
                                height={80}
                                width={45}
                                alt='animal-consumption'
                            />
                    
                            <h2 className=' text-gray-900 rounded-2xl my-auto font-semibold text-lg font-playfair_display' >{product.age_consumption.join(',')}</h2>
                        </div>
                    </div>
                    <div className='py-2 sm:px-8 px-2 bg-gray-100 sm:w-80 w-full flex flex-row space-x-4 align-middle rounded-md'>
                            <Image
                                src='/bs-thickness.webp'
                                height={80}
                                width={45}
                                alt='animal-consumption'
                            />
                    
                            <h2 className=' text-gray-900 rounded-2xl my-auto font-semibold text-lg' style={{fontFamily: 'meri'}}>{product.thickness}</h2>
                        </div>
                </div>
            </div>
            <hr />

            <FAQ feedingGuidelines={feedingGuidelines} nutritionFacts={nutritionFacts} />


            
        </div>
      </div>

      <br />
      <hr />
      <Footer />
    </div>
  )
}

export default ProductDetails
