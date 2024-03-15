import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product._id}`}>
        <div className="flex flex-col align-middle space-y-2 max-h-52 sm:max-h-72 border-2 bg-white sm:w-72 w-36 sm:p-4 p-2 rounded-md shadow-xl hover:shadow-sm sm:h-96">
            <Image
            src={product.image.filePath}
            alt="bully stick"
            height={200}
            width={300}
            className="rounded-sm sm:rounded-lg"
            />
            {/* <br /> */}
            <hr />
            {/* <br /> */}
            <h1 className="sm:text-2xl text-lg font-semibold w-full text-center text-gray-900 font-playfair_display" >{product.name}</h1>
            <br />
            <br />
        </div>
    </Link>
  )
}

export default ProductCard
