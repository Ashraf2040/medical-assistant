"use client";

import React, { useEffect, useRef, useState } from 'react';
const LocationMap = () => {

    const [position, setPosition] = useState({ coords: { latitude: 21.4241, longitude: 39.8173 } });
  const mapRef = useRef(null);
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




















































































// import { useState, useRef } from "react";
// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   Autocomplete,
// } from "@react-google-maps/api";

// const Map = () => {
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [searchLngLat, setSearchLngLat] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const autocompleteRef = useRef(null);
//   const [address, setAddress] = useState("");

//   // laod script for google map
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
//     libraries: ["places"],
//   });

//   if (!isLoaded) return <div>Loading....</div>;

//   // static lat and lng
//   const center = { lat: '21.4241', lng: '39.8173' };

//   // handle place change on search
//   const handlePlaceChanged = () => {
//     const place = autocompleteRef.current.getPlace();
//     setSelectedPlace(place);
//     setSearchLngLat({
//       lat: place.geometry.location.lat(),
//       lng: place.geometry.location.lng(),
//     });
//     setCurrentLocation(null);
//   };

//   // get current location
//   const handleGetLocationClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setSelectedPlace(null);
//           setSearchLngLat(null);
//           setCurrentLocation({ lat: latitude, lng: longitude });
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//     }
//   };

//   // on map load
//   const onMapLoad = (map) => {
//     const controlDiv = document.createElement("div");
//     const controlUI = document.createElement("div");
//     controlUI.innerHTML = "Get Location";
//     controlUI.style.backgroundColor = "white";
//     controlUI.style.color = "black";
//     controlUI.style.border = "2px solid #ccc";
//     controlUI.style.borderRadius = "3px";
//     controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
//     controlUI.style.cursor = "pointer";
//     controlUI.style.marginBottom = "22px";
//     controlUI.style.textAlign = "center";
//     controlUI.style.width = "100%";
//     controlUI.style.padding = "8px 0";
//     controlUI.addEventListener("click", handleGetLocationClick);
//     controlDiv.appendChild(controlUI);

//     // const centerControl = new window.google.maps.ControlPosition(
//     //   window.google.maps.ControlPosition.TOP_CENTER,
//     //   0,
//     //   10
//     // );

//     map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
//       controlDiv
//     );
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "20px",

//       }}
//       className="w-full h-screen"
//     >
//       {/* search component  */}
//       <Autocomplete
//         onLoad={(autocomplete) => {
//           console.log("Autocomplete loaded:", autocomplete);
//           autocompleteRef.current = autocomplete;
//         }}
//         onPlaceChanged={handlePlaceChanged}
//         options={{ fields: ["address_components", "geometry", "name"] }}
//       >
//         <input type="text" placeholder="Search for a location" />
//       </Autocomplete>

//       {/* map component  */}
//       <GoogleMap
//         zoom={currentLocation || selectedPlace ? 18 : 12}
//         center={currentLocation || searchLngLat || center}
//         mapContainerClassName="map"
//         mapContainerStyle={{ width: "80%", height: "600px", margin: "auto" }}
//         onLoad={onMapLoad}
//       >
//         {selectedPlace && <Marker position={searchLngLat} />}
//         {currentLocation && <Marker position={currentLocation} />}
//       </GoogleMap>
//     </div>
//   );
// };

// export default Map;