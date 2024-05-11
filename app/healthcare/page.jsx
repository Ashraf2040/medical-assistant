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

export const dataCards = [  

  {
    topic:"General Health and Safety During Hajj",

  sources :[
    { 
      src :"/1.jpg",
      title: "Health Tips for Pilgrims",
      cards:["/health-tips/1card.jpg","/health-tips/2card.jpg","/health-tips/3card.jpg","/health-tips/4card.jpg","/health-tips/5card.jpg","/health-tips/6card.jpg","/health-tips/7card.jpg","/health-tips/8card.jpg","/health-tips/9card.jpg","/health-tips/10card.jpg","/health-tips/11card.jpg","/health-tips/12card.jpg","/health-tips/13card.jpg","/health-tips/14card.jpg","/health-tips/15card.jpg","/health-tips/16card.jpg","/health-tips/17card.jpg"]

     },
    { 
      src :"/2.jpg",
      title: "Health Tips for using FaceMasks",
     },
    { 
      src :"/3.jpg",
      title: "Physical Fitness Preparation for Hajj",
     },
    { 
      src :"/4.jpg",
      title: "Managing Heat and Hydration during Hajj",
     },
   
  ]},
  {
    topic:"Environmental Safety During Hajj",

  sources :[
    { 
      src :"/1.jpg",
      title: " Environment in Islam",
     },
    { 
      src :"/2.jpg",
      title: "Environmental Safety During Hajj ",
     },
    { 
      src :"/3.jpg",
      title: " Housing and Sustenance Environment",
     },
    { 
      src :"/3.jpg",
      title: "Environment of Transportation and Mobility",
     },
    { 
      src :"/3.jpg",
      title: "Environment of the Haram and the Sacred Sites",
     },
    { 
      src :"/3.jpg",
      title: "Energy and Environment",
     },
    { 
      src :"/3.jpg",
      title: "Environmental Emergencies",
     },
    { 
      src :"/3.jpg",
      title: "Preventing Respiratory Infections During Hajj",
     },
    { 
      src :"/3.jpg",
      title: "Maintaining Digestive Health During Hajj ",
     },
   
  ]},
  {
    topic:"Injury Prevention and Management ",

  sources :[
    { 
      src :"/1.jpg",
      title: "Maintaining Skin Health and Preventing Abrasions During Hajj",
     },
    { 
      src :"/2.jpg",
      title: "Safe Shaving Practices During Hajj",
     },
    { 
      src :"/3.jpg",
      title: "Avoiding Muscle Stress During Hajj",
     },
    { 
      src :"/3.jpg",
      title: "Managing Bruises During Hajj ",
     },
    { 
      src :"/3.jpg",
      title: "Managing Fractures During Hajj",
     },
    { 
      src :"/3.jpg",
      title: "Managing Wounds During Hajj",
     },
    { 
      src :"/3.jpg",
      title: "Managing Nosebleeds During Hajj",
     },
    { 
      src :"/3.jpg",
      title: "Managing Hypoglycemia During Hajj",
     },
   
   
  ]},
  {
    topic:"Specific Health Conditions During Hajj",

  sources :[
    { 
      src :"/1.jpg",
      title: "Diabetic Pilgrims Performing Hajj",
     },
    { 
      src :"/2.jpg",
      title: "Asthmatic Pilgrims Performing Hajj",
     },
    { 
      src :"/3.jpg",
      title: "Allergic Patients Performing Hajj",
     },
    { 
      src :"/3.jpg",
      title: "Kidney Patients Performing Hajj",
     },
    { 
      src :"/3.jpg",
      title: "Managing Epilepsy During Hajj",
     },
   
  ]},
  {
    topic:"Women's Health During Hajj",

  sources :[
    { 
      src :"/1.jpg",
      title: "Health Tips for Women",
     },
    { 
      src :"/2.jpg",
      title: "Health Tips for the Pregnant Women",
     },
    { 
      src :"/3.jpg",
      title: "When Pregnant Women Should Postpone Hajj?",
     },
    { 
      src :"/3.jpg",
      title: "Infants and Children during the Hajj",
     },
   
  ]},

  
 ]

 
export default function HealthCare() {
  const [currentSwiper, setCurrentSwiper] = useState(0);
  console.log(currentSwiper)
  return (
   
    <div className=' my-8 flex flex-col w-full items-center justify-center  '>

    

      {dataCards.map((item, index) => (
        <div key={item.topic} className=' flex flex-col w-full items-center justify-center'> 
          <h1 className='text-lg  mx-4   rounded-md  text-[#02B1BF]  my-6  p-1 px-2 text-center font-bold'>
          {item.topic}
        </h1>
        
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        onClick={() => {setCurrentSwiper(index)}}
        className="mySwiper relative rounded-[18px] shadow-[0_0_10px_#dddd] w-full " 
      >
        
        {item.sources.map((value, index) => (

         
          <SwiperSlide key={index} className='flex justify-center items-center w-full '>
            <Link href={`/healthcare/${value.title.replace(/\s+/g,'-') +currentSwiper}`} className='w-full rounded-[18px]'>
            <Image
      src={value.src}
      alt={value.title}
      width={800}
      height={600}
      className=" h-full rounded-[18px]"
      style={{ width: '100%', height: 'auto' }}
      priority
      key={1}
    />
            <span className='text-[#02B1BF] bg-white rounded-b-lg absolute top-0 right-0 px-4 text-[18px] py-1'>{index+1} of {item.sources.length}</span>
            <p className="  text-center w-full py-4 text-[18px]  absolute bottom-0 bg-white text-black font-semibold ">{value.title}</p>
            </Link>
            
          </SwiperSlide>) )}
       
      </Swiper>
        
        
        </div>
          
      ))}

      </div>

      
   
      

   
    
  );
}