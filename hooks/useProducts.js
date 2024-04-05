'use client'
import useSWR from 'swr';




const initialProducts = [];

const useProducts = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('https://pets-elite-backend-wvj4.vercel.app/api/bully-sticks', fetcher);

    const products = data ? initialProducts.concat(...data) : [];


    return {
        products,
      }
}

export default useProducts