'use client'
import { CategoryTypes } from '@/types/categoryTypes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({data} : {data: CategoryTypes[]}) => {
    
    const pathname = usePathname();
    console.log(pathname);

    return (
        <nav className='flex gap-5 px-4 sm:max-w-7xl sm:mx-auto my-2 flex-wrap'>
            {
                data.map(item => <div key={item.id} className='py-1'>
                    <Link key={item.id} href={`/category/${item.slug}`}
                    className={`font-bold text-md ${pathname === `/category/${item.slug}` ? 'bg-green-700 text-white py-1 px-2 rounded-lg' : 'hover:bg-gray-300  rounded-lg py-1 px-2'}`}>
                        {item.icon} {item.nameBn}
                    </Link>
                </div>)
            }
        </nav>
    );
};

export default NavLinks;