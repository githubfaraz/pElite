"use client"
import React, { useEffect, useState } from 'react'
import Navb from '../Navb';
import Image from 'next/image'

function BlogDetails ({ params })  {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://pets-elite-b.fly.dev/api/blogs/${params.id}`);
        if (!res.ok) {
          throw new Error('Error fetching data');
        }
        const result = await res.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]); // If params.id changes, you would want to re-fetch the data

  if (isLoading) return (
    <div className="text-center">
      Loading
    </div>
  );

  console.log(data)

  if (!data) return <div>Error: Data could not be fetched</div>;

  return (
    <div>
    {/* {blogContent && ( */}
      <div>
        <div style={{ position: 'relative', display: 'inline-block' }} >
        <Image
          src={data.image}
          alt='dog-chewing-bully-stick'
          height={50}
          width={1500}
          className='object-cover h-96 filter brightness-50'
          style={{ zIndex: 1}}
        />
        <div className='absolute top-0 left-0 ml-0 mt-0'>
          {/* <MainNavbar /> */}
          <Navb linkActive='9'/>
        </div>
        <div className='absolute sm:top-1/4 top-32 sm:left-10 left-0 sm:mx-auto text-center ml-0 mt-2 sm:text-6xl text-4xl font-semibold text-orange-600 ' style={{fontFamily: 'playfair_display'}}>
          {data.title}
        </div>
      </div>

      {/* body */}
      <div className='sm:mx-14 mx-4 sm:my-10 my-5  flex-col space-y-3'>
        <div className='sm:w-full w-full'>
          <div>
            <Image 
              src={data.image}
              height={100}
              width={800}
              alt='dog-chewing bully-stick'
              className='rounded-lg mx-auto'
              />
        <h1 className='text-orange-500 sm:text-2xl text-xl font-semibold ml-3 sm:my-4 my-2 text-center' style={{fontFamily: 'roboto'}}>{data.title}</h1>
        <p>{data.introduction}</p>
        {data.subtitles.map((subtitle, index) => (
          <div key={index}>
            <h2 className='text-orange-500 sm:text-2xl text-xl font-semibold ml-7 sm:my-4 my-2' style={{fontFamily: 'roboto'}}>{subtitle}</h2>
            <p>{data.content[index]}</p>
          </div>
        ))}

          </div>
        </div>



      </div>
      </div>
     {/* )}  */}
  </div>
  )
}

export default BlogDetails


