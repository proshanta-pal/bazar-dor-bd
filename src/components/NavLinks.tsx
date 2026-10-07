import { CategoryTypes } from '@/types/categoryTypes';
import Link from 'next/link';
import React from 'react';

const NavLinks = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    const data: CategoryTypes[] = await res.json();
    console.log(data);

    return (
        <nav className='flex gap-5 px-4 sm:max-w-7xl sm:mx-auto my-2 flex-wrap'>
            {
                data.map(item => <div key={item.id} className='hover:bg-gray-300 py-1 px-2 rounded-lg'>
                    <Link key={item.id} href={`${item.slug}`}
                    className='font-bold text-md'>
                        {item.icon} {item.nameBn}
                    </Link>
                </div>)
            }
        </nav>
    );
};

export default NavLinks;