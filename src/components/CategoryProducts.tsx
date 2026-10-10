'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Sorting, { SortBy } from '@/components/Sorting';
import { ProductTypes } from '@/types/productTypes';
import { toBengaliNumber } from '@/utils/convertNumbers';

interface CategoryProductsProps {
  data: ProductTypes[];
}

const CategoryProducts = ({ data }: CategoryProductsProps) => {
  const [sortBy, setSortBy] = useState<SortBy>('default');

  const sortedData = [...data];

  if (sortBy === 'lowtohigh') {
    sortedData.sort((a, b) => a.today - b.today);
  } else if (sortBy === 'hightolow') {
    sortedData.sort((a, b) => b.today - a.today);
  }

  return (
    <>
      <div className="flex justify-between items-center py-4">
        <p className="text-lg text-gray-600">
          মোট {toBengaliNumber(data.length)}টি পণ্য দেখানো হচ্ছে
        </p>

        <Sorting
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {sortedData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default CategoryProducts;