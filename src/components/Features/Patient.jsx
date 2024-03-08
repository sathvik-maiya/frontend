import React from 'react'
import Button from '../Button/Button'

const Patient = () => {
    return (
         <div className='bg-people'>
        <div className=' w-full    py-5 md:p-16 px-5 md:px-10 lg:px-20 items-center flex flex-col '>
        
               <h1 className='text-[32px] md:text-[2.2rem] all-text font-semibold text-white max-sm:text-center max-sm:mt-[20px] max-md:text-center max-md:mt-[20px]'>Ready to embark on a journey of transformative healthcare </h1>
            <h1  className='text-[32px] md:text-[2.2rem] all-text font-semibold text-white max-sm:mb-[30px]'>experiences?</h1>
            <p className='text-[14px] text-balance p-1 text-[#FDFCFD] max-sm:text-center max-sm:mb-4 max-md:text-center'> Our SaaS solution is not just a tool; it's a partner in your journey towards providing exceptional healthcare services.</p>
            <div className='flex items-center justify-center md:justify-start mt-[8px] max-sm:mb-6 max-md:mb-6' >
            <Button text='Get Started' color='#6CEBC6'/>
            </div>
         </div>
        </div>

    )
}

export default Patient
