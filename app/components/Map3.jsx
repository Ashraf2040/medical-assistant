"use client"
import GlobalApi from '../Shared/GlobalApi';
import BusinessList from '../components/BusinessList';

import GoogleMapView from '../components/GoogleMapView';

import SkeltonLoading from '../components/SkeltonLoading';
import { UserLocationContext } from '../context/UserLocationContext';

import { useContext, useEffect, useState } from 'react'

export default function Home() {  
  const [category,setCategory]=useState("hospitals");
  const [radius,setRadius]=useState(10000);
  const [businessList,setBusinessList]=useState([])
  const [businessListOrg,setBusinessListOrg]=useState([])
  const [loading,setLoading]=useState(false);
 
  const {userLocation,setUserLocation}=useContext(UserLocationContext);


  useEffect(()=>{
    getGooglePlace();
  },[category,radius])

  const getGooglePlace=()=>{
    if(category){
    setLoading(true)

      GlobalApi.getGooglePlace(category,radius,userLocation.lat,userLocation.lng).then(resp=>{
        console.log(resp.data.product.results);
        setBusinessList(resp.data.product.results);
        setBusinessListOrg(resp.data.product.results);
   setLoading(false)
    })
   }
  
  }


  
  return (
        <div className=' '>
          
          <div className='mb-4'>
        {!loading?  <BusinessList businessList={businessList} />
          :
          <div className='flex gap-3'>
          {[1,2,3,4,5].map((item,index)=>(
              <SkeltonLoading key={index} />
          ))}
          </div>
          }
          
          </div>
          <GoogleMapView  businessList={businessList}/>
      

    </div>
  )
}
