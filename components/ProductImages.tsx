'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface image{
    filePath: string;
    fileName: string;
    fileType: string;
    fileSize: string;
}




const ProductImages = () => {
    const images: image[] = [
        {
            fileName: "product2",
            filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1703660560/Comfy-Sloth%20Store/Accent%20Chair/images2_qw8euk.jpg",
            fileType: "image/jpeg",
            fileSize: "80.68kb",
        },
        {
            fileName: "product3",
            filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1703660559/Comfy-Sloth%20Store/Accent%20Chair/images1_ujbgje.jpg",
            fileType: "image/jpeg",
            fileSize: "80.68kb",
        },
        {
            fileName: "product4",
            filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1703660507/Comfy-Sloth%20Store/Accent%20Chair/Untitled_ccijp1.jpg",
            fileType: "image/jpeg",
            fileSize: "80.68kb",
        }
    ]
  const [main, setMain] = useState(images[0]);

//   console.log(images);
  return (
    <section className="w-full">
     <Image
    src={`${main.filePath}`} 
    alt=''
    width={300}
    height={200}
    className='main h-600'
    />
      <div className='grid grid-cols-5 gap-4 mt-4'>
        {images.map((image, index) => (
          <Image
            src={image.filePath}
            alt=''
            key={index}
            width={300}
            height={200}
            className={`h-100 cursor-pointer ${image.filePath === main.filePath ? 'border-2 border-primary-500' : ''}`}
            onClick={() => setMain(images[index])}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductImages;
