import React from 'react'
import { Carditem } from '../../data/Carditem'

const Card = () => {
    return (
        <div className='w-full md:container mx-[110px] flex items-center justify-center max-sm:mx-[10px] max-md:mx-[50px] max-sm:flex-col gap-5 mt-5 '>
            {
                Carditem.map((item, index) => (
                    <div key={item.id} className={`w-full max-md:w-60 lg:w-[22rem] mr-14 max-md:mr-8 flex items-center lg:px-4 gap-2  ${index !== Carditem.length - 1 ? 'border-[#E4E0F3] border-r-2 max-sm:border-b-2 ' : ''}  max-sm:flex-col max-sm:border-r-0 max-sm:w-32 max-sm:mt-5`}>
                        <div className='flex flex-col gap-6 items-center '>
                            <p className='text-sm text-[#E4E0F3] lg:text-[28px]'>{item.name}</p>
                            <h1 className='font-bold text-[#E4E0F3] text-xl lg:text-[40px]'>{item.record}</h1>
                            <p className='text-base text-[#E4E0F3] lg:text-[16px] max-sm:mb-10'>{item.fas}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Card
