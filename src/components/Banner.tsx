import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })

    return (
        <section className='border border-gray-200 shadow-sm max-w-7xl mx-auto rounded-3xl py-10 px-7 my-6 bg-white'>
            <div className='flex flex-col sm:flex-row justify-between sm:items-center'>
                <div className='space-y-3 sm:w-1/2'>
                    <span className='bg-green-100 text-green-800 font-medium text-md px-2 py-1 rounded-full'>{date}</span>
                    <h1 className='text-5xl font-bold mt-5'>আজকের বাজারের দাম এক নজরে</h1>
                    <p className='text-xl text-gray-600'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                    <Link href={'#সব-পণ্য'}>
                        <button className='bg-green-700 font-bold text-lg text-white py-1 px-4 rounded-lg cursor-pointer'>সব পণ্য দেখুন</button>
                    </Link>
                </div>

                <div>
                    <Image src={'/bazar-hero.png'} width={400} height={400} alt='Hero Image'/>
                </div>
            </div>
        </section>
    );
};

export default Banner;