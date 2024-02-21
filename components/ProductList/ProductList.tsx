
import ProductCard from  '../ProductCard/ProductCard';

import styles from './ProductList.module.css';
import { Product, Products } from '@/types/Product';

interface Props {
  products: Products;
}

const ProductList = ({ products }: Props) => {
  return (
    <div className={styles.productGrid} aria-label="Product list">
      {products.map((product: Product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductList;