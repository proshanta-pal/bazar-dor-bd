import { ProductTypes } from '@/types/productTypes';
import { toBengaliNumber } from '@/utils/convertNumbers';
import React from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data: ProductTypes[] = await res.json();
    // console.log(data);

    return (
        <section className='border-b border-gray-200 p-2'>
            <div >
                <MarqueeText duration={15} direction='right' pauseOnHover={true}>
                    {
                        data.map(item => <div key={item.id}>
                            {
                                item.change.dir !== 'flat' ? 
                                <div className='flex items-center mx-3'>  
                                    <span>{item.image}</span>
                                    <span className='mx-2 font-medium'>{item.nameBn}</span>
                                    <span className='text-gray-600'>
                                        {
                                            item.unit === 'kg' ? `${toBengaliNumber(item.today)} টাকা/কেজি` : item.unit === 'litre' ? `${toBengaliNumber(item.today)} টাকা/লিটার` : item.unit === 'dozen' ? `${toBengaliNumber(item.today)} টাকা/ডজন` : `${toBengaliNumber(item.today)} টাকা/পিস`
                                        }
                                    </span>
                                    <span className={item.change.dir === 'up' ? 'text-red-700 flex items-center font-medium': 'text-green-700 flex items-center font-medium'}
                                    >
                                        {item.change.dir === 'up' ? (
                                            <IoMdArrowDropup />
                                        ) : (
                                            <IoMdArrowDropdown />
                                        )}

                                        {toBengaliNumber(Math.abs(item.change.pct))}%
                                    </span>
                                    
                                </div> : ''
                            }
                        </div>)
                    }
                </MarqueeText>
            </div>
        </section>
    );
};

export default Marquee;