import { ProductTypes } from '@/types/productTypes';
import ProductCard from './ProductCard';
import { IoMdArrowDropdown } from 'react-icons/io';

const PriceDrop = async ({data} : {data: ProductTypes[]}) => {
    
    // console.log(data);
    const topProducts = [...data].sort((a, b) => a.change.pct - b.change.pct);


    return (
        <section className='max-w-7xl mx-auto mb-4'> 
            <h2 className='text-2xl font-bold flex items-center text-green-700 pt-7 pb-4'><IoMdArrowDropdown /> <span className='text-black'>আজ দাম কমেছে</span></h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    topProducts.slice(0, 6).map(item => <ProductCard key={item.id} item={item}/>)
                }
            </div>
        </section>
    );
};

export default PriceDrop;