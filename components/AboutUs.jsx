import React, { useState } from 'react'
import Translate from './Translate'
import Link from 'next/link'
import Image from 'next/image'

const AboutUs = () => {
  const [show, setShow] = useState(false)
  const [english, setEnglish] = useState(true)
  const english_traits = [
    'Inter-Disciplinary', 'Sustainable', 'Automation', 'Small-Business', 'Client-Care', 'Ingenuity'
  ]
  const bangla_traits = [
    'আন্তঃবিভাগীয়', 'টেকসই', 'অটোমেশন', 'ছোট-ব্যবসা', 'গ্রাহকসেবা', 'চতুরতা'
  ]


  return (
    <div className='bg-primary w-screen'>
      {/* <div className='absolute 2xl:my-32 '>
        <Translate setEnglish={setEnglish} english={english}/>
      </div> */}
      <div className='justify-center items-center flex'>
      <div className='m-10'>
        <div className='lg:grid lg:grid-cols-2'>
          <h1 className="lg:text-[1100%] text-[525%] font-thin text-center md:pt-0 pt-5 text-primary_text">
            {english ? 'About' : 'সম্পর্কে'}
          </h1>
        </div>
        <div className='lg:grid lg:grid-cols-2 justify-center gap-2'>
          {/* 1st column */}
          <div className='justify-center items-center lg:max-w-[650px] lg:w-full md:w-[500px] w-[350px] bg-secondary rounded-xl lg:p-10 p-6'>
            {/* Our Story Title */}
            <div className='flex justify-left lg:px-6'>
              <h2 className='font-medium'>
                {english ? 'Our Story' : 'আমাদের গল্প'}
              </h2>
            </div>
            {/* Our Story Text */}
            <div className='lg:px-6 lg:text-xl tracking-wider font-light'>
              { english ? 
              <p className='my-[4%]'>
                IDEA <span className='lg:text-base text-sm'>CSC</span> provides integrated Engineering and Construction Management services to the Architectural Construction Industry. We are Engineers and Construction Managers collaborating our expertise to provide top quality and uncompromised services to our clients. Our integrated approach is led by our USA based Inter-Disciplinary Engineering team, <span className='font-bold text-button_bg hover:underline cursor-pointer'><Link href={"https://www.ideaaec.com"}target='_blank' rel="noopener noreferrer">IDEA <span className='lg:text-base text-sm'>AEC</span></Link></span>. We focus on building efficiency between the Design and Construction phases of a project. Our approach consists of delivering client specific, cost-effective, on schedule and coordinated solutions.
              </p>
              : 
              <p className='my-[5%]'>
                IDEA <span className='lg:text-base text-sm'>CSC</span> স্থাপত্য নির্মাণ শিল্পে সমন্বিত প্রকৌশল এবং নির্মান ব্যবস্থাপনা পরিষেবা প্রদান করে। আমরা ইঞ্জিনিয়ার এবং কনস্ট্রাকশন ম্যানেজার একত্রে আমাদের দক্ষতার সাথে সহযোগিতা করছি ক্লায়েন্টদের শীর্ষ মানের এবং আপসহীন পরিষেবা প্রদানের জন্য। আমাদের সমন্বিত পদ্ধতির নেতৃত্বে রয়েছে আমাদের ইউএসএ ভিত্তিক  আন্তঃবিভাগীয় প্রকৌশল দল, <span className='font-bold text-button_bg hover:underline cursor-pointer'><Link href={"https://www.ideaaec.com"}target='_blank' rel="noopener noreferrer">IDEA <span className='lg:text-base text-sm'>AEC</span></Link></span>। আমরা একটি প্রকল্পের নকশা এবং নির্মাণ পর্যায়গুলির মধ্যে সক্ষমতা যাচাইয়ে গুরুত্ব দেই। গ্রাহকদের নির্দিষ্ঠ,  সাশ্রয়ী,  পূর্ব নির্ধারিত সময়ের মধ্যে সমন্বিত সমাধান প্রদান করা আমাদের সেবা প্রদানের পদ্ধতির অন্তর্ভুক্ত।
              </p>
              
              }
              {english ? 
                <p className='my-[4%]'>
                In addition to providing unparalleled Engineering and Construction Management services, we strive to positively impact and improve the current industry in Bangladesh. Our Construction Solutions Company (IDEA <span className='text-sm'>CSC</span>) team will deploy our accomplished Inter-Disciplinary Mechanical, Electrical, Plumbing and Fire Protection Engineering from our <span className='font-bold text-button_bg hover:underline cursor-pointer'><Link href={"https://www.ideaaec.com"}target='_blank' rel="noopener noreferrer">IDEA <span className='lg:text-base text-sm'>AEC</span></Link></span> parent company. Our team members' experience encompasses projects and opportunities at various scales, complexities as well as sectors of the industry including Theatrical/Performance Venues, Institutions & Campuses, High-End Residences & High-Rise Residentials, Terminal & Mixed Use, Commercial and Public Venues.
              </p>
              :
                <p className='my-[5%]'>
                  অতুলনীয় ইঞ্জিনিয়ারিং এবং কনস্ট্রাকশন ম্যানেজমেন্ট পরিষেবা প্রদানের পাশাপাশি, আমরা বাংলাদেশের বর্তমান শিল্পকে ইতিবাচকভাবে প্রভাবিত এবং উন্নত করার চেষ্টা করি। আমাদের কনস্ট্রাকশন সলিউশন কোম্পানি (IDEA <span className='text-sm'>CSC</span>) টিম আমাদের <span className='font-bold text-button_bg hover:underline cursor-pointer'><Link href={"https://www.ideaaec.com"}target='_blank' rel="noopener noreferrer">IDEA <span className='lg:text-base text-sm'>AEC</span></Link></span> মূল কোম্পানি থেকে আমাদের দক্ষ আন্তঃবিভাগীয় মেকানিক্যাল, ইলেকট্রিক্যাল, প্লাম্বিং এবং ফায়ার প্রোটেকশন ইঞ্জিনিয়ারিং প্রসারিত করবে। আমাদের দলের সদস্যদের অভিজ্ঞতা বিভিন্ন পর্যায়ের প্রকল্প এবং সুযোগ, জটিলতা এবং সেইসাথে শিল্পের সেক্টর যেমন থিয়েট্রিকাল/পারফরম্যান্স ভেন্যু, প্রতিষ্ঠান এবং ক্যাম্পাস, হাই-এন্ড রেসিডেন্স এবং বহুতলবিশিষ্ট আবাসিক ভবন, টার্মিনাল এবং মিশ্র ব্যবহার, বাণিজ্যিক এবং পাবলিক ভেন্যু ইত্যাদি দ্বারা পরিবেষ্টিত।
                </p>
              }
              {english ? 
              <p className='my-[4%]'>
                As an organization, we aim to positively impact and improve Bangladesh from a humanitarian perspective. Our IDEA <span className='lg:text-base text-sm'>CSC</span> team includes young and educated Bangladeshi professionals empowered and led by our USA Engineering experts. Collectively, our goal is to educate our Bangladeshi engineering students alongside on-coming engineering construction management team members.
              </p>
              :
              <p className='my-[5%]'>
                একটি সংস্থা হিসাবে, আমরা মানবিক দৃষ্টিকোণ থেকে বাংলাদেশকে ইতিবাচকভাবে প্রভাবিত এবং উন্নত করার লক্ষ্য রাখি। আমাদের IDEA <span className='lg:text-base text-sm'>CSC</span> টিমে আমাদের ইউএসএ ইঞ্জিনিয়ারিং বিশেষজ্ঞদের দ্বারা প্রশিক্ষিত এবং নেতৃত্বে তরুণ এবং শিক্ষিত বাংলাদেশী পেশাদাররা অন্তর্ভুক্ত রয়েছে। সম্মিলিতভাবে, আমাদের লক্ষ্য হল আমাদের বাংলাদেশী ইঞ্জিনিয়ারিং ছাত্রদেরকে আগত ইঞ্জিনিয়ারিং কনস্ট্রাকশন ম্যানেজমেন্ট টিমের সদস্যদের সাথে শিক্ষিত করা।
              </p>
              }
              {english ? 
              <p className='my-[4%]'>
              Prioritizing client’s needs, IDEA <span className='lg:text-base text-sm'>CSC</span> strives to collaborate (as a prime or sub-consultant) with service providers of the Architectural Engineering Industry including Developers, Owners, Architects, Engineers, Designers and Contractors.
              </p> 
              :
              <p className='my-[5%]'>
                গ্রাহকের চাহিদাকে অগ্রাধিকার দিয়ে, IDEA <span className='lg:text-base text-sm'>CSC</span> ডেভেলপার, মালিক, স্থপতি, প্রকৌশলী, ডিজাইনার এবং ঠিকাদার সহ আর্কিটেকচারাল ইঞ্জিনিয়ারিং ইন্ডাস্ট্রির পরিষেবা প্রদানকারীদের সাথে (প্রধান বা উপ-পরামর্শক হিসাবে) সহযোগিতা করার চেষ্টা করে।
              </p>
              }
              <div className='grid grid-cols-2 justify-center gap-4 '>
                {english ? 
                english_traits.map((trait)=> {
                  return(
                    <div key={trait} className='bg-accent_bg text-center italic rounded-xl lg:p-4 p-3 text-sm lg:text-lg'>
                      <p>{trait}</p>
                    </div>
                    
                  )
                  
                })
                :
                bangla_traits.map((trait)=> {
                  return(
                    <div key={trait} className='bg-button_bg text-center italic rounded-xl lg:p-4 p-3 text-sm lg:text-lg'>
                      <p>{trait}</p>
                    </div>
                    
                  )
                  
                })
                }
              </div>
            </div>
          </div>
          {/* 2nd column */}
          <div className='w-full h-full justify-center flex lg:my-0 my-4'>
            <div>
              
            <div className='bg-secondary lg:max-w-[580px] justify-center lg:w-full md:w-[500px] w-[350px] rounded-xl lg:p-10 p-6'>
              {/* Our Mission Title */}
              <div className='flex justify-left lg:px-6'>
                <h2 className='font-medium'>
                  {english ? 'Our Mission' : 'আমাদের লক্ষ্য'}
                </h2>
              </div>
              {/* Our Mission Text */}
              <div className='lg:px-6 lg:text-xl tracking-wider font-light'>
                {english ? 
                <p className="my-[4%]">
                IDEA <span className='lg:text-base text-sm'>CSC</span>, we strive to cultivate enduring partnerships founded on qualities of service, trust, collaboration, and the relentless pursuit of Construction and Engineering innovation. We deploy the expertise and experience of our established US based Engineering parent company to empower our initiatives. Collectively, we align our efforts to implement client-specific and sustainable building system solutions, as well as educate and empower the Construction and Engineering community in Bangladesh.
                </p> 
                :
                <p className="my-[4%]">
                  IDEA <span className='lg:text-base text-sm'>CSC</span>, আমরা মানসম্মত পরিষেবা, বিশ্বাস, সহযোগিতা এবং নির্মাণ ও প্রকৌশল উদ্ভাবনের নিরলস সাধনার উপর প্রতিষ্ঠিত স্থায়ী অংশীদারিত্ব গড়ে তোলার চেষ্টা করি। আমরা আমাদের উদ্যোগগুলিকে শক্তিশালী করতে আমাদের প্রতিষ্ঠিত ইউএস-ভিত্তিক ইঞ্জিনিয়ারিং মূল কোম্পানির দক্ষতা এবং অভিজ্ঞতা কাজে লাগিয়ে থাকি। সম্মিলিতভাবে, আমরা ক্লায়েন্ট দ্বারা নির্দিষ্ট এবং টেকসই বিল্ডিং সিস্টেম সমাধান বাস্তবায়নের পাশাপাশি বাংলাদেশের নির্মাণ ও প্রকৌশল সম্প্রদায়কে শিক্ষিত ও ক্ষমতায়নের জন্য সমন্বিত প্রচেষ্টা করি।
                </p>
                }
                {english ? 
                <p className="mt-[4%]">
                Our integrated Construction and Engineering approach embraces technology as we aim to develop efficiencies and improve the Architectural Engineering industry. Together, we are pushing boundaries ensuring mutual growth and success for our clients and collaboration partners.
                </p>
                :
                <p className="mt-[4%]">
                  আমাদের সমন্বিত নির্মাণ এবং প্রকৌশল পদ্ধতি প্রযুক্তিকে সাদরে গ্রহন করে কারণ আমরা দক্ষতার বিকাশ এবং স্থাপত্য প্রকৌশল শিল্পকে উন্নত করার লক্ষ্য রাখি। আমরা আমাদের ক্লায়েন্ট এবং সহযোগী অংশীদারদের পারস্পরিক প্রবৃদ্ধি এবং সাফল্য নিশ্চিত করার জন্য একসাথে সীমানা বিস্তৃত করছি।
                </p>
                }
              </div>
            </div>
            <div className='flex justify-center bg-secondary lg:max-w-[580px] lg:w-full md:w-[500px] w-[350px] lg:mt-10 mt-4 p-4 items-end rounded-xl' onMouseOver={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
              <Link href={"/team"}>
                <div className='relative items-center justify-center  p-3'>
                  <Image src={'/assets/idea-vest.jpg'} width={400} height={100} alt={'vest'} className={show ? 'rounded-xl' : 'rounded-xl motion-safe:animate-pulse'}/>
                  <div className={show ? "absolute bg-cover bottom-3 top-3 left-3 right-3 bg-dark_shadow/80 rounded-xl" : "hidden"}>
                    <h1 className='flex items-center justify-center h-full text-2xl animate-none text-light_text'>
                      {english ? 'Click to See Our Team' : 'আমাদের দল দেখতে ক্লিক করুন'}
                    </h1>
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