// 'use client'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import MainNavbar from '@/components/MainNavbar'
import Navb from '@/components/Navb'
import Navbar from '@/components/Navbar'
import ProductImages from '@/components/ProductImages'
import Image from 'next/image'
import React from 'react'
import { GetServerSideProps, GetStaticProps } from 'next'
import { Product } from '@/types/Product'
import useProduct from '@/hooks/useProduct'
import ProductDetails from '@/components/ProductDetails/ProductDetails'


export default function Page({ params }) {

  return (
    <div>
        <ProductDetails params={params} />
    </div>
  )
}

