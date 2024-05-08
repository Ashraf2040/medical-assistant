
"use client"
import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "././style.css";
//  accordionitem component

const data1 = [
    {
      question: "Health Emergencies",
      answer:["Question 1","Question 2","Question 3"]   
    },
    {
      question: "Health tips",
      answer:["Question 1","Question 2","Question 3"]   
    },
    {
      question: "Health tips",
      answer:["Question 1","Question 2","Question 3"]   
    },
    {
      question: "Health tips",
      answer:["Question 1","Question 2","Question 3"]   
    },
    
  ];
const AccordionItem = ({ question, answer, isOpen, onClick }) => {


    const data1 = [
        {
          question: "What are accordion components?",
          answer:
            "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action."
        },
        {
          question: "What are they use for?",
          answer:
            "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options."
        },
        {
          question: "Accordion as a musical instrument",
          answer:
            "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres."
        },
        {
          question: "Can i create an accordion component with a different framework?",
          answer:
            "Yes of course, it is very possible to create an accordion component with another framework."
        }
      ];
  const contentHeight = useRef();
  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer-content flex flex-col">{answer.map((el)=><button key={el} 
        
        className="py-1 text-sm font-semibold rounded-lg mb-1 border-2 shadow-md border-gray-200">{el}</button>)}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      {data1.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
