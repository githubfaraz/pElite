'use client'
import useSWR from 'swr';
// import { Product } from '@/types';

// const initialProducts: Product[] = [];



const useProduct = (initialData) => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data } = useSWR(`https://pets-elite-backend-nine.vercel.app/api/bully-sticks/${initialData}`, fetcher);

    const product = data;


    return {
        product,
    }
}

export default useProduct;