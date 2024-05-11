"use client";

import { Message, experimental_useAssistant as useAssistant } from "ai/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import styles from "./loader.module.css";
 import Accordion from "./_Accordion/Accordion";
import Link from "next/link";
import QuestionCard from "./QuestionCard";
import Image from "next/image";

export default function HomePage() {
  const { status, messages, submitMessage,input, handleInputChange, error } =
    useAssistant({
      api: "/api/assistant",
    });
    const [showAccordion, setShowAccordion] = useState(false);

  const askedQuestions1 = [
    "What are the initial signs of heat exhaustion or stroke, and how to prevent them?",
    
    ,"What are effective ways to treat symptoms of a cough, flu, or fever?",
    "I am pregnant and have noticed some bleeding. What steps should I take immediately?",
    "How can I best manage my diabetes during Hajj?"
    
  ];
  const askedQuestions2 = [
    "ماهي مناسك الحج1؟",
    "ماهي مناسك العمرة1؟",
    "ماهو ميقات اهل المدينة1؟",
    "ماهي شروط حج التمتع1 ؟",
    "كيفية لبس الاحرام1 ؟",
    "مالفرق بين التحلل الاكبر والاصغر1؟",
  ];
  const newArray = askedQuestions1.concat(askedQuestions2);

  const [merged, setMerged] = useState(true);
  const [enabled, setEnabled] = useState(false);

  const [questionArray, setQuestionArray] = useState(askedQuestions1);
 const [questionChosen, setQuestionChosen] = useState("");
  // When status changes to accepting messages, focus the input:
  const inputRef = useRef(null);
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
   
  }, [status]);


  const handleSerchClick = () => {
    setEnabled(!enabled);
  };
  const handleClick = () => {
    if (merged) {
      setQuestionArray(newArray);
    } else {
      setQuestionArray(askedQuestions1);
    }
    setMerged(!merged);
  };



  return (
    <div className=" flex flex-col w-full h-screen    items-center  mt-2 overflow-scroll   ">
      <div className="navigate flex items-center flex-wrap justify-center gap-4 my-10  w-full sm:text-sm  ">
       
        <Link href="/medical" className="">
          <button className=" bg-[#085f63] flex gap-2 justify-between  px-2 rounded-lg  text-[14px]   text-white font-semibold py-2">
          Medical Facilities 
          <span><span><Image src="/loc.svg" width={15} height={10} alt="medical image" className="h-5" /></span></span>
          </button>
        </Link>
        <Link href="/healthcare" className="">
          <button className="bg-[#085f63] flex gap-2 justify-between px-2 rounded-lg  text-[14px] text-white
           py-2 font-semibold items-center ">
         Health & Enviro Tips
         <span><Image src="./flashcardicon.png" width={22} height={23} alt="health-image"  className=" "/></span>
          </button>
        </Link>
      </div>

      <div className="  w-[90%]   flex flex-col  ">
        <div className=" ">
          {messages.map((m) => (
            <div key={m.id} className=" py-8 bg-gray-100 rounded-lg  relative ">
              <>
                <div className="flex gap-6 items-center  mb-10  relative     ">
                  
                  <span className="text-xl flex ">
                    {m.role === "user" && (
                      <div className="absolute right-6 mb-8  sm:right-0 flex items-center h-fit  ">
                        <span
                          className="bg-[#CDE4D6]  rounded-l-lg rounded-tr-xl
                         text-[14px] font-semibold px-2 py-0.5"
                        >
                          {m.content}
                        </span>
                        🤵
                      </div>
                    )}
                  </span>
                </div>
                <div>
                  <div className={`flex items-center  justify-center   w-fit sm:mt-8  pl-4 ${status === "in_progress" ? "animate-pulse mt-16" : "-mt-12"}`} >
                    <div className="flex items-center w-fit relative  mt-2">
                      {status === "in_progress" ? (
                        <Image
                          src="/Ai.png"
                          alt=""
                          width={40}
                          height={40}
                          className="h-8 w-8 "
                        />
                      ) : (
                        ""
                      )}
                      {status === "in_progress" ? (
                        <span
                          className={`${styles.loader} absolute left-3 bottom-0`}
                        ></span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  {m.role === "assistant" && (
                    <p
                      
                      className="whitespace-pre-wrap   self-center bg-white ml-2 py-2  w-[95%]  px-4"
                    >
                      {m.content}
                    </p>
                  )}
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={submitMessage}
        className=" items-center justify-center relative    w-[88%]  flex ">
      
        <input
          ref={inputRef}
          disabled={status !== "awaiting_message"}
          className="  p-4 ring-1 ring-gray-200  outline-none focus:ring-[#00afbf]   bg-white  rounded-[10px]  w-full "
          value={input 
          }
          placeholder="Type your question..."
          onChange={handleInputChange}
          
        />
        <button className="absolute right-1" >
       <Image src={'/Send _icon.svg'} alt="search" width={30} height={30} className="h-9 w-9"/>

</button>
     
      </form>
      <h2 className="text-md text-[#00afbf] font-semibold my-24 mb-6">Few examples to ask</h2>
      <div className="FAQ w-[90%]   grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="grid grid-cols-1 gap-2 w-full"> 
          {questionArray.map((question) => (
          <button key={question}   className="bg-gray-50 cursor-pointer border-2 shadow-sm rounded-lg text-[#00afbf] py-2 " 
          onClick={()=>{
            setQuestionChosen(question)
           handleInputChange({target:{value:question}})
           submitMessage()
          }}
          >
            {question}
         <form action="" onSubmit={submitMessage} className="hidden">
         <input
          ref={inputRef}
          className="  p-4 ring-1 ring-gray-200  outline-none focus:ring-[#00afbf]   bg-white  rounded-[10px]  w-full "
          value={input  }
          placeholder="Type your question..."
          onChange={handleInputChange}
          
        />


         </form>
            
            </button>
        ))}</div>
       
      </div>
     
      <botton onClick={() => setShowAccordion(!showAccordion)} className=" flex items-center gap-2 text-[#00afbf] font-semibold mt-8 mb-4 ">{showAccordion ? "Less" : "More"} Examples <span className="text-4xl"><RiArrowDropDownLine className="arrow"/></span> </botton>
      <div className= {`mt-2 w-full ${showAccordion ? "block" : "hidden"} 
        transition duration-1000 ease-in-out`} >
      
  <div  > <Accordion /></div>  
      </div>
       

      
    </div>
  );
}

