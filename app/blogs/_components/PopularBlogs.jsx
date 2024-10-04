'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PopularBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://pets-elite-backend-nine.vercel.app/api/blogs');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Could not fetch blogs", error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className='flex flex-col space-y-2'>
      {blogs.slice(0, 3).map((blog) => {
        return (
          // <div >
          <Link href={`/blogs/${blog._id}`} key={blog._id} className='mt-4 space-y-4 text-lg ' >
            <div className='flex flex-row space-x-2 p-2 hover:shadow-xl border-2 rounded-md border-gray-300' style={{ borderWidth: '1px' }}>
              <Image
                src={blog.image}
                width={150}
                height={100}
                className='h-32'
                alt='bully-sticks-article'
              />
              <h2 className='font-normal w-full'>{blog.title}</h2>
            </div>
          </Link>
          // </div>
        )
      })}
    </div>
  )
}

export default PopularBlogs
