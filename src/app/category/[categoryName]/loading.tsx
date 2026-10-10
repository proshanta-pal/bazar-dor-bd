import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="rounded-[22px] border border-[#dfe6df] bg-[#fafcfb] p-5 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="h-15 w-15 shrink-0 rounded-2xl bg-[#e1e7e1]" />

        <div className="flex flex-col gap-2">
          <div className="h-5 w-35 max-w-full rounded-full bg-[#e1e7e1]" />
          <div className="h-4 w-20 rounded-full bg-[#e1e7e1]" />
        </div>
      </div>

      <div className="mt-4 h-4 w-18 rounded-full bg-[#e1e7e1]" />

      <div className="mt-2 flex items-center justify-between">
        <div className="h-8 w-30 rounded-full bg-[#e1e7e1]" />
        <div className="h-8 w-18 rounded-full bg-[#e1e7e1]" />
      </div>
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <section className='max-w-7xl mx-auto'>
        <div className="min-h-screen bg-[#f0f5f0] p-5">
        <div className="mb-8 h-30 animate-pulse rounded-[22px] bg-[#e1e7e1]" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
            ))}
        </div>
        </div>
    </section>
  );
};

export default LoadingSkeleton;