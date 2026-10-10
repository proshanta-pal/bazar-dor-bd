import ProductDetailsCard from '@/components/ProductDetailsCard';
import ProductPriceDetailsCard from '@/components/ProductPriceDetailsCard';
import { ProductTypes } from '@/types/productTypes';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MdKeyboardArrowRight } from 'react-icons/md';


const ProductPage = async ({params} : {params: Promise<{slug: string}>}) => {
    const { slug } = await params;
    console.log(slug);

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products`);
    const products: ProductTypes[] = await res.json();
    // console.log(products);

    const product = products.find((item) => item.slug === slug);
    if (!product) notFound();
    // console.log(product);

    return (
        <section className='max-w-7xl mx-auto my-8 px-4'>
            <div className='flex gap-3 items-center'>
                <Link href={'/'} className='hover:underline text-neutral-700'>হোম</Link>
                <MdKeyboardArrowRight size={22}/>
                <Link href={`/category/${product.category}`} className='hover:underline text-neutral-700'>{product?.categoryNameBn}</Link>
                <MdKeyboardArrowRight size={22}/>
                <p className='text-neutral-700'>{product?.nameBn}</p>
            </div>
            <div>
                <ProductDetailsCard product={product} />
            </div>
            <div>
                <ProductPriceDetailsCard product={product} />
            </div>
            <Link href={`/category/${product.category}`}>
                <div className='py-2 px-3 my-5 inline-block rounded-lg font-semibold text-lg hover:bg-gray-300 hover:transition-all hover:duration-300'>{product.categoryIcon}সব {product.categoryNameBn}</div>
            </Link>
        </section>
    );
};

export default ProductPage;