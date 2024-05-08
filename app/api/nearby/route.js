import axios from "axios"

const Base_Url="https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters"   
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_MAPS_API_KEY




import {NextRequest, NextResponse} from "next/server";

export async function GET (req,res){
        try {
     const response = await axios.get(Base_Url + "/nearbysearch/json?fields=formatted_address,name,rating,opening_hours,geometry,photos&type="+req.query.category+"&location="+req.query.lat+","+req.query.lng+"&radius=1000&key="+GOOGLE_API_KEY)

     const data = response.data
     return NextResponse.json(data)}
    catch (error) {
         

        return NextResponse.json({error:error})
    }
        
  
    
    
}