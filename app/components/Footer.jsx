import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div
      className="w-full  bg-gray-100 pb-4 pt-4 mt-10  gap-4 border-t-2  border-[#02B1BF]  flex items-center justify-between flex-col  px-0.5 h-fit "
    >
      <div className="flex justify-between px-4 gap-2 items-center w-full ">
      <div className=" "><Image src={"/Logo-short.png"} alt="diaf" width={180} height={180} className="h-15 w-20"/>
    
    </div>
      <div className="flex  self-end items-center gap-4 text-[12px] font-semibold text-[#02B1BF]">
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Use</Link>
      </div>

  </div>
    <p className="text-[#02B1BF] text-[14px]">All Rights Reserved.©️ {(new Date().getFullYear())}</p>
    </div>
  );
}
