"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicon.css";
import Header from "./components/Header";
import Footers from "./components/Footer";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import { UserLocationContext } from './context/UserLocationContext'
import { SelectedBusinessContext } from './context/SelectedBusinessContext'
import Provider from './Provider'
import { useEffect, useState } from "react";


const inter = Inter({ subsets: ["latin"], preload: true, display: "swap" });




export default function RootLayout({children}) {
const pathName=usePathname()
const getUserLocation=()=>{
  navigator.geolocation.getCurrentPosition(function(pos){
    console.log(pos)
    setUserLocation({
      lat:pos.coords.latitude,
      lng:pos.coords.longitude
    })
  })
}
useEffect(()=>{
  getUserLocation();
},[])
const [userLocation,setUserLocation]=useState([]);
  const [selectedBusiness,setSelectedBusiness]=useState([]);
  return (
    <html  lang="en" className="m-0 p-0 bg-white  relative">
      <body className={`${inter.className} flex flex-col min-h-screen`}>

    <Provider>
          <SelectedBusinessContext.Provider value={{selectedBusiness,setSelectedBusiness}}>
          <UserLocationContext.Provider value={{userLocation,setUserLocation}}>

    
        <div className={`${pathName.includes("/healthcare/")?"hidden":"block"}`} >
          <Header />
        </div>
        <div>{children}</div>

     <div>
      <Footer />
      </div>
     
      </UserLocationContext.Provider>
          </SelectedBusinessContext.Provider>
          </Provider>
       
      </body>
    </html>
  );
}
