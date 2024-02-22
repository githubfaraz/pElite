import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ProductList from '../ProductList';
import ProductsButton from '../ProductsButton';
import SwiperComponent from '../SwiperComponent';

async function getData() {
    const res = await fetch('https://pets-elite-b.fly.dev/api/blogs')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


const FeaturedBlogs = async() => {

    const data = await getData();

    const blogs_featured = data.slice(-3);



  return (
<div>
    
        <div className="hidden sm:flex flex-row space-x-6 py-8">
            {blogs_featured.map((blog)=> <div key={blog._id} style={{ position: 'relative', display: 'inline-block' }}>
                <Image
                  src={blog.image}
                  alt="dog-eating-bully-stick"
                  height={200}
                  width={250}
                  style={{ zIndex: 1,borderRadius: '10rem 10rem 10px 10px' }}
                  className="rounded-ss-2xl mx-auto"
    
                />
                <Link href={`/blogs/${blog._id}`} className="flex flex-row space-x-3 items-center justify-center absolute top-0 left-0 ml-36 mt-80 text-center bg-orange-700 hover:bg-orange-500 transition-all p-2 rounded-lg">
                <Image
                    src="/eye.png"
                    alt="dog-eating-bully-stick"
                    height={20}
                    width={20}
                />
                <h2 className="block text-black font-medium" style={{ fontFamily: 'poppins' }}>See more</h2>
                </Link>
                <h4 className="mt-6 text-center text-2xl text-amber-700 font-semibold w-96"  style={{fontFamily: 'robot'}}>{blog.title}</h4>
                {/* <h3 className="mt-3 w-96 text-center font-light text-lg"  style={{fontFamily: 'lora'}}>Learn the steps our Bully sticks Production go through before reaching the belly of your Pet</h3> */}
              </div> )}
            
        </div>
    
        <div className="sm:hidden block">
            <SwiperComponent data={blogs_featured}/>
        </div>
</div>


    
  )
}

export default FeaturedBlogs
