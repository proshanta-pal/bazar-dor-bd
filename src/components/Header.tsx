import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })

    return (
        <header className='mt-2 border-b-2 border-gray-200'>
            <div className='border-b-2 border-gray-200 pb-2'>
                <div className='flex justify-between px-4 sm:max-w-7xl sm:mx-auto'>

                    <div>
                        <Link href={'/'}
                        className='flex items-center gap-2'>
                            <span className='bg-green-800 p-3 rounded-lg'>🛒</span>

                            <div>
                                <h1 className='text-md sm:text-2xl font-bold'>বাজার দর</h1>
                                <span className='text-neutral-500 text-xs sm:text-sm font-medium'>{date}</span>
                            </div>
                        </Link>
                    </div>

                    <div className='flex gap-1 items-center'>
                        <Link href={'#'}>
                            <button className='font-bold text-sm sm:text-lg py-1 px-4 hover:bg-gray-100 rounded-lg cursor-pointer border'>সাইন ইন</button> 
                        </Link>
                        <Link href={'#'}>
                            <button className='bg-green-900 font-bold text-sm sm:text-lg text-white py-1 px-4 rounded-lg cursor-pointer'>সাইন আপ</button>
                        </Link>
                    </div>
                </div>
            </div>

            <NavLinks />
        </header>
    );
};

export default Header;