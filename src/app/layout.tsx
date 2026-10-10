import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});


export const metadata: Metadata = {
  title: "বাজার দর — আজকের দাঁড়ির দাম",
  description: "Layout page for bazar dor application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${notoSerifBengali.className} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <Marquee />
        <main className='bg-[#F0F5F0]'>
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
