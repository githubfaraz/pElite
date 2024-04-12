'use client';
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Blogs = () => {
    const[blogs,setBlogs]=useState([]);

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch('https://pets-elite-backend-wvj4.vercel.app/api/blogs');
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
    },[]);

    return (
    <div className='flex flex-row flex-wrap space-x-2 mx-auto space-y-3 align-top'>
      {blogs.map((blog)=>(
        <Link key={blog._id} href={`/blogs/${blog._id}`}>
        <div className="flex flex-col align-middle space-y-3  bg-white sm:w-64 w-36 sm:p-6 p-2 max-h-11/12 rounded-md shadow-xl sm:h-96  border hover:shadow-sm " style={{borderWidth: '1px'}}>
            <Image
            src={blog.image}
            alt="bully stick"
            height={200}
            width={300}
            />
            <br />
            <hr />
            <h1 className="text-base font-bold w-full  text-gray-900 text-start" >{blog.title}</h1>
            <h2 className='' >{blog.introduction.slice(0,50)}...</h2>
        </div>
        </Link>

    ))}
    </div>
  )
}

export default Blogs
