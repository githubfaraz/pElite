
import ProductCard from  '../ProductCard/ProductCard';

import styles from './ProductList.module.css';
import { Product, Products } from '@/types/Product';



const ProductList = ({ products }) => {
  return (
    <div className={styles.productGrid} aria-label="Product list">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductList;