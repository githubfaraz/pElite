import React from 'react';
import Image from "next/image";
import ProductList from '../ProductList';
import ProductsButton from '../ProductsButton';

async function getData() {
    const res = await fetch('https://pets-elite-b.fly.dev/api/bully-sticks')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


const FeaturedProducts = async() => {

    const data = await getData();

    const products_featured = data.slice(-3)

  return (
       <div className="bg-orange-200 h-max pb-2 pt-2">
        <h1 className="mb-6 text-amber-900 text-3xl font-bold text-center pt-4" style={{
          fontFamily: 'robot_slab'
        }}>
            Our Featured Products
        </h1>

        <div className="flex sm:flex-row flex-col space-y-3 align-middle justify-between pt-4 px-9">
            {products_featured.map((product)=> (
                <div key={product._id} className="flex flex-col align-middle space-y-3  bg-white w-88 p-6 rounded-md shadow-xl hover:shadow-none hover:cursor-pointer">
                <Image
                  src={product.image.filePath}
                  alt="bully stick"
                  height={200}
                  width={300}
                  className="rounded-2xl"
                />
                <br />
                <hr />
                <br />
                <h1 className="text-2xl font-semibold w-full text-center text-gray-900" style={{fontFamily: 'lora'}}>{product.name}</h1>
              </div>
            ))}
          {/* <h1 className="rounded-full py-2 px-6 bg-amber-800 text-white w-36">Bully Sticks</h1> */}
        </div>

        <div className="mt-8 mb-10 sm:ml-7xl " >
          <ProductsButton buttonName={'See more'}/>
        </div>
      </div>   
  )
}

export default FeaturedProducts
