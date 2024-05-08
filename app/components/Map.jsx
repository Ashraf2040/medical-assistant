"use client";

import React, { useEffect, useRef, useState } from 'react';
const LocationMap = () => {

    const [position, setPosition] = useState({ coords: { latitude: 21.4241, longitude: 39.8173 } });
  const mapRef = useRef(null);
  const placeAutoCompleteRef = useRef(null);
  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    googleMapsScript.addEventListener('load', initializeMap);
    document.body.appendChild(googleMapsScript);
  }, []);
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setPosition({ coords: { latitude: position.coords.latitude, longitude: position.coords.longitude } });
    });
  },[])
  const initializeMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: position.coords.latitude, lng: position.coords.longitude }, // Default to San Francisco
      zoom: 12,
    });
     const gAutocomplete = new window.google.maps.places.Autocomplete(placeAutoCompleteRef)

    const marker = new window.google.maps.Marker({
      position: { lat: position.coords.latitude, lng: position.coords.longitude },
      map: map,
    })
    
    // Add your location-based features here
  };
  return (
    <div className='h-4/5 w-full'> 
        <form className='mb-8' >
    <input type="text" className='p-4 w-full rounded-lg ' placeholder='Search Location'  />
</form>
<div ref={mapRef}  className='h-4/5 w-full'></div>
</div>
   
  );
};
export default LocationMap;




















































































//