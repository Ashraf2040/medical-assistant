import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div
      className="w-full  bg-gray-100 pb-4 pt-2 mt-10  gap-2 border-t-2  border-[#02B1BF]  flex items-center justify-between flex-col  px-4 h-fit "
    >
      <div className="flex w-[90%] justify-between  font-semibold text-[#02B1BF]">
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Use</Link>
      </div>

    <div className="flex justify-between px-2 items-center w-full"><Image src={"/Logo-short.png"} alt="diaf" width={180} height={180} className="h-15 w-20"/>
    <p className="text-[#02B1BF] self-end">All Rights Reserved.©️ {(new Date().getFullYear())}</p>
    </div>
    
    </div>
  );
}
