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

const dataCards = [
  { 
    src :"/1.jpg",
    title: " Hazards in the Workplace",
   },
  { 
    src :"/2.jpg",
    title: "Hygiene in the Workplace",
   },
  { 
    src :"/3.jpg",
    title: "Cybersecurity Fundamentals",
   },
]
export default function HealthCare() {
  
  return (
    <div className='my-8 flex flex-col w-full items-center justify-center'>
    <div className=' flex flex-col w-full items-center justify-center '>
      <h1 className='text-lg my-6 text-[#02B1BF] text-center font-semibold'>Category 1</h1>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper relative  "
      >
        {dataCards.map((item, index) => (

          
          <SwiperSlide key={index} className=' relative'>
            <Link href={`/healthcare/${index}`} className='w-full'>
            <Image
              src={item.src}
              alt="diaf"
              width={800}
              height={600}
              className=" h-full"
              priority
              key={1}
            />
            <span className='text-[#02B1BF] bg-white rounded-b-lg absolute top-0 right-0 px-4 py-1'>{index+1} of {dataCards.length}</span>
            <p className="text-md text-center w-full py-6 font-semibold absolute bottom-0 bg-white text-[#02B1BF]">{item.title}</p>
            </Link>
            
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
    <div className=' flex flex-col w-full  '>
      <h1 className='text-lg my-6 text-[#02B1BF] text-center font-semibold'>Category 2</h1>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper relative  "
      >
        {dataCards.map((item, index) => (

          
          <SwiperSlide key={index} className=' relative'>
            <Link href={`/healthcare/${index}`} className='w-full'>
            <Image
              src={item.src}
              alt="diaf"
              width={800}
              height={600}
              className=" h-full"
              priority
              key={2}
            />
            <span className='text-[#02B1BF] bg-white rounded-lg absolute top-0 right-0 px-4 py-1'>{index+1} of {dataCards.length}</span>
            <p className="text-md text-center w-full py-6 font-semibold absolute bottom-0 bg-white text-[#02B1BF]">{item.title}</p>
            </Link>
            
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
    <div className=' flex flex-col w-full  '>
      <h1 className='text-lg my-6 text-[#02B1BF] text-center font-semibold'>Category 3</h1>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper  relative  "
      >
        {dataCards.map((item, index) => (

          
          <SwiperSlide key={index} className=' relative'>
            <Link href={`/healthcare/${index}`} className='w-full'>
            <Image
              src={item.src}
              alt="diaf"
              width={800}
              height={600}
              className=" h-full"
              priority
              key={3}
            />
            <span className='text-[#02B1BF] bg-white rounded-lg absolute top-0 right-0 px-4 py-1'>{index+1} of {dataCards.length}</span>
            <p className="text-md text-center w-full py-6 font-semibold absolute bottom-0 bg-white text-[#02B1BF]">{item.title}</p>
            </Link>
            
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
    <div className=' flex flex-col w-full  '>
      <h1 className='text-lg my-6 text-[#02B1BF] text-center font-semibold'>Category 4</h1>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper  relative  "
      >
        {dataCards.map((item, index) => (

          
          <SwiperSlide key={index} className=' relative'>
            <Link href={`/healthcare/${index}`} className='w-full'>
            <Image
              src={item.src}
              alt="diaf"
              width={800}
              height={600}
              className=" h-full"
              priority
              key={4}
            />
            <span className='text-[#02B1BF] bg-white rounded-lg absolute top-0 right-0 px-4 py-1'>{index+1} of {dataCards.length}</span>
            <p className="text-md text-center w-full py-6 font-semibold absolute bottom-0 bg-white text-[#02B1BF]">{item.title}</p>
            </Link>
            
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
    </div>
  );
}
















// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// export default function HealthCare() {

//   const dataCards = [
//     { 
//       src :"/1.jpg",
//       title: " Hazards in the Workplace",
//      },
//     { 
//       src :"/2.jpg",
//       title: "Hygiene in the Workplace",
//      },
//     { 
//       src :"/3.jpg",
//       title: "Cybersecurity Fundamentals",
//      },
//   ]
//   return (
//     <div className='flex justify-center items-center flex-col py-4'>
//        <Link href="/">
//           <button className="bg-gradient-to-br px-2 rounded-lg font-semibold text-white py-2 from-[#54A15E] to-green-400 my-2">
//           Back to Home
//           </button>
//         </Link>

//         <div className='flex justify-center items-center flex-col gap-4'>
//       {dataCards.map((card) =>
      
//       <Link href='/medical/info' key={card.title} className=' shadow-md shadow-black rounded-lg relative border-black h-fit'>
//         <Image src={card.src} alt='a' width={300} height={300} className='relative'/> 
//         <p className=' text-md font-semibold flex justify-around items-center  p-3 py-6  bg-white w-full absolute bottom-0'>{card.title} <span className='flex w-10 items-center gap-1 text-lg opacity-60'>6 <Image src="/icon.jpg" alt='a' width={40} height={20} className="" /></span></p></Link> 
//     )}
//         </div>
     
//     </div>
//   )
// }




























































// {/* <div className='  w-full flex justify-center items-center flex-wrap gap-10'>
// <Link href='/medical/info'><Image src="/a.jpg" alt='a' width={300} height={300} /></Link> 
// <Link href='/medical/info'><Image src="/b.jpg" alt='a' width={300} height={300} /></Link> 
// <Link href='/medical/info'><Image src="/c.jpg" alt='a' width={300} height={300} /></Link> 
// <Link href='/medical/info'><Image src="/d.jpg" alt='a' width={300} height={300} /></Link> 
// <Link href='/medical/info'><Image src="/e.jpg" alt='a' width={300} height={300} /></Link> 
// <Link href='/medical/info'><Image src="/f.jpg" alt='a' width={300} height={300} /></Link> 
// </div> */}