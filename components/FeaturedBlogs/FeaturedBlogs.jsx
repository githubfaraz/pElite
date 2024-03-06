"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import ProductList from '../ProductList';
import ProductsButton from '../ProductsButton';
import SwiperComponent from '../SwiperComponent';
import { IoEye } from "react-icons/io5";

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





const FeaturedBlogs = () => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    

    const [items, setItems] = useState([]);

    const products = getData();




    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch('https://pets-elite-b.fly.dev/api/blogs');
            if (!res.ok) {
              throw new Error('Error fetching data');
            }
            const result = await res.json();
            setData(result);
            setItems(products);
            setLoading(false);
          } catch (error) {
            console.error('Failed to fetch data:', error);
            setLoading(false);
          }
        };
    
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [products]);

      if (isLoading) {
        return <div className="text-center">
        <div role="status" >
            <svg aria-hidden="true" className="inline w-8 sm:w-24 sm:h-22 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
        <div>Loading Blogs ...</div>
      </div>
      }


    const blogs_featured = [
      {
        _id: "65e8692cad17cd139a91fac2",
        title: "The Benefits of Bully Sticks: A Comprehensive Guide",
        image: "/Blog1.jpg",
        introduction: "Bully sticks, also known as pizzle sticks, have gained popularity as a natural chew treat for dogs...",
        subtitles: [
          "Natural Ingredients",
          "Dental Health",
          "Mental Stimulation",
          "Nutritional Value",
          "Long-Lasting",
          "Odorless Options",
          "Suitable for All Dogs"
        ],
        content: [
          "Bully sticks are made from 100% beef, making them a natural and easily digestible treat for dogs.",
          "Chewing on bully sticks can help promote good dental hygiene in dogs.The act of gnawing on the stick helps remove plaque and tartar buildup, reducing the risk of dental issues such as gum disease and tooth decay.",
          "Dogs have a natural instinct to chew, and bully sticks provide a satisfying outlet for this behavior.",
          "Bully sticks are rich in protein, making them a nutritious snack for dogs.They also contain essential nutrients such as amino acids, which are important for muscle growth and overall health.",
          "Bully sticks are known for their durability and long-lasting chew time.Unlike some other treats that may be devoured in seconds, bully sticks provide hours of chewing enjoyment for dogs, making them a cost-effective option for pet owners.",
          "While some dog treats can have a strong odor that may be off-putting to pet owners, bully sticks are available in odor-free varieties.",
          "Bully sticks come in various shapes, sizes, and textures, making them suitable for dogs of all ages, breeds, and sizes."
        ]
      },
      {
        _id: "65e8692cad17cd139a91fac3",
        title: "Why Quality Matters: The Importance of Premium Ingredients in Bully Sticks",
        image: "/Blog1.jpg",
        introduction: "Bully sticks have emerged as a popular choice among dog owners seeking a natural, long-lasting chew for their pets. However, the quality of ingredients used in these treats significantly impacts their safety and efficacy. This article explores the importance of opting for bully sticks made from premium ingredients.",
        subtitles: [
          "Safety",
          "Nutritional Value",
          "Digestibility",
          "Longevity",
          "Taste and Satisfaction"
        ],
        content: [
          "High-quality ingredients ensure the safety of bully sticks for your dog by reducing the risk of harmful contaminants or toxins. Premium ingredients sourced from reputable suppliers undergo rigorous quality control measures.",
          "Bully sticks made from premium ingredients offer better nutritional value for your dog, providing essential nutrients such as protein, vitamins, and minerals. In contrast, inferior ingredients may lack nutritional benefits and contain artificial additives or fillers.",
          "Quality ingredients contribute to better digestibility, reducing the risk of digestive issues such as upset stomach or diarrhea. Bully sticks made from inferior ingredients may be harder for your dog to digest, leading to gastrointestinal discomfort.",
          "Premium ingredients result in a denser, longer-lasting chew, providing hours of entertainment for your dog. In contrast, bully sticks made from low-quality ingredients may break apart quickly, posing a choking hazard.",
          "Quality ingredients enhance the taste and overall satisfaction of bully sticks for your dog. Premium options offer a natural, delicious flavor that dogs love, while low-quality ingredients may have an unpleasant taste or odor."
        ]
      },
      {
        _id: "65e8692cad17cd139a91fac4",
        title: "Bully Stick Buyer's Guide: What to Look for When Purchasing Bully Sticks",
        image: "/Blog3.jpg",
        introduction: "Choosing the right bully sticks for your dog can be overwhelming given the variety of options available on the market. However, understanding what to look for when purchasing bully sticks can help ensure that you select a safe, high-quality product that meets your pet's needs. In this buyer's guide, we'll outline essential factors to consider to make an informed decision when buying bully sticks for your furry friend.",
        subtitles: [
          "Ingredients",
          "Manufacturing Process",
          "Size and Thickness",
          "Odor and Taste",
          "Safety"
        ],
        content: [
          "Opt for bully sticks made from a single, natural ingredient, preferably high-quality beef. Avoid products with additives, preservatives, or artificial flavors.",
          "Choose bully sticks that undergo minimal processing and are free from harmful chemicals or contaminants. Seek products manufactured in facilities that adhere to strict quality control standards and regulations",
          "Select bully sticks that are appropriate for your dog's size, breed, and chewing habits. Bully sticks come in various lengths and thicknesses, so choose one that matches your pet's chewing preferences",
          "Choose bully sticks with minimal odor and a natural, appealing taste. Avoid products with strong, unpleasant smells, as these may indicate low-quality ingredients or improper processing.",
          "Prioritize bully sticks that are free from potential choking hazards, such as small pieces or sharp edges. Inspect the product for any signs of splintering or breakage before giving it to your dog."
        ]
      }
    ];

  return (
<div className='sm:my-0 md:my-8 lg:my-0'>
    
        <div className="hidden lg:flex flex-row space-x-6 py-8 ">
            {blogs_featured.map((blog)=> <div key={blog._id} style={{ position: 'relative', display: 'inline-block' }}>
                <Image
                  src={blog.image}
                  alt="dog-eating-bully-stick"
                  height={200}
                  width={250}
                  style={{ zIndex: 1,borderRadius: '10rem 10rem 10px 10px' }}
                  className="rounded-ss-2xl mx-auto"
    
                />
                <Link href={`/blogs/${blog._id}`} className="flex flex-row space-x-3 items-center justify-center absolute top-0 left-0 ml-36 mt-80 text-center bg-orange-700 hover:bg-orange-500 transition-all p-2 rounded-lg text-white">
                <IoEye size={20}/>
                <h2 className="block font-medium" style={{ fontFamily: 'poppins' }}>See more</h2>
                </Link>
                <h4 className="mt-6 text-center text-2xl text-amber-700 font-semibold w-96"  style={{fontFamily: 'robot'}}>{blog.title}</h4>
                {/* <h3 className="mt-3 w-96 text-center font-light text-lg"  style={{fontFamily: 'lora'}}>Learn the steps our Bully sticks Production go through before reaching the belly of your Pet</h3> */}
              </div> )}
            
        </div>
    
        <div className="lg:hidden block h-full">
            <SwiperComponent data={blogs_featured}/>
        </div>
</div>


    
  )
}

export default FeaturedBlogs
