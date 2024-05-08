"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicon.css";
import Header from "./components/Header";
import Footers from "./components/Footer";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";




const inter = Inter({ subsets: ["latin"], preload: true, display: "swap" });




export default function RootLayout({children}) {
const pathName=usePathname()

  return (
    <html  lang="en" className="m-0 p-0 bg-white  relative">
      <body className={`${inter.className} flex flex-col min-h-screen`}>

      {/* <script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMCmgqs8_22JHMb_twcCXhyVBqhuthppc" defer>
</script> */}
        <div className={`${pathName.includes("/healthcare/")?"hidden":"block"}`} >
          <Header />
        </div>
        <div>{children}</div>

     <div>
      <Footer />
      </div>
     
          
       
      </body>
    </html>
  );
}
