import { ProductTypes } from '@/types/productTypes';
import { toBengaliNumber } from '@/utils/convertNumbers';
import { GrFormSubtract } from 'react-icons/gr';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const ProductDetailsCard = ({product}: {product: ProductTypes}) => {
    return (
        <section className='max-w-7xl mx-auto my-5'>
            <div className='bg-white p-5 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between rounded-2xl border border-gray-300'>
                <div className='flex gap-3 items-center'>
                    <div className='bg-[#F0F5F0] text-4xl h-30 px-6 rounded-xl flex items-center'>{product.image}</div>
                    <div className=''>
                        <h2 className='text-4xl font-bold '>{product.nameBn}</h2>
                        <p className='text-gray-700 font-light'>প্রতি কেজি﹒{product.categoryNameBn}</p>
                        <p className='text-gray-600'>গতকালের তুলনায় আজ দাম <b>বেড়েছে</b> {toBengaliNumber(product.change.pct)}%</p>
                    </div>
                </div>

                <div className='bg-[#F0F5F0] rounded-2xl px-6 py-3 flex flex-col items-center'>
                    <p className='text-gray-700'>আজকের দাম</p>
                    <h3 className='text-4xl font-bold'>{toBengaliNumber(product.today)}</h3>
                    <p className='text-gray-700'>টাকা / কেজি</p>
                    
                    <span className={`${product.change.dir === 'up' ? 'text-red-700 flex items-center font-medium': product.change.dir === 'flat' ? 'text-black font-medium flex items-center' : 'text-green-700 flex items-center font-medium'} rounded-xl self-end px-2
                    `}>
                        {product.change.dir === 'up' ? (
                            <IoMdArrowDropup />
                        ) : product.change.dir === 'flat' ? (
                            <GrFormSubtract />
                        ) : (
                            <IoMdArrowDropdown />
                        )}

                        {toBengaliNumber(Math.abs(product.change.pct))}%
                    </span>
                </div>

            </div>
        </section>
    );
};

export default ProductDetailsCard;