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
        <div role="status" className='mx-auto my-auto'>
            <svg aria-hidden="true" className=" sm:mx-auto inline w-8 sm:w-28 sm:h-28 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
        <div>Loading Blog ...</div>
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


