
import ProductCard from  './ProductCard';
import Image from 'next/image';

const NilProducts = () => {
  return(
    <div className='flex flex-col mx-auto'>
      <Image alt='no_products_found' src='/no-products.jpg' className='h-full w-full mx-auto' height={900} width={600} />
      <div className='text-center text-xl'>No Products Found</div>
    </div>
  );
}



const ProductList = ({ products }) => {
  if (!products.length) return <NilProducts/>;

  return (
    <div className="productGrid" aria-label="Product list">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductList;