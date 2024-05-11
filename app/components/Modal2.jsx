"use client"

import React, { useEffect } from 'react'
import { FaStar } from "react-icons/fa";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -140%)',
    borderRadius: "30px",
    ShadowRoot: "10px",
    boxShadow: "0 15px 15px -12px rgba(0, 0, 0, 0.25)",
   
  
    
  },

};


 
export default function Modal2({setLang}) {
    useEffect(() => {
        setTimeout(() => {
         openModal()
          }, 15000);// Code to execute goes here
      },[]);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

      // const buttonClosed = () => {
        
        
      //   setIsOpen(false);
      // }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const languges =[
    "English","Français","اردو","Deutsch","العربية","Española", "Türkçe","dell'Italia"
   
  ]
  
  return ( <div style={styles.container} className="">
  <h2 className="text-teal-500 text-md font-semibold my-6"> Give us stars ,We Appreciate your feedback </h2>
  <div style={styles.stars}>
    {stars.map((_, index) => {
      return (
        <FaStar
          key={index}
          size={24}
          onClick={() => handleClick(index + 1)}
          onMouseOver={() => handleMouseOver(index + 1)}
          onMouseLeave={handleMouseLeave}
          color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
          style={{
            marginRight: 10,
            cursor: "pointer"
          }}
        />
      )
    })}
  </div>
  <textarea
    placeholder="What's your experience?"
    style={styles.textarea}
    className="bg-white "
  />

  <button
   className="bg-teal-600 px-2 py-2 my-3 text-white rounded-lg font-bold"
  >
    Submit
  </button>
  
</div>
  
  )
}
