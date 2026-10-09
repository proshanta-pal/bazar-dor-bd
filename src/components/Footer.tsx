import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full max-w-7xl mx-auto p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-neutral-400 font-light text-sm sm:text-lg md:text-xl">
                    বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </div>

                <div className="text-neutral-400 font-light text-sm sm:text-lg md:text-xl sm:text-right">
                    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                </div>
            </div>
        </footer>
    );
};

export default Footer; 