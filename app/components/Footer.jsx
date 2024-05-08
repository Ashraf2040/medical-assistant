import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div
      className="w-full  bg-gray-100 py-2  gap-4  flex items-center justify-between flex-col  px-6 h-fit "
    >
      <div className="flex w-[90%] justify-between py-4 font-semibold text-[#02B1BF]">
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Use</Link>
      </div>
    
    </div>
  );
}
