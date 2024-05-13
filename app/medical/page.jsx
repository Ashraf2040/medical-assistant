"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Map3 from '../components/Map3';
import Modal2 from '../components/Modal2'; // Assuming Modal handles rating dialog functionality
import GlobalApies from '../services/GlobalApies';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function MedicalLocation() {
  const [modelOpened, setModelOpened] = useState(false);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  console.log(currentLanguage);

  useEffect(() => {
    axios.get("/api/nearby").then((response) => {
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    const hasRendered = localStorage.getItem('modal2Rendered');
    if (!hasRendered) {
      setTimeout(() => {
        setModelOpened(true);
        localStorage.setItem('modal2Rendered', true); // Set flag
      }, 10000);
    }
  }, []);

  return (
    <div className=' py-2 w-full max-h-screen   '>

      <div className={`${modelOpened ? "block" : "hidden"}`}>
        <Modal2 setModelOpened={setModelOpened}> {/* Pass setModelOpened prop to Modal */}
          {/* RatingDialog logic assumed to be within Modal */}
        </Modal2>
      </div>

      <div className={`${modelOpened ? "opacity-20" : ""}`}><Map3 /></div>

    </div>
  );
}