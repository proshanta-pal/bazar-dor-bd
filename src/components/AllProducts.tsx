'use client'
import { ProductTypes } from '@/types/productTypes';
import { toBengaliNumber } from '@/utils/convertNumbers';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Sorting, { SortBy } from './Sorting';
// import {Label, ListBox, Select} from "@heroui/react";

const AllProducts = ({data} : {data: ProductTypes[]}) => {
    // console.log(data);

    const [sortBy, setSortBy] = useState<SortBy>('default');

    const sortedData = [...data];

    if(sortBy === 'lowtohigh'){
        sortedData.sort((a, b) => a.today - b.today);
    } else if(sortBy === 'hightolow'){
        sortedData.sort((a, b) => b.today - a.today);
    }

    return (
        <section className='max-w-7xl mx-auto mb-4'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-2xl font-bold text-black pt-7 pb-2'>সব পণ্য</h2>
                    <p className='text-sm sm:text-lg text-gray-600 font-medium pb-3'>মোট {toBengaliNumber(data.length)} টি পণ্য দেখানো হচ্ছে</p>
                </div>

                {/* <div className='flex items-center gap-2 self-end pb-3'>
                    <label className='text-lg text-neutral-600'
                    htmlFor="sort-products">সাজান</label>

                    <Select className="w-38" placeholder='ডিফল্ট'>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="default1" textValue="default">
                                    ডিফল্ট
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="lowtohigh" textValue="low to high">
                                    দাম: কম থেকে বেশি
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="hightolow" textValue="high to low">
                                    দাম: বেশি থেকে কম 
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div> */}
                <Sorting sortBy={sortBy} onSortChange={setSortBy}/>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    sortedData.map(item => <ProductCard key={item.id} item={item}/>)
                }
            </div>
            
        </section>
    );
};

export default AllProducts;