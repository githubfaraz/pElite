import React from 'react'
import Navb from '../Navb';
import Image from 'next/image'

const BlogDetails = async ({ params }) => {
    const res = await fetch(`https://pets-elite-b.fly.dev/api/blogs/${params.id}`);
    const blogContent = await res.json();
  return (
    <div className="App">
    {blogContent && (
      <div>
        <div style={{ position: 'relative', display: 'inline-block' }} >
        <Image
          src={blogContent.image}
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
          {blogContent.title}
        </div>
      </div>

      {/* body */}
      <div className='sm:mx-14 mx-4 sm:my-10 my-5  flex-col space-y-3'>
        <div className='sm:w-full w-full'>
          <div>
            <Image 
              src={blogContent.image}
              height={100}
              width={800}
              alt='dog-chewing bully-stick'
              className='rounded-lg mx-auto'
              />
        <h1 className='text-orange-500 sm:text-2xl text-xl font-semibold ml-3 sm:my-4 my-2 text-center' style={{fontFamily: 'roboto'}}>{blogContent.title}</h1>
        <p>{blogContent.introduction}</p>
        {blogContent.subtitles.map((subtitle, index) => (
          <div key={index}>
            <h2 className='text-orange-500 sm:text-2xl text-xl font-semibold ml-7 sm:my-4 my-2' style={{fontFamily: 'roboto'}}>{subtitle}</h2>
            <p>{blogContent.content[index]}</p>
          </div>
        ))}

          </div>
        </div>



      </div>
      </div>
    )}
  </div>
  )
}

export default BlogDetails


