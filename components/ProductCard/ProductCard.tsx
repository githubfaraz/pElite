import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// import { Product } from '@/types';

type Image = {
  fileName: string;
  filePath: string;
}

export type Product = {
  _id: string;
  name: string;
  length: string;
  style: string;
  thickness: string;
  details: string;
  feeding_guidelines: string;
  general_feeding_guidelines: string[];
  nutrition_facts: string[];
  image: Image;
  extra_images: Image[];
  age_consumption: string[];
  size_consumption: string[];
};

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`}>
        <div className="flex flex-col align-middle space-y-2 border-2 bg-white sm:w-72 w-28 sm:p-6 p-2 rounded-md shadow-xl hover:shadow-sm sm:h-96">
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
            <h1 className="sm:text-2xl text-lg font-semibold w-full text-center text-gray-900 font-playfair_display" >{product.name}</h1>
        </div>
    </Link>
  )
}

export default ProductCard
