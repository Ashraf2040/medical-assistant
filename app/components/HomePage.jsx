"use client";

import { Message, experimental_useAssistant as useAssistant } from "ai/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import styles from "./loader.module.css";
 import Accordion from "./_Accordion/Accordion";
import Link from "next/link";
import QuestionCard from "./QuestionCard";
import Image from "next/image";
import{ useSelector } from 'react-redux'
export default function HomePage() {
  const { status, messages, submitMessage,input, handleInputChange, error } =
    useAssistant({
      api: "/api/assistant",
    });
    const [showAccordion, setShowAccordion] = useState(false);
    const [showresponse, setshowResponse] = useState(true);
    const [questionClicked,setQuestionClicked]=useState(false)

  

  const readyQuestions = {

    en: ["What are the initial signs of heat exhaustion or stroke, and how to prevent them?",
    
    ,"What are effective ways to treat symptoms of a cough, flu, or fever?",
    "I am pregnant and have noticed some bleeding. What steps should I take immediately?",
    "How can I best manage my diabetes during Hajj?"],

    ar:[

     "ما هي العلامات الأولية للإجهاد الحراري أو ضربة الشمس، وكيف يمكن الوقاية منها؟ ",
    
      ,"ما هي الطرق الفعالة لعلاج أعراض السعال والإنفلونزا والحمى؟",
      "أنا حامل ولاحظت نزيفا. ماذا يجب أن أفعل على الفور؟",
      "كيف يمكنني إدارة مرض السكري بأفضل شكل ممكن خلال الحج؟"

    ],
    fr:[
      "What are the initial signs of heat exhaustion or stroke, and how to prevent them?",
    
      ,"What are effective ways to treat symptoms of a cough, flu, or fever?",
      "I am pregnant and have noticed some bleeding. What steps should I take immediately?",
      "How can I best manage my diabetes during Hajj?"
    ]
   
    
  }

  const homePageElement ={
    en :{ 
      nearby :"Medical Facilities",
    health :"Health & Enviro Tips",
    plceholder :"Type You Question",
     example :"Few Examples To Ask",
     less:"Less",
    more:"More",
     examples :" Examples",
      about :"About",
      privacy :"Privacy Policy",
      terms :"Terms of Use",
      rights :"All Rights Reserved"
  
  },
    ar :{ 
      nearby :"الخدمات الطبية",
    health :"نصائح عامة وطبية",
    plceholder :"أكتب سؤالك",
     FAQ :"الاسئلة الشائعة",
    examples :" الاسئلة",
    less:"اقل",
    more:"المزيد من ",
      about :"عنا",
      privacy :"سياسة الخصوصية",
      terms :"شروط الاستخدام",
      rights :"جميع الحقوق محفوظة"
   
  }}
 
 

  const [merged, setMerged] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  
 const [questionChosen, setQuestionChosen] = useState("");
  // When status changes to accepting messages, focus the input:
  const inputRef = useRef(null);
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
   console.log(status)
  }, [status]);


  // console.log(currentLanguage)

  const handleSerchClick = () => {
    setEnabled(!enabled);
  };
 
 
  return (
    <div className=" flex flex-col w-full h-screen    items-center  mt-2 overflow-scroll   ">
      <div className="navigate flex items-center flex-wrap justify-center gap-4 my-10  w-full sm:text-sm  ">
       
        <Link href="/medical" className="">
          <button className=" bg-[#085f63] flex gap-2 justify-between  px-2 rounded-lg  text-[14px]   text-white font-semibold py-2">
         { homePageElement[currentLanguage].nearby}
          <span><span><Image src="/loc.svg" width={15} height={10} alt="medical image" className="h-5" /></span></span>
          </button>
        </Link>
        <Link href="/healthcare" className="">
          <button className="bg-[#085f63] flex gap-2 justify-between px-2 rounded-lg  text-[14px] text-white
           py-2 font-semibold items-center ">
         { homePageElement[currentLanguage].health}
         <span><Image src="./flashcardicon.png" width={22} height={23} alt="health-image"  className=" "/></span>
          </button>
        </Link>
      </div>

      <div className={`  w-[90%]   flex flex-col  ${!showresponse && "hidden"}`}>
        <div className=" ">
          {messages.map((m) => (
            <div key={m.id} className=" py-8 bg-gray-100 rounded-lg  relative ">
              <>
                <div className="flex gap-6 items-center  mb-6  relative     ">
                  
                  <span className="text-xl flex justify-center ">
                    {m.role === "user" && (
                      <div className="   sm:right-0 flex items-center h-fit w-[90%]  ">
                     
                        <span
                          className="bg-[#085f63] text-white  rounded-lg 
                         text-[14px] font-semibold px-2 py-0.5"
                        >
                          {m.content}
                        </span>
                        
                      </div>
                    )}
                  </span>
                </div>
                <div>
                  <div className={`flex items-center  justify-center   w-fit sm:mt-8  pl-4 ${status === "in_progress" ? "animate-pulse " : "-mt-12"}`} >
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
                      {/* {status === "in_progress" ? (
                        <span
                          className={`${styles.loader} absolute left-3 bottom-0`}
                        ></span>
                      ) : (
                        ""
                      )} */}
                    </div>
                  </div>
                  {m.role === "assistant" && (
                    <p
                      
                      className="whitespace-pre-wrap relative  self-center bg-white ml-2 py-4  w-[95%]  px-4 rounded-md"
                    >
                      {m.content}
                      <button onClick={() =>{
       
                        setshowResponse(false)
                            }
                            
                            
                             }className="absolute flex items-center justify-center top-1 right-1 bg-gray-100 rounded-full w-6 h-6">X</button>
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
      
        <textarea
          ref={inputRef}
          disabled={status !== "awaiting_message"}
          className="  pt-4 pl-2 h-fit pr-11 ring-1 ring-gray-200  outline-none focus:ring-[#00afbf]   bg-white  rounded-[10px]  w-full "
          value={input 
          }
          placeholder="Type your question..."
          onChange={handleInputChange}
          
          
        />
        <button className="absolute z-20 right-1" clicked >
       <Image src={'/Send _icon.svg'} alt="search" width={30} height={30} className="h-10 w-10"/>

</button>
     
      </form>
      <h2 className="text-md text-[#00afbf] font-semibold my-10 mb-6">{homePageElement[currentLanguage].FAQ}</h2>
      <div className="FAQ w-[90%]   grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="grid grid-cols-1 gap-2 w-full"> 
          {readyQuestions[currentLanguage].map((question,index) => (
          <button key={index}   className="bg-gray-50 cursor-pointer border-2 shadow-sm rounded-lg text-[#00afbf] py-2 " 
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
     
      <botton onClick={() => setShowAccordion(!showAccordion)} className=" flex items-center gap-2 text-[#00afbf] font-semibold mt-8 mb-4 ">{showAccordion ? `${homePageElement[currentLanguage].less}` : `${homePageElement[currentLanguage].more}`} {homePageElement[currentLanguage].examples} <span className="text-4xl"><RiArrowDropDownLine className="arrow"/></span> </botton>
      <div className= {`mt-2 w-full ${showAccordion ? "block" : "hidden"} 
        transition duration-1000 ease-in-out`} >
      
  <div  > <Accordion /></div>  
      </div>
       

      
    </div>
  );
}

