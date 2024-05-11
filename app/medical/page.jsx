"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Map3 from '../components/Map3'
import RatingDialog from '../components/RatingDialog'
import GlobalApies from '../services/GlobalApies'
import axios from 'axios'

import Modal2 from '../components/Modal2'
export default function MedicalLocation() {
  const [modelOpened,setModelOpened]=useState(false)
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)

  

 useEffect(()=>{

  axios.get("/api/nearby").then((response)=>{

    console.log(response.data)
  })
 },[])
 useEffect(() => {
  setTimeout(() => {
   setModelOpened(true)
    }, 15000);// Code to execute goes here
},[]);
//  useEffect(()=>{

//     navigator.geolocation.getCurrentPosition(function(position) {
//       console.log("Latitude is :", position.coords.latitude);
//       console.log("Longitude is :", position.coords.longitude);
//       setLat(position.coords.latitude)
//       setLng(position.coords.longitude)
//       })
    
//   getNearByPlace()
//  },[])


  return (
    <div className=' py-2 w-full h-screen   '>
  
  {/* <Map currentLat={lat} currentLng={lng}/> */}
  {/* asdsad */}
  {/* <Maps2 /> */}
  {/* <Map4 /> */}

  <div className={`${modelOpened?"block":"hidden"}`} ><Modal2 setModelOpened={setModelOpened}/></div>
 
 <div className={`${modelOpened?"opacity-20":""}`}><Map3 /></div> 
  {/* <Map6 /> */}
  {/* <Map5/> */}

  
    </div>
  )
}






















































{/* <Link href="/">
          <button className="bg-gradient-to-br px-2 rounded-lg font-semibold text-white py-2 from-[#54A15E] to-green-400 my-2">
          Back to Home
          </button>
        </Link>
<div className='sm:mx-4 w-full'>

<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59483.86224349474!2d40.39093209443637!3d21.281701997296288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospitals!5e0!3m2!1sen!2ssa!4v1714023300343!5m2!1sen!2ssa" width="90%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mx-4  '></iframe>
</div> */}