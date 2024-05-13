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
import OpenAIAssistant from "./openai-assistant";
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
    FAQ :"Few Examples To Ask",
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

<div className="w-[95%] flex items-center justify-center rounded-lg">
<OpenAIAssistant 
          assistantId="asst_t7GuIOqWsYXxVBlIpXH5D29e"
         
        />

</div>
     

     
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
























