'use client'
import React, { useEffect, useState } from 'react'
import ProductOverViewSection from '../ProductOverViewSection'
import { Product, Products } from '@/types/Product';
import useProducts from '@/hooks/useProducts';

// async function getData() {
//     const res = await fetch('http://127.0.0.1:5000/api/bully-sticks')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
   
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
   
//     return res.json()
//   }

const ProductFilters = () => {
    // const data = await getData();
    const [productss,setProductss] = useState<Products[]>([])
    let [categoryFilters, setcategoryFilters] = useState(new Set());




        // start search
        const [searchTerm, setSearchTerm] = useState('');
        // const [searchResults, setSearchResults] = useState(furnitureData);
      
        const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;
          setSearchTerm(value);
        //   const filteredResults = furnitureData.filter(furniture =>
        //     furniture.name.toLowerCase().includes(value.toLowerCase())
        //   );
        //   setSearchResults(filteredResults);
        };
    
        // end search
    
    
        const [filterTags, setFilterTags] = useState<string[]>([]);
    
        // const filteredDATA = DATA.filter((node) =>
        //   filterTags.length > 0
        //     ? filterTags.every((filterTag) =>
        //         node.tags.map((tag) => tag.slug).includes(filterTag)
        //       )
        //     : DATA
        // );
    
        const {products} = useProducts()
    
        // useEffect(() => {
        //     const fetchData = async () => {
          
        //       let filteredResults = data.filter((user) => {
        //         const isAgeMatch = !filters.age || user.age === filters.age;
        //         const isLengthMatch = !filters.length || user.length === filters.length;
        //         const isWeightMatch = !filters.weight || user.weight === filters.weight;
        //         return isAgeMatch && isLengthMatch && isWeightMatch;
        //       });
          
        //       if (searchTerm) {
        //         filteredResults = filteredResults.filter((user) =>
        //           user.name.toLowerCase().includes(searchTerm.toLowerCase())
        //         );
        //       }
          
        //       setFilteredUsers(filteredResults);
        //     };
          
        //     fetchData();
        //   }, [filters, searchTerm, users]);
          
    
        // const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        // if (event.target.checked) {
        //     setFilterTags([...filterTags, event.target.value]);
        // } else {
        //     setFilterTags(
        //     filterTags.filter((filterTag) => filterTag !== event.target.value)
        //     );
        // }
        // };

        const categories = [
            '6 inch',
            '8 inch',
            "12 inch",
            "All",
        ];

        const thickness = [
            "straight",
            "braided"
        ]

        // products

        function updateFilters(checked: boolean, categoryFilter: string) {
            if (checked)
              setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
            if (!checked)
              setcategoryFilters((prev) => {
                const next = new Set(prev);
                next.delete(categoryFilter);
                return next;
              });
          }

        const filteredProducts = categoryFilters.size === 0
            ? products
            : products.filter((p) => categoryFilters.has(p.length));
        // setProductss(filteredProducts);

        // const filteredProductsThickness = categoryFilters.size === 0
        //     ? products
        //     : products.filter((p) => categoryFilters.has(p.style));
        // setProductss(filteredProductsThickness);
        
        // const filteredProductsStyle = categoryFilters.size === 0
        //     ? products
        //     : products.filter((p) => categoryFilters.has(p.thickness));
        //     setProductss(filteredProductsStyle);









        // 
    //     <div>
    //     <div className="d-flex justify-content-evenly">
    //       {categories.map((elm, index) => {
    //         return (
    //           <div  key={index}>
    //             <label >
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 onChange={(e) => updateFilters(e.target.checked, elm)}
    //               />
    //               {elm}
    //             </label>
    //           </div>
    //         );
    //       })}
    //     </div>
    //     <div className="d-flex flex-wrap">
    //       {filteredProducts.map((prod) => {
    //         return (
    //           <div className="card m-3" style={{ width: '400px' }} key={prod.id}>
    //             <div className="card-body">
    //               <p className="card-text">Id: {prod.id}</p>
    //               <h3 className="card-title">Title: {prod.title}</h3>
    //               <p className="card-text">Price: {prod.price}</p>
    //               <p className="card-text">Category: {prod.category}</p>
    //               <p className="card-text">Rating: {prod.rating.rate}</p>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    
    console.log(products)
    
  return (
    <div className='flex sm:flex-row sm:space-x-4 flex-col space-y-3'>

      <div className='sm:w-1/4 w-full sm:mx-10 sm:my-14 mx-5 my-7'>
                <form>   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-orange-500 focus:border-orange-500  slate:border-orange-600 dark:placeholder-gray-400  dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Search Products" required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Search</button>
                    </div>
                </form>
                {/* <SearchInput/> */}

                <div className='mt-6'>
                    <h2 className='border-b-8 text-2xl font-semibold text-orange-600 border-orange-400' style={{fontFamily: 'playfair_display'}}>By Length</h2>
                    {/* <RadioExample /> */}
                    <div className='mt-4 space-y-4 text-xl'>
                        {categories.map((elm, index) => {
                            return (
                                <div  key={index}>
                                <label >
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={(e) => updateFilters(e.target.checked, elm)}
                                    />
                                    {elm}
                                </label>
                                </div>
                            );
                    })}
                    </div>
                   
                </div>

                {/* <div className='mt-6'>
                    <h2 className='border-b-8 text-2xl font-semibold text-orange-600 border-orange-400' style={{fontFamily: 'playfair_display'}}>By Style</h2>
                    
                    <div className='mt-4 space-y-4 text-xl'>
                        {thickness.map((elm, index) => {
                            return (
                                <div  key={index}>
                                <label >
                                    <input
                                    className=""
                                    type="checkbox"
                                    onChange={(e) => updateFilters(e.target.checked, elm)}
                                    />
                                    {elm}
                                </label>
                                </div>
                            );
                    })}
                    </div>
                </div>

                <div className='mt-6'>
                    <h2 className='border-b-8 text-2xl font-semibold text-orange-600 border-orange-400' style={{fontFamily: 'playfair_display'}}>By Thickness</h2>
                    <div className='mt-4 space-y-4 text-xl'>
                        <h2 style={{fontFamily: 'roboto'}}>Thin</h2>
                        <h2 style={{fontFamily: 'roboto'}}>Standard</h2>
                        <h2 style={{fontFamily: 'roboto'}}>Thick</h2>
                        <h2 style={{fontFamily: 'roboto'}}>Jumbo</h2>
                    </div>
                </div> */}
            </div>
            <div className='flex flex-col space-y-6 my-14'>
            <ProductOverViewSection initialProducts={filteredProducts} />
        </div>
        </div>

  )
}

export default ProductFilters
