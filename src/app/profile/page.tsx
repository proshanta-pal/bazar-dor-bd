'use client'
import { signOut, updateUser, useSession } from '@/lib/auth-client';
import { Button, Input, Label } from '@heroui/react';
import { useState } from 'react';

const ProfilePage = () => {
    const [show, setShow] = useState<boolean>(false);

    const {data: session} = useSession();
    const user = session?.user;

    const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData.entries());

        const {data, error} = await updateUser({
            ...updatedData
        })
    }

    const handleSignoutProfile = async () => {
        await signOut();
    }


    return (
        <section className='max-w-lvh mx-auto mt-10 min-h-screen px-4'>
            <div className='mb-5'>
                <h2 className='text-3xl font-bold'>আমার প্রোফাইল</h2>
                <p className='text-md text-neutral-600'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>

            <div className='flex gap-3 flex-col sm:flex-row justify-between items-center bg-white p-5 rounded-2xl mb-8 border'>

                <div className='flex gap-4 sm:gap-3 flex-col sm:flex-row'>
                    <div className="bg-green-700 px-8 font-semibold text-lg rounded-2xl text-white flex justify-center sm:items-center">{user?.name.toLowerCase()[0]}</div>
                    <div>
                        <h3 className='text-lg font-bold'>{user?.name}</h3>
                        <p className='text-neutral-600'>{user?.email}</p>
                    </div>
                </div>

                <Button onClick={handleSignoutProfile} 
                className='text-red-600 border border-red-600 font-bold hover:bg-red-600 hover:text-white bg-transparent rounded-lg hover:transition-all hover:duration-300'>
                    ↩︎ সাইন আউট
                </Button>
            </div>

            <div className='bg-white p-5 rounded-2xl border'>
                <h3 className='text-2xl font-bold my-3'>নাম হালনাগাদ করুন</h3>
                <form onSubmit={handleUpdateProfile}
                className='flex flex-col gap-1'>
                    <Label className='font-medium text-xl'>নাম</Label>
                    <Input aria-label="Name" name="name"
                    placeholder="যেমন: রহিম উদ্দিন" 
                    className="w-full border border-neutral-300 focus-visible:ring-green-600"/>
                    <Button type='submit'
                    className='bg-green-700 mt-5 rounded-lg text-lg font-bold'>
                        নাম হালনাগাদ করুন
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default ProfilePage;