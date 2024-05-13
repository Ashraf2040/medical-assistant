import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {

  const currentLanguage = useSelector((state) => state.language.currentLanguage);


  const footerItems =
    {
      en:{
        about :"About Us",
        privacy :"Privacy Policy",
        terms :"Terms of Use",
      },
      ar:{
        about :"من نحن",
        privacy :"سياسة الخصوصية",
        terms :"شروط الاستخدام",
      },
      fr:{
        about :"A propos de nous",
        privacy :"Politique de confidentialité",
        terms :"Conditions d'utilisation",
      },
      it:{
        about :"A proposito di noi",
        privacy :"Informativa sulla privacy",
        terms :"Termini di utilizzo",
      }
      
    }
   

  const  copyRights={
      en:"All Rights Reserved.©️ ",
      ar:"كل الحقوق محفوظة.©️ ",
      fr:"Toutes les droits sont réservés.©️ ",
      it:"Tutti i diritti riservati.©️ ",
    }
  return (
    <div
      className="w-full  bg-gray-100 pb-2 pt-2   border-t-2  border-[#02B1BF]  flex items-center   h-fit "
    >
      <div className="flex justify-between px-4 gap-2 items-center w-full  ">
      <div className=" "><Image src={"/Logo-short.png"} alt="diaf" width={180} height={180} className="h-15 w-20"/>
    
    </div>
     <div className="flex flex-col items-center justify-center gap-2"> 
      <div className="flex  self-end items-center gap-4 text-[13px] font-semibold  text-[#02B1BF]">
        <Link href="/about">{footerItems[currentLanguage].about}</Link>
        <Link href="/privacy">{footerItems[currentLanguage].privacy}</Link>
        <Link href="/terms">{footerItems[currentLanguage].terms}</Link>
      </div>
      <p className="text-[#02B1BF] text-[13px]">{copyRights[currentLanguage]}{new Date().getFullYear()}</p>
  </div>
  </div>
    
    </div>
  );
}
