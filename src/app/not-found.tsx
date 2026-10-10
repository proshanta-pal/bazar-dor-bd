import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <section className='min-h-screen max-w-7xl mx-auto'>
            <div className='flex flex-col items-center mt-16 space-y-3'>
                <div className='text-6xl'>🧺</div>
                <h1 className='text-3xl font-bold '>পাতাটি খুঁজে পাওয়া যায়নি</h1>
                <p className='text-lg text-neutral-500 text-center'>আপনি যে পণ্য বা পাতাটি খুঁজছেন সেটি সরানো হয়েছে বা কখনো ছিল না।</p>
                <Link href={'/'} className='bg-green-700 py-2 px-4 text-white font-bold text-lg rounded-xl'>
                    হোম পেজে যান
                </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;