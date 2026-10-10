'use client'
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { ListBox, Select } from "@heroui/react";
import { redirect } from "next/navigation";

const UserInfo = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const handleSignout = async () => {
    await signOut();
  }

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-3 hover:bg-neutral-300 p-1 hover:transition-all hover:duration-300 rounded-xl cursor-pointer">
          <div className="bg-green-700 px-4 font-semibold py-1 text-md rounded-2xl text-white">{user?.name.toLowerCase()[0]}</div>
          <Select
            className="w-35"
            placeholder={user?.name}
            variant="primary"
          >
            
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>

              <div className="p-3 text-neutral-500">
                <h3>{user?.name}</h3>
                <p>{user?.email}</p>
              </div>

              <ListBox onAction={(key) => {
                if(key === 'signout') {
                    void handleSignout();
                }
                if(key === 'profile'){
                  redirect('/profile')
                }
              }}>
                <ListBox.Item id="profile" textValue="profile">
                  👤 আমার প্রোফাইল
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="signout" textValue="signout" className="text-red-600">
                    ↩︎ সাইন আউট
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>

            </Select.Popover>
          </Select>
        </div>
      ) : (
        <div className="flex gap-1 items-center">
          <Link href={"/signin"} 
          className="font-bold text-sm sm:text-lg py-1 px-4 hover:bg-gray-100 rounded-lg cursor-pointer border">
              সাইন ইন
          </Link>
          
          <Link href={"/signup"}
          className="bg-green-700 font-bold text-sm sm:text-lg text-white py-1 px-4 rounded-lg cursor-pointer">
              সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
