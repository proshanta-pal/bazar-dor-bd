"use client";
import { signIn, signUp } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Separator,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const SignInPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };
    // console.log(data);

    const {data: userData, error} = await signUp.email({
      ...data,
      callbackURL: '/'
    })

    if(userData){
      toast.success('অ্যাকাউন্ট তৈরি হয়েছে! স্বাগতম');
      redirect('/');
    }
    if(error){
      toast.error('ফর্মের তথ্য ঠিক করে আবার চেষ্টা করুন।');
    }
  }

  const handleGoogleSignIn = async () => {
      await signIn.social({
        provider: 'google',
      })
    }
  
  const handleGitHubSignIn = async () => {
    await signIn.social({
      provider: 'github',
    })
  }

  return (
    <section className="min-h-screen flex justify-center">
      <div>
        <div className="flex flex-col items-center mt-10 mb-5">
          <h3 className="text-3xl font-bold">অ্যাকাউন্ট তৈরি করুন</h3>
          <p className="text-neutral-500 text-md">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <Form
          className="flex flex-col gap-4 bg-white p-5 rounded-2xl border"
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "নাম কমপক্ষে ২ অক্ষরের হতে হবে।";
              }
              return null;
            }}
          >
            <Label>নাম</Label>
            <Input placeholder="যেমন: রহিম উদ্দিন" className="focus-visible:ring-green-600 border border-neutral-200"/>
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "সঠিক ইমেইল ঠিকানা দিন।";
              }
              return null;
            }}
          >
            <Label>ইমেইল</Label>
            <Input
              placeholder="you@example.com"
              className="focus-visible:ring-green-600 border border-neutral-200"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            value={password}
            onChange={setPassword}
            validate={(value) => {
              if (value.length < 8) {
                return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।";
              }

              if (!/[A-Z]/.test(value)) {
                return "পাসওয়ার্ডে কমপক্ষে ১টি বড় হাতের অক্ষর থাকতে হবে।";
              }

              if (!/[0-9]/.test(value)) {
                return "পাসওয়ার্ডে কমপক্ষে ১টি নম্বর থাকতে হবে।";
              }

              return null;
            }}
          >
            <Label>পাসওয়ার্ড</Label>
            <Input
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="focus-visible:ring-green-600 border border-neutral-200"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            validate={(value) => {
              if (value !== password) {
                return "পাসওয়ার্ড দুটি মিলছে না।";
              }

              return null;
            }}
          >
            <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
            <Input
              placeholder="আবার লিখুন"
              className="focus-visible:ring-green-600 border border-neutral-200"
            />
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button
              type="submit"
              className="bg-green-700 py-1 w-full font-bold text-lg rounded-lg shadow-sm shadow-green-600/50"
            >
              অ্যাকাউন্ট তৈরি করুন
            </Button>
          </div>

          <div className="flex w-full items-center gap-4">
            <Separator className="flex-1 bg-gray-200" />

            <span className="text-md text-gray-500">অথবা</span>

            <Separator className="flex-1 bg-gray-200" />
          </div>

          <div className="flex gap-2 flex-col sm:flex-row">
            <Button onClick={handleGoogleSignIn}
            className="text-black px-2 py-1 border border-neutral-500 hover:border-neutral-300 rounded-lg bg-transparent hover:bg-neutral-300 hover:transition-all hover:duration-300 w-full">
              <FcGoogle />
              Google দিয়ে চালিয়ে যান
            </Button>

            <Button onClick={handleGitHubSignIn}
            className="text-black p-1 border border-neutral-500 hover:border-neutral-300 rounded-lg bg-transparent hover:bg-neutral-300 hover:transition-all hover:duration-300 w-full">
              <FaGithub />
              GitHub দিয়ে চালিয়ে যান
            </Button>
          </div>

          <div className="text-center text-lg text-neutral-600">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href={"/signin"}
              className="text-green-700 hover:text-green-800 underline hover:decoration-green-800"
            >
              সাইন ইন করুন
            </Link>
          </div>
        </Form>

        <Link
          href={"/"}
          className="flex items-center gap-1 underline decoration-neutral-600 text-neutral-600 text-lg justify-center mt-6"
        >
          <HiOutlineArrowNarrowLeft />
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </section>
  );
};

export default SignInPage;
