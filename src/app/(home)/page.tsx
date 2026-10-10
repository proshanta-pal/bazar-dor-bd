import Banner from '@/components/Banner';
import PriceHike from '@/components/PriceHike';
import PriceDrop from '@/components/PriceDrop';
import { ProductTypes } from '@/types/productTypes';
import React from 'react';
import AllProducts from '@/components/AllProducts';

const Home = async () => {

  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
  const data: ProductTypes[] = await res.json();

  return (
    <div className='px-4'>
      <Banner />
      <PriceHike data={data}/>
      <PriceDrop data={data}/>
      <AllProducts data={data}/>
    </div>
  );
};

export default Home;