"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css'

// import required modules
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import dataCards from '../data/dataCards'


 
export default function HealthCare() {
  const [currentSwiper, setCurrentSwiper] = useState(0);
  console.log(currentSwiper)
  return (
   
    <div className=' my-8 px-2 gap-4 flex flex-col w-full items-center justify-center   '>

    

      {dataCards.map((item, index) => (
        <div key={item.topic} className='  flex flex-col w-full items-center justify-center shadow-xl rounded-md pb-4'> 
          <h1 className='text-lg  mx-2     text-[#085f63]  my-6 b px-3   p-2 text-center font-bold'>
          {item.topic}
        </h1>
        
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        onClick={() => {setCurrentSwiper(index)}}
        className="mySwiper relative rounded-[18px]  w-full " 
      >
        
        {item.sources.map((value, index) => (

         
          <SwiperSlide key={index} className='flex justify-center items-center w-full  ring-[3px] ring-neutral-200 '>
            <Link href={`/healthcare/${value.title.replace(/\s+/g,'-') +currentSwiper}`} className='w-full rounded-[18px]'>
            <Image
      src={value.src}
      alt={value.title}
      width={800}
      height={800}
      className=" h-full w-full"
      
      priority
      key={1}
    />
            <span className='text-[#02B1BF] bg-white rounded-b-lg absolute top-0 right-0 px-4 text-[18px] py-1'>{index+1} of {item.sources.length}</span>
            <p className="  text-center w-full py-4 text-[18px]  absolute bottom-0  text-[#085f63]   font-bold  bg-white z-20 ">{value.title}</p>
            </Link>
            
          </SwiperSlide>) )}
       
      </Swiper>
        
        
        </div>
          
      ))}

      </div>

      
   
      

   
    
  );
}