
"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './styles.css';

// import required modules
import { EffectCreative, } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';


export default function TopicInfo({params}) {

 const [currentIndex, setCurrentIndex] = useState(0);
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
  
  return (
    <div className='flex flex-col bg-gray-100 h-screen      items-center w-full  border-b-2 border-white  pt-8'> 
    <div className='flex  items-center gap-4  justify-center  '>
    <Link href="/healthcare" className='text-[#02B1BF]'>
     
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>


      </Link>
    <h1 className='text-2xl   text-[#02B1BF] text w-fit  font-bold   rounded-lg '>{dataCards[params.id].title}</h1>
    </div>
   
   
    <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="swiper min-h-[82%] min-w-[95%]"
        onSlideChange={(e) => {
          const activeIndex = e.activeIndex;
          setCurrentIndex(activeIndex);
        }}
      >
     
     

     {images.map((image, index) => 

   
     
       <SwiperSlide key={index} className=' '  >
         <Image src={image}  alt="diaf"   className="object-cover h-full "    priority fill  />
         
       </SwiperSlide>
      
      
       
     )}
        
      </Swiper>

      <p className='font-semibold   border-gray-400  rounded-[15px] text-[#02B1BF] p-4 py-2 mt-6'> {`${currentIndex+1} of ${images.length} `}</p>
      
     
    </div>
  );
}









const images = ["/sy.jpg","/2.jpg","/3.jpg","/a.jpg","/b.jpg" ,"/c.jpg","/d.jpg","/e.jpg","/f.jpg" ,"/38.png","/39.png"];












{/* <SwiperSlide>
          
          <Image src="/a.jpg" alt="diaf"   className="w-full" fill  />
          
          </SwiperSlide>
        <SwiperSlide>
          
          <Image src="/b.jpg" alt="diaf"   className="w-full" fill  />
          
          </SwiperSlide> */}
        {/* <SwiperSlide>
          
          <Image src="/c.jpg" alt="diaf"   className="w-full" fill  />
          
          </SwiperSlide>
        <SwiperSlide>
          
          <Image src="/d.jpg" alt="diaf"   className="w-full" fill />
          
          </SwiperSlide>
        <SwiperSlide>
          
          <Image src="/44.png" alt="diaf"   className="w-full" fill  />
          
          </SwiperSlide>
        <SwiperSlide>
          
          <Image src="/38.png" alt="diaf"   className="w-full" fill  />
          
          </SwiperSlide>
        <SwiperSlide>
          
          <Image src="/39.png" alt="diaf"   className="w-full" fill  />
          
          </SwiperSlide>
        <SwiperSlide>
          
          <Image src="/43.png" alt="diaf"   className="w-full" fill  />
          
          </SwiperSlide>
        <SwiperSlide>
          
          <Image src="/44.png" alt="diaf"   className="w-full" fill  />
          
          </SwiperSlide> */}
      

































































{/* <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper4"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-125%', 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ['125%', 0, -800],
            rotate: [0, 0, 90],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper5"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper6"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}







// "use client"

// import Link from 'next/link'

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';
// import Image from 'next/image';
// export default function InfoPage({params}) {
 
//       return (
//         <div className='px-4 flex flex-col  '>
//           <Link href="/healthcare">
//           <button className="bg-gradient-to-br px-2 rounded-lg font-semibold text-white py-2 from-[#54A15E] to-green-400 my-2">
//           Back {params.id}
//           </button>
//         </Link>
//           <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-4/5">
//             <SwiperSlide><Image src="/a.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
//             <SwiperSlide><Image src="/b.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
//             <SwiperSlide><Image src="/c.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
//             <SwiperSlide><Image src="/d.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
//             <SwiperSlide><Image src="/e.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
//             <SwiperSlide><Image src="/f.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
         
//           </Swiper>
//         </div>
//       );
//     }
 














































{/* <div className='p-8'>
<h1 className='bg-black font-bold py-2 px-8 text-center text-white'>HealthCare Title Info</h1>
<p className='my-8 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, porro, quas dolorem pariatur deserunt quo culpa molestiae perspiciatis ratione, explicabo iusto sapiente sunt odio. Quae modi adipisci voluptates doloribus accusantium voluptate, eveniet odio ab error dolor quia, consequatur assumenda enim minima velit aliquam. Nihil, rem voluptates ea perferendis est magnam!</p>
<Link href="/medical"><button className='bg-black font-bold py-2 px-8 text-center rounded-lg text-white'>Back to Cards</button></Link>
</div> */}
 {/* <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}