'use client'
import React from 'react';

import  ProductList  from '@/components/ProductList/ProductList';
// import { Spinner, Button, Heading } from '@/components/ui';
import useProducts from '@/hooks/useProducts';
import { Product } from '@/types/Product';
// import { colors } from '@/utils/theme';

import styles from './ProductOverviewSection.module.css';

interface Props {
  initialProducts: Product[];
}

const ProductOverview = ({ initialProducts }: Props) => {
  // const { products} = useProducts(initialProducts);

//   const showLoadMore = !isLoadingMore && !isReachingEnd;

  return (
    <div className={styles.container}>
      {/* <Heading>Product Overview</Heading> */}

      <ProductList products={initialProducts} />

    </div>
  );
};

export default ProductOverview;