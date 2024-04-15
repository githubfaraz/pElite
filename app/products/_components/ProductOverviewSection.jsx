'use client'
import React from 'react';

import  ProductList  from './ProductList';


const ProductOverview = ({ initialProducts }) => {
  // const { products} = useProducts(initialProducts);

  return (
    <div className="container">
      <ProductList products={initialProducts} />
    </div>
  );
};

export default ProductOverview;