import React, { useState } from 'react'
import Translate from './Translate'
import Link from 'next/link'
import Image from 'next/image'

const AboutUs = () => {
  const [show, setShow] = useState(false)
  const [english, setEnglish] = useState(false)
  const traits = [
    'Inter-Disciplinary', 'Sustainable', 'Automation', 'Small-Business', 'Client-Care', 'Ingenuity'
  ]


  return (
    <div className='bg-primary w-screen'>
      <div className='absolute my-20'>
        <Translate setEnglish={setEnglish} english={english}/>
      </div>
      <div className='justify-center items-center flex'>
      <div className='m-10'>
        <div className='lg:grid lg:grid-cols-2'>
          <h1 className="lg:text-[1100%] text-[525%] font-thin text-center">About</h1>
        </div>
        <div className='lg:grid lg:grid-cols-2 justify-center gap-2'>
          {/* 1st column */}
          <div className='justify-center items-center lg:max-w-[650px] lg:w-full md:w-[500px] w-[350px] bg-secondary rounded-xl lg:p-10 p-6'>
            {/* Our Story Title */}
            <div className='flex justify-left lg:px-6'>
              <h2 className='text-dark_red text-shadow-sm shadow-red_heading/40 font-medium'>Our Story</h2>
            </div>
            {/* Our Story Text */}
            <div className='lg:px-6 lg:text-xl tracking-wider font-light'>
              { english ? 
              <p className='my-[4%]'>
                IDEA <span className='lg:text-base text-sm'>CSC</span> provides integrated Engineering and Construction Management services to the Architectural Construction Industry. We are Engineers and Construction Managers collaborating our expertise to provide top quality and uncompromised services to our clients. Our integrated approach is led by our USA based Inter-Disciplinary Engineering team, <span className='font-bold text-button_bg_2 hover:underline cursor-pointer'><Link href={"https://www.ideaaec.com"}target='_blank' rel="noopener noreferrer">IDEA <span className='lg:text-base text-sm'>AEC</span></Link></span>. We focus on building efficiency between the Design and Construction phases of a project. Our approach consists of delivering client specific, cost-effective, on schedule and coordinated solutions.
              </p>
              : 
              <p className='my-[5%]'>
                IDEA CSC স্থাপতিক শিল্প নির্মাণ শিল্পে ঐচ্ছিক প্রযুক্তিবিদ্যা এবং নির্মাণ ব্যবস্থাপনা সেবা সরবরাহ করে। আমরা আমাদের দক্ষতা সংযোজন করছি ইন্জিনিয়ার এবং নির্মাণ পরিচালকরা আমাদের ক্লায়েন্টদের উপর শীর্ষ গুণমান এবং অসম্মিলিত সেবা প্রদানের জন্য। আমাদের ঐচ্ছিক পদ্ধতি আমাদের মার্কিন ভিত্তিস্থ আন্তর্জাতিক প্রযুক্তিবিদ্যা দল, আইডিআ এসি দ্বারা নেতৃত্ব করে। আমরা একটি প্রকল্পের ডিজাইন এবং নির্মাণ পর্যায়ে দক্ষতা মধ্যে দক্ষতা বাড়ানোর মুখোমুখি। আমাদের পদ্ধতি ব্যক্তিগত, মূল্য-কারগর, সময়সূচী অনুযায়ী, এবং সমন্বিত সমাধান প্রদানে দেখা যায়।
              </p>
              
              }
              {english ? 
                <p className='my-[4%]'>
                In addition to providing unparalleled Engineering and Construction Management services, we strive to positively impact and improve the current industry in Bangladesh. Our Construction Solutions Company (IDEA <span className='text-sm'>CSC</span>) team will deploy our accomplished Inter-Disciplinary Mechanical, Electrical, Plumbing and Fire Protection Engineering from our <span className='font-bold text-button_bg_2 hover:underline cursor-pointer'><Link href={"https://www.ideaaec.com"}target='_blank' rel="noopener noreferrer">IDEA <span className='lg:text-base text-sm'>AEC</span></Link></span> parent company. Our team members' experience encompasses projects and opportunities at various scales, complexities as well as sectors of the industry including Theatrical/Performance Venues, Institutions & Campuses, High-End Residences & High-Rise Residentials, Terminal & Mixed Use, Commercial and Public Venues.
              </p>
              :
                <p className='my-[5%]'>
                  অসামান্য প্রযুক্তিবিদ্যা এবং নির্মাণ ব্যবস্থাপনা সেবা প্রদানের সাথে সাথে, আমরা চেষ্টা করছি বাংলাদেশের বর্তমান শিল্পটি কেমন প্রভাব ফেলতে। আমাদের নির্মাণ সমাধান কোম্পানি (আইডিআ সিএসসি) দল আমাদের আইডিআ এসি মাতা কোম্পানি থেকে আমাদের আইডিআ এসি পিতা কোম্পানি থেকে আমাদের সমৃদ্ধ আন্তর্জাতিক যান্ত্রিক, বৈদ্যুতিক, পাইপ লাইন এবং অগ্নিপ্রতিরক্ষা প্রযুক্তিবিদ্যা প্রদান করতে। আমাদের দলের সদস্যদের অভিজ্ঞতা প্রকল্প এবং সুযোগ স্কেল, জটিলতা, এবং বিভিন্ন খাতে প্রকল্প সম্পর্কিত।
                </p>
              }
              {english ? 
              <p className='my-[4%]'>
                As an organization, we aim to positively impact and improve Bangladesh from a humanitarian perspective. Our IDEA <span className='lg:text-base text-sm'>CSC</span> team includes young and educated Bangladeshi professionals empowered and led by our US Engineering experts. Collectively, our goal is to educate our Bangladeshi engineering students alongside on-coming engineering construction management team members.
              </p>
              :
              <p className='my-[5%]'>
                একটি সংগঠন হিসেবে, আমরা একটি মানবিক দিক থেকে বাংলাদেশকে সুধারতে এবং প্রভাব ফেলতে চাই। আমাদের আইডিআ সিএসসি দলে যুব এবং শিক্ষিত বাংলাদেশী পেশাদারদের আমাদের মার্কিন প্রযুক্তিবিদ্যা বিশেষজ্ঞদের নেতৃত্ব এবং শক্তিশালী হিসেবে পরিচালিত হয়েছে। সমন্বিতভাবে, আমাদের লক্ষ্য হল বাংলাদেশী প্রযুক্তিবিদ্যা ছাত্রদের শিক্ষা দান করা এবং আগত প্রযুক্তিবিদ্যা নির্মাণ পরিচালনা দলের সাথে সহযোগিতা করা।
              </p>
              }
              {english ? 
              <p className='my-[4%]'>
              Prioritizing client’s needs, IDEA <span className='lg:text-base text-sm'>CSC</span> strives to collaborate (as a prime or sub-consultant) with service providers of the Architectural Engineering Industry including Developers, Owners, Architects, Engineers, Designers and Contractors.
              </p> 
              :
              <p className='my-[5%]'>
                গ্রাহকদের প্রাথমিকভাবে গুরুত্ব দেওয়ার প্রয়াস করে, আইডিআ সিএসসি সেবা সরবরাহকারীরা সহযোগিতা করতে চেষ্টা করে (মৌলিক বা উপ-পরামর্শক হিসেবে) স্থাপত্য প্রযুক্তি শিল্পের পরিষেবাদাতাদের সহ যেমন ডেভেলপার, মালিক, স্থপতি, প্রকৌশলী, ডিজাইনার, এবং ঠেকাদার।
              </p>
              }
              <div className='grid grid-cols-2 justify-center gap-4 '>
                {traits.map((trait)=> {
                  return(
                    <div key={trait} className='bg-button_bg text-center italic rounded-xl lg:p-4 p-3 text-sm lg:text-lg'>
                      <p>{trait}</p>
                    </div>
                    
                  )
                  
                })}
              </div>
            </div>
          </div>
          {/* 2nd column */}
          <div className='w-full h-full justify-center flex lg:my-0 my-4'>
            <div>
              
            <div className='bg-secondary lg:max-w-[580px] justify-center lg:w-full md:w-[500px] w-[350px] rounded-xl lg:p-10 p-6'>
              {/* Our Mission Title */}
              <div className='flex justify-left lg:px-6'>
                <h2 className='text-dark_red text-shadow-sm shadow-red_heading/40 font-medium'>Our Mission</h2>
              </div>
              {/* Our Mission Text */}
              <div className='lg:px-6 lg:text-xl tracking-wider font-light'>
                {english ? 
                <p className="my-[4%]">
                IDEA <span className='lg:text-base text-sm'>CSC</span>, we strive to cultivate enduring partnerships founded on qualities of service, trust, collaboration, and the relentless pursuit of Construction and Engineering innovation. We deploy the expertise and experience of our established US based Engineering parent company to empower our initiatives. Collectively, we align our efforts to implement client-specific and sustainable building system solutions, as well as educate and empower the Construction and Engineering community in Bangladesh.
                </p> 
                :
                <p className="my-[4%]">
                  আইডিআ সিএসসি-তে, আমরা সেবা, বিশ্বাস, সহযোগিতা, এবং নির্মাণ এবং প্রযুক্তির নতুনত্বের গুণগত ভিত্তিতে দীর্ঘমেয়াদী সহযোগিতা চার্য উন্নত করতে চেষ্টা করি। আমরা আমাদের স্থায়ী মার্কিন ভিত্তিস্থ প্রযুক্তি মাতৃ সংস্থার দক্ষতা এবং অভিজ্ঞতা ব্যবহার করি আমাদের প্রযুক্তিবিদ্যা প্রতিষ্ঠান প্রণব করতে। সমমিলিতে, আমরা গ্রাহক-নির্দিষ্ট এবং টেকসই ভবন প্রণালীর সমাধান প্রযুক্ত করতে, এবং বাংলাদেশের নির্মাণ এবং প্রযুক্তি সম্প্রদায়কে শিক্ষাদান এবং শক্তিশালী করতে প্রয়োজনীয়।
                </p>
                }
                {english ? 
                <p className="mt-[4%]">
                Our integrated Construction and Engineering approach embraces technology as we aim to develop efficiencies and improve the Architectural Engineering industry. Together, we are pushing boundaries ensuring mutual growth and success for our clients and collaboration partners.
                </p>
                :
                <p className="mt-[4%]">
                  আমাদের সংযুক্ত নির্মাণ এবং প্রযুক্তি পদ্ধতি প্রয়োজনীয়ভাবে প্রয়োগ করে প্রযুক্তিগত উন্নতি করার মধ্যে প্রযুক্তি অংশ হিসেবে গ্রহণ করে। সমন্বিতে, আমরা সীমানা চেষ্টা করি, আমাদের গ্রাহকদের এবং সহযোগী অংশীদারদের জন্য সাম্য এবং সাফল্য নিশ্চিত করতে।
                </p>
                }
              </div>
            </div>
            <div className='flex justify-center bg-secondary lg:max-w-[580px] lg:w-full md:w-[500px] w-[350px] lg:mt-10 mt-4 p-4 items-end rounded-xl' onMouseOver={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
              <Link href={"/team"}>
                <div className='relative items-center justify-center  p-3'>
                  <Image src={'/assets/idea-vest.jpg'} width={400} height={100} className={show ? 'rounded-xl' : 'rounded-xl motion-safe:animate-pulse'}/>
                  <div className={show ? "absolute bg-cover bottom-3 top-3 left-3 right-3 bg-tertiary/80 rounded-xl text-dark_text  " : "hidden"}>
                    <h1 className='flex items-center justify-center h-full text-2xl animate-none'>Click to See Our Team</h1>
                  </div>
                </div>
              </Link>
              
              
            </div>
          </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutUs