import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div
      className="w-full  bg-gray-100 pb-2 pt-2 mt-10  border-t-2  border-[#02B1BF]  flex items-center   h-fit "
    >
      <div className="flex justify-between px-4 gap-2 items-center w-full  ">
      <div className=" "><Image src={"/Logo-short.png"} alt="diaf" width={180} height={180} className="h-15 w-20"/>
    
    </div>
     <div className="flex flex-col items-center justify-center gap-2"> 
      <div className="flex  self-end items-center gap-4 text-[13px] font-semibold  text-[#02B1BF]">
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Use</Link>
      </div>
      <p className="text-[#02B1BF] text-[13px]">All Rights Reserved.©️ {(new Date().getFullYear())}</p>
  </div>
  </div>
    
    </div>
  );
}
