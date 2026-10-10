import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';
import { CategoryTypes } from '@/types/categoryTypes';
import UserInfo from './UserInfo';

const Header = async () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })

    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
    const data: CategoryTypes[] = await res.json();
    // console.log(data);

    return (
        <header className='pt-2 sticky top-0 z-10 bg-white'>
            <div className='border-b-2 border-gray-200 bg-white'>
                <div className='border-b-2 border-gray-200 pb-2'>
                    <div className='flex justify-between px-4 sm:max-w-7xl sm:mx-auto'>

                        <div>
                            <Link href={'/'}
                            className='flex items-center gap-2'>
                                <span className='bg-green-700 p-3 rounded-lg'>🛒</span>

                                <div>
                                    <h1 className='text-md sm:text-2xl font-bold'>বাজার দর</h1>
                                    <span className='text-neutral-500 text-xs sm:text-sm font-medium'>{date}</span>
                                </div>
                            </Link>
                        </div>

                        <UserInfo />
                    </div>
                </div>

                <NavLinks data={data}/>
            </div>
        </header>
    );
};

export default Header;