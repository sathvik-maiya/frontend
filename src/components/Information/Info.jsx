import React from 'react'
import Detail from "./Detail.jsx"
import video from "../../Assets/people/Video.png";

const Info = () => {
  return (
    <div className=' w-full h-auto bg-info mt-[50px]'>
        <div className='flex flex-col items-center all-text pt-[30px] w-[90vw] m-auto '> 
            <div className='text-[28px] text-[#FDFCFD] max-sm:text-center'>
           For individual practitioners, clinics and hospitals
        </div>
        <div className='text-[16px] text-center text-[#FDFCFD]  mt-[10px] max-sm:text-center'>
          Streamline your practice management with features that help you maintain and analyze appointment records, payment records, and even keep track of your clinic staff members—all in one centralized platform.
        </div>
        <div className='text-[40px] text-[#52CFAC] mt-[40px] font-bold max-sm:text-center'>
         FAST, SMART & SECURE
        </div>
        <div className='mt-[40px]'>
            <img src={video} />
</div>
        </div>
       <Detail/>
    </div>
  )
}

export default Info
