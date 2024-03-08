import React from 'react'

import appointment from "../../Assets/people/appointments.png";
import chats from "../../Assets/people/Chat.png";
import Analysis from "../../Assets/people/Analysis1.png";

function Detail() {
  return (
    <div className='flex flex-col w-[90vw] m-auto mt-[40px]'>
         <h1 className='m-auto mt-8 text-[28px] text-[#FFFFFF] mb-10'>Featuring</h1>
        <div className='flex flex-row gap-20 max-sm:flex-col-reverse'>
           <div className='flex flex-col gap-12'>
        <div className='flex flex-col' >
            <div className='text-[#52CFAC] text-[28px] w-[30vw] pt-5 pb-5 pl-5 border-white border-l-4'>
                      Streamlined Appointment Management
            </div>
            <div className='mt-5 text-[16px] text-[#F6F6F6]'>
                Effortlessly schedule, cancel, and reschedule appointments with our user-friendly interface. Our advanced scheduling system allows for quick and efficient appointment management, ensuring your clinic operates seamlessly.

            </div>
        </div>
         <div  className='flex flex-col'>
           <div className='text-[#52CFAC] text-[28px] w-[35vw] pt-5 pb-5 pl-5 border-white border-l-4'>
            Follow-Up Appointments Made Easy
           </div>
           <div className='mt-5 text-[16px] text-[#F6F6F6]'>
            Never miss a follow-up again! Our system allows you to schedule and manage follow-up appointments effortlessly, ensuring continuity of care for your patients.
           </div>
         </div>
            
           </div>
   
        <div>
            <img src={appointment} className='w-[125rem] h-[30rem] max-sm:w-[20rem] max-sm:h-[20rem]'/>
        </div>
        </div>
  
      
      
      
      <div className='flex flex-row gap-20 mt-20 max-sm:flex-col'>

       <div>
              <img src={chats} className='w-[100rem] h-[30rem] max-sm:w-[20rem] max-sm:h-[20rem]'/>
       </div>
          <div  className='flex flex-col'>
           <div className='text-[#52CFAC] text-[28px] w-[35vw] pt-5 pb-5 pl-5 border-white border-l-4 mt-[80px]'>
            WhatsApp Integration for Enhanced Communication
           </div>
           <div className='mt-5 text-[16px] text-[#F6F6F6] '>
          Take patient communication to the next level! 

           </div>
           <div className='mt-5 text-[16px] text-[#F6F6F6] mt-5'>
            Our solution allows doctors and staff members to book appointments, send prescriptions, receipts, and appointment reminders directly through WhatsApp. 

           </div>
           <div className='mt-5 text-[16px] text-[#F6F6F6] mt-5'>
Provide personalized and effective healthcare services with ease.
           </div>
         </div>

      </div>
      



   <div className='flex flex-row gap-20 mt-20 mb-32 max-sm:flex-col-reverse'>
           <div className='flex flex-col gap-12'>
        <div className='flex flex-col' >
            <div className='text-[#52CFAC] text-[28px] w-[30vw] pt-5 pb-5 pl-5 border-white border-l-4'>
                   Data-Driven Insights
            </div>
            <div className='mt-5 text-[16px] text-[#F6F6F6] mb-2'>
                  Empower your clinic with valuable insights! 
            </div>
            <div className='mt-5 text-[16px] text-[#F6F6F6]'>
            
Access detailed analytics reports on appointments, payments, and patient data to make informed decisions and optimize your clinic's performance.

            </div>
        </div>
         <div  className='flex flex-col'>
           <div className='text-[#52CFAC] text-[28px] w-[35vw] pt-5 pb-5 pl-5 border-white border-l-4'>
            Secure Payment Processing
           </div>
           <div className='mt-5 text-[16px] text-[#F6F6F6]'>
         Receive payments securely and effortlessly with our integrated payment processing system. Say goodbye to the hassles of traditional payment methods and offer your patients a seamless payment experience.
           </div>
         </div>
            
           </div>
   
        <div>
            <img src={Analysis} className='w-[125rem] h-[30rem] max-sm:w-[20rem] max-sm:h-[20rem]'/>
        </div>
        </div>
    </div>
  )
}

export default Detail
