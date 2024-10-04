'use client'
import React, { useEffect, useState } from 'react'
import ProductOverViewSection from './ProductOverviewSection'
import useProducts from '@/hooks/useProducts';
import Image from 'next/image';
import useSWR from 'swr';

const NilProducts = () => {
  return (
    <div className='flex flex-col mx-auto'>
      <Image alt='no_products_found' src='/no-products.jpg' className='h-3/4 w-3/4 mx-auto' height={1000} width={1000} />
      <div className='text-center text-xl'>No Products Found,Reload Page</div>
    </div>
  );
}

const ProductFilters = () => {
  const fetcher = url => fetch(url).then(res => res.json());

  const { data: items, error, isLoading } = useSWR(
    `https://pets-elite-backend-nine.vercel.app/api/bully-sticks`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000,
      refreshInterval: 0,
      refreshWhenHidden: false,
      refreshWhenOffline: false,
    }
  );

  const [filters, setFilters] = useState({
    length: [],
    thickness: [],
    style: [],
  });

  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) {
    return <div className="text-center">
      <div role="status" >
        <svg aria-hidden="true" className="inline w-8 sm:w-28 sm:h-28 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
      <div>Loading Products ...</div>
    </div>
  }

  if (error) {
    return <NilProducts />;
  }


  const handleFilterChange = (filterType, value) => {
    // Check if the value is already in the filters array.
    const newFilters = { ...filters };
    if (newFilters[filterType].includes(value)) {
      newFilters[filterType] = newFilters[filterType].filter((item) => item !== value);
    } else {
      newFilters[filterType].push(value);
    }
    setFilters(newFilters);
  };



  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const getFilteredItems = () => {
    let filteredItems = items;

    Object.keys(filters).forEach((filterType) => {
      if (filters[filterType].length > 0) {
        filteredItems = filteredItems.filter((item) => filters[filterType].includes(item[filterType]));
      }
    });

    // Apply search term filter (if search term is not empty).
    if (searchTerm) {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
    }

    return filteredItems;
  };

  const filteredItems = getFilteredItems();
  // console.log(filteredItems)

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit action
    // You can add logic here to handle the search submission if necessary
  };


  return (
    <div>
      <div className='flex lg:flex-row sm:space-x-4 flex-col space-y-2'>
        <div className='lg:w-1/4 w-full lg:mx-10 lg:my-14 mx-1 my-7'>
          <form
            value={searchTerm}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
          >
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block sm:w-full w-screen p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-orange-500 focus:border-orange-500  slate:border-orange-600 dark:placeholder-gray-400  dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Search Products" required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Search</button>
            </div>
          </form>
          {/* <SearchInput/> */}


          {/* start */}
          <div className='mt-6'>

            <h2 className='border-b-2 w-40 text-2xl font-semibold text-orange-600 border-orange-400' style={{ fontFamily: 'playfair_display' }}>By Length</h2>
            <hr />
            <div className='mt-4 space-y-4 text-xl flex flex-col'>
              {/* <label>
                        <input type="checkbox" onChange={() => handleFilterChange('length', '')} />
                        ALL
                        </label> */}
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('length', '5 inch')} />
                <h3 className='inline ml-2 font-light'>Mix of 4 & 5 inch</h3>
              </label>
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('length', '6 inch')} />
                <h3 className='inline ml-2 font-light'>6 inch</h3>
              </label>
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('length', '8 inch')} />
                <h3 className='inline ml-2 font-light'>8 inch</h3>
              </label>
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('length', '12 inch')} />
                <h3 className='inline ml-2 font-light'>12 inch</h3>
              </label>
            </div>

            <div className='mt-6'>
              <h2 className='border-b-2 w-40 text-2xl font-bold text-orange-600 border-orange-400' style={{ fontFamily: 'playfair_display' }}>By Thickness</h2>
              <hr />
              <div className='mt-4 space-y-4 text-xl flex flex-col'>
                {/* <label>
                        <input type="checkbox" onChange={() => handleFilterChange('thickness', '')} />
                        ALL
                        </label> */}
                <label>
                  <input type="checkbox" onChange={() => handleFilterChange('thickness', 'Thick')} />
                  <h3 className='inline ml-2 font-light'>Thick</h3>
                </label>
                <label >
                  <input type="checkbox" onChange={() => handleFilterChange('thickness', 'Thin')} />
                  <h3 className='inline ml-2 font-light'>Thin</h3>
                </label>
                <label>
                  <input type="checkbox" onChange={() => handleFilterChange('thickness', 'Standard')} />
                  <h3 className='inline ml-2 font-light'>Standard</h3>
                </label>
                <label>
                  <input type="checkbox" onChange={() => handleFilterChange('thickness', 'Jumbo')} />
                  <h3 className='inline ml-2 font-light'>Jumbo</h3>
                </label>
              </div>
            </div>

            <div className='mt-6'>
              <h2 className='border-b-2 w-40 text-2xl font-semibold text-orange-600 border-orange-400' style={{ fontFamily: 'inter' }}>By Style</h2>
              <hr />
              <div className='mt-4 space-y-4 text-xl font-extralight flex flex-col'>
                {/* <label>
                        <input type="checkbox" onChange={() => handleFilterChange('style', '')} />
                        ALL
                        </label> */}
                <label >
                  <input type="checkbox" onChange={() => handleFilterChange('style', 'straight')} />
                  <h3 className='inline ml-2 font-light'>Straight</h3>
                </label>
                <label>
                  <input type="checkbox" onChange={() => handleFilterChange('style', 'braided')} />
                  <h3 className='inline ml-2 font-light'>Braided</h3>
                </label>
              </div>
            </div>
          </div>
          {/* start */}

        </div>
        <div className='flex flex-col space-y-6 my-14'>
          <ProductOverViewSection initialProducts={filteredItems} />
        </div>

      </div>
    </div>
  );
}

export default ProductFilters
