'use client'
import React from 'react';

import  ProductList  from './ProductList';


const ProductOverview = ({ initialProducts }) => {
  // const { products} = useProducts(initialProducts);

//   const showLoadMore = !isLoadingMore && !isReachingEnd;

  return (
    <div className="container">
      {/* <Heading>Product Overview</Heading> */}

      <ProductList products={initialProducts} />

    </div>
  );
};

export default ProductOverview;