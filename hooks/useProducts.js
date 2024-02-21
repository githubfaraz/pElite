'use client'
import useSWR from 'swr';
import ProductService from '@/services/ProductService';


type Image = {
  fileName: string;
  filePath: string;
}

export type Product = {
  _id: string;
  name: string;
  length: string;
  style: string;
  thickness: string;
  details: string;
  feeding_guidelines: string;
  general_feeding_guidelines: string[];
  nutrition_facts: string[];
  image: Image;
  extra_images: Image[];
  age_consumption: string[];
  size_consumption: string[];
};

const initialProducts: Product[] = [];

const useProducts = (initialData?: Product[]) => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('https://pets-elite-b.fly.dev/api/bully-sticks', fetcher);

    const products = data ? initialProducts.concat(...data) : [];


    return {
        products,
      }
}

export default useProducts