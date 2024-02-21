'use client'
import useSWR from 'swr';
import ProductService from '@/services/ProductService';
// import { Product } from '@/types';

// const initialProducts: Product[] = [];



const useProduct = (initialData: string) => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data} = useSWR(`https://pets-elite-b.fly.dev/api/bully-sticks/${initialData}`, fetcher);

    const product = data;


    return {
        product,
    }
}

export default useProduct;