import ProductCard from '@/components/ProductCard';
import { ProductTypes } from '@/types/productTypes';
import { toBengaliNumber } from '@/utils/convertNumbers';
import React from 'react';

const CategoryPage = async ({params} : {params: Promise<{categoryName: string}>}) => {
    const {categoryName} = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${categoryName}`);
    const categoriesData: ProductTypes[] = await res.json();
    console.log(categoriesData);

    return (
        <section className='min-h-screen p-4 sm:p-5'>
            <div className='max-w-7xl mx-auto pb-4 mb-10'>
                <div className='bg-white px-3 py-5 rounded-2xl mt-8 mb-5 flex gap-3 items-center'>
                    <div className='text-4xl'>{categoriesData[0].categoryIcon}</div>
                    <div>
                        <h3 className='text-3xl font-bold'>{categoriesData[0].categoryNameBn}</h3>
                        <p className='text-gray-500 text-lg'>{toBengaliNumber(categoriesData.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>

                <div>
                    <div className='flex justify-between py-4'>
                        <p className='text-lg text-gray-600'>মোট {toBengaliNumber(categoriesData.length)}টি পণ্য দেখানো হচ্ছে</p>
                        <div>
                            hello
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                    {
                        categoriesData.map(item => <ProductCard key={item.id} item={item}/>)
                    }
                </div>
            </div>


        </section>
    );
};

export default CategoryPage;