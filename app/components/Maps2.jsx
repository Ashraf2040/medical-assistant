
"use client";

import { useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import React, { useEffect, useRef, useState } from 'react'
import {Librarys} from '@react-google-maps/api'

const libs =['places','core','maps','marker']
export default function Maps2() {
    const [map,setMap]=useState(null)
    const [autocomplete,setAutocomplete]=useState(null)
    const {isLoaded}=useJsApiLoader({
        googleMapsApiKey:process.env.NEXT_PUBLIC_MAPS_API_KEY,
        mapIds: "mu_map_id",
        libraries:libs
    
    
    })
    // const { isLoaded, loadError } = useLoadScript({
    //   googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    //   libraries:libs
    // });

    const mapRef = useRef(null);
    const placeAutoCompleteRef = useRef(null);
    useEffect(()=> {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        
      });
    },[])

    useEffect(()=>{
        if(isLoaded){

          console.log("loaded")

          const mapOptions = {
            center: { lat: 24.4672, lng: 39.6024 },
            zoom: 11
          };
          const map = new google.maps.Map(mapRef.current, mapOptions);
          setMap(map);


        }},
        
        
        [isLoaded])
  return (
    <div className='flex flex-col space-y-2 '>
      {isLoaded ? <div className='w-full h-4/5' ref={mapRef}/>:<p>loading....</p>}
    </div>
  )
}
