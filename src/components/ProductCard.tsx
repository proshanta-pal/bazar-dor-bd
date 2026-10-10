
import { ProductTypes } from '@/types/productTypes';
import { toBengaliNumber } from '@/utils/convertNumbers';
import Link from 'next/link';
import React from 'react';
import { GrFormSubtract } from 'react-icons/gr';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';


const ProductCard = ({item}: {item: ProductTypes}) => {
    return (
        <Link href={`/product/${item.slug}`} className='hover:border hover:border-green-600 hover:rounded-xl hover:shadow-md hover:transition-all hover:duration-100'>
            <div className='border border-gray-200 rounded-xl bg-white p-4'>

                <div className='flex items-center gap-2'>
                    <div className='p-4 bg-[#F0F5F0] inline-block rounded-xl text-3xl'>{item.image}</div>
                    <div>
                        <h2 className='text-xl font-bold'>{item.nameBn}</h2>
                        <p className='text-gray-600'>প্রতি কেজি</p>
                    </div>
                </div>

                <div className='flex justify-between mt-3'>
                    <div> 
                        <p className='text-lg text-gray-600'>আজকের দাম</p>
                        <h3><span className='font-bold text-xl'>{toBengaliNumber(item.today)} </span>টাকা</h3>
                    </div>

                    <span className={`${item.change.dir === 'up' ? 'text-red-700 flex items-center font-medium': item.change.dir === 'flat' ? 'text-black font-medium flex items-center' : 'text-green-700 flex items-center font-medium'} bg-[#F0F5F0] rounded-xl self-end px-2
                    `}>
                        {item.change.dir === 'up' ? (
                            <IoMdArrowDropup />
                        ) : item.change.dir === 'flat' ? (
                            <GrFormSubtract />
                        ) : (
                            <IoMdArrowDropdown />
                        )}

                        {toBengaliNumber(Math.abs(item.change.pct))}%
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;