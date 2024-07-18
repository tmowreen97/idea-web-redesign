import {motion} from 'framer-motion';
import { useState } from 'react';
import TeamList from "./TeamList";
import AnimatedText from "./AnimatedText";
import Translate from './Translate';


function OurTeam (){
  const [english, setEnglish] = useState(true)
  const words = "Manifesting World Class Ideas"
  const main_team = [
    // kazi
    {
      name: 'Kazi Karim',
      title: 'Introducing Kazi: Our Visionary Founder & President',
      heading: '',
      body: [
        "As President, Kazi leads the strategic growth and development of Inter-Disciplinary Engineering Associates, Construction Solutions Company in Bangladesh.",
        "Kazi’s extensive portfolio of Design, Construction and Forensics engineering experience empowers him to service and excel at accommodating very complex and demanding projects. As a project manager and lead engineer, he has successfully managed and led design & construction efforts of multiple sustainable LEED certified facilities in various sectors of the construction industry including performance art centers, museums/galleries, higher education buildings, historical buildings, mixed-use, industrial warehouses, commercial spaces, parks and recreational centers and high-rise & high-end residences.",
        "A very detailed approach and extensive experience in project management, design development and construction administration has empowered Kazi to complete multiple large projects throughout the country. Kazi has managed and designed complex MEP-FP projects including Electrical designs of normal and emergency power systems, lighting control systems, emergency lighting systems, fire alarm systems, as well as low voltage systems (telecommunications systems, security systems, etc.).",
        "Kazi’s professional experience includes MEP-FP Engineering services, at prominent US Engineering Companies including AltieriSeborWieber LLC (Altieri), and DeSimone Consulting Engineers, LLC."
      ],
      body_bangla: [
        "প্রেসিডেন্ট হিসেবে, কাজী বাংলাদেশের একটি নির্দেশালয় প্রযুক্তিবিদ্যা এসোসিয়েটস, একটি নির্মাণ সমাধান প্রতিষ্ঠানের রণনীতিগত বৃদ্ধি এবং উন্নয়ন নেয়।",
        "কাজীর বিস্তৃত ডিজাইন, নির্মাণ এবং ফরেনসিক প্রযুক্তিবিদ্যা অভিজ্ঞতা তাকে অত্যন্ত জটিল এবং চাপের প্রকল্পগুলির জন্য অবসর দেয়। একটি প্রকল্প ম্যানেজার এবং প্রধান প্রযুক্তিবিদ্যা হিসেবে, তিনি সাফল্যের সাথে পরিচালনা করেছেন এবং নির্মাণ প্রচেষ্টা গুলির ডিজাইন এবং নির্মাণ প্রচেষ্টা বিভিন্ন খাতে ধর্মীয় লিড-সারকার। উদাহরণস্বরূপ, সংগ্রহশীল কলা কেন্দ্র, জাদুঘর / দেখান কেন্দ্র, উচ্চশিক্ষা ভবন, ঐতিহাসিক ভবন, মিশিত ব্যবহার উন্নয়ন, শিল্পগৃহ, বাণিজ্যিক স্থান, উদ্যান এবং প্রত্যক্ষ কেন্দ্র, উচ্চতা এবং উচ্চ-শ্রেণীয় আবাসন।",
        "একটি খুব বিস্তারিত পদ্ধতিতে এবং প্রজেক্ট পরিচালনা, ডিজাইন উন্নয়ন এবং নির্মাণ প্রশাসনে বিস্তৃত অভিজ্ঞতা কাজীকে দেশের বিভিন্ন অংশে বৃদ্ধি দেওয়ার সক্ষম করেছে। তিনি একাধিক বড় প্রকল্প সমাপ্ত করতে সক্ষম হয়েছেন দেশব্যাপী। তিনি সমাপ্ত এবং জটিল এমইপি-এফপি প্রকল্প পরিচালনা করেছেন, যেমন সাধারণ এবং জরুরী বিদ্যুত সিস্টেমের জন্য বৈদ্যুতিক ডিজাইন, আলোর নিয়ন্ত্রণ সিস্টেম, জরুরী আলোর সিস্টেম, অগ্নিবাণ সিস্টেম, ছোট ভোল্টেজ সিস্টেম (টেলিযোগাযোগ সিস্টেম, নিরাপত্তা সিস্টেম ইত্যাদি)।",
        "কাজীর পেশাগত অভিজ্ঞতা গুরুত্বপূর্ণ মেরামত এসেছে মহান মার্কিন প্রযুক্তিবিদ্যা প্রতিষ্ঠানগুলিতে, যেমন আলতিয়েসিবোরভিবার এলএলসি (আলতিয়ের) এবং ডেসিমোন কনসাল্টিং প্রকৌশল প্রকৌশল প্রতিষ্ঠান, এলএলসি।"
      ],
      contact: "/assets/PEKaziAKarimUPDATED.msg",
      linkedin: "https://www.linkedin.com/in/kazi-a-karim-p-e-2a3a3416/",
      fun_fact: "Kazi is an enthusiastic sports fan, always willing to hit the field or harwood (football & basketball) for a good competitive workout. His experience as a College and High-School Quarterback empowers Kazi to joyfully Quarterback the growth and development of IDEA.",
      image: '/assets/kazi_2.jpeg'
    },
    // ASHIK
    {
      name: 'Ashik Chowdhury',
      title: 'Introducing Ashik: Our Construction Services Lead',
      heading: "",
      body:[
        "In his role as Construction Lead Mr.Ashik leads our Construction services including Construction Management assignments. He utilizes his 15+ years of Construction Management experience to empower IDEA CSC’s Construction Services offerings. Mr. Ashik also brings 10+ years of international management experience to our team.",
        "His expertise includes, but is not limited to, Project Management, Construction Management, Project Coordination, Sub-Contractor Procurement & Management, Cost Estimation & Cost Control, Construction Project Schedule Development, Construction Bid Procurement, Equipment & Material Procurement and Permitting."
      ],
      body_bangla: [
        "তার ভূমিকা হিসেবে নির্মাণ প্রধান, মিঃ আশিক আমাদের নির্মাণ সেবাগুলি নিয়ে দেখেন, যা নির্মাণ ব্যবস্থাপনা অনুদান অবসর। তিনি তার 15+ বছরের নির্মাণ ব্যবস্থাপনা অভিজ্ঞতা ব্যবহার করে আইডিআ সিএসসি এর নির্মাণ সেবা প্রস্তাবনা বৃদ্ধি দেওয়ার চেষ্টা করেন। উত্তরণ, মিঃ আশিক আমাদের দলে আন্তর্জাতিক ব্যবস্থাপনা অভিজ্ঞতা নিয়ে আসেন আমাদের দলে।",
        "তার দক্ষতা অন্তর্ভুক্ত, তবে এটি সীমাবদ্ধ নয়, প্রকল্প ব্যবস্থাপনা, নির্মাণ ব্যবস্থাপনা, প্রকল্প সময়সূচী অনুমোদন, উপ-কনট্রাক্টর সংগ্রহ এবং পরিচালনা, খরচ অনুমান এবং নিয়ন্ত্রণ, নির্মাণ প্রকল্প সময়সূচী উন্নয়ন, নির্মাণ বিজ সংগ্রহ, যন্ত্রপাতি এবং পণ্য সংগ্রহ, এবং অনুমতি অনুমোদন।"
      ],
      fun_fact: "Vinoo has two kids and no time for fun… he also has a passion for history, and is an avid reader on the subject.",
      image: '/assets/ashik_3.jpeg'
    }
  ]

  return(
    <div className="w-screen h-full items-center text-center justify-center bg-primary">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:1 , duration:1}}}
      className="lg:p-20 pt-20 pb-10">
        <h1 className="md:text-[1100%] text-8xl font-thin text-primary_text text-center lg:text-left tracking-wide">Our Team</h1>
      </motion.div>
      {/* <div>
        <Translate english={english} setEnglish={setEnglish}/>
      </div> */}
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:1.5 , duration:1}}}
      className="">
        <div className="md:grid grid-cols-1 md:gap-20 md:mx-20 mt-10">
          {
            main_team.map((member)=> {
              return(
                <div key={member.title}>
                  <TeamList member={member} english={english}/>
                </div>
                
              )
              
            })
          }


        </div>

      
      <div className=" xl:p-40 p-10 mx-auto flex flex-col items-center justify-center">
        <AnimatedText text={words}/>
      </div>
      </motion.div>
            

      
    </div>
  )
  }

  export default OurTeam;