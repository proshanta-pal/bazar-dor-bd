import Banner from '@/components/Banner';
import PriceHike from '@/components/PriceHike';
import PriceDrop from '@/components/PriceDrop';
import { ProductTypes } from '@/types/productTypes';
import React from 'react';

const Home = async () => {

  const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
  const data: ProductTypes[] = await res.json();
  // console.log(data.sort((a, b) => b.change.pct - a.change.pct));

  return (
    <div className='px-4'>
      <Banner />
      <PriceHike data={data}/>
      <PriceDrop data={data}/>
    </div>
  );
};

export default Home;