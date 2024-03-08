import React from 'react';
import data from '../../data/Features';

const Features = () => {
    return (
        <div className='w-full container mx-auto max-w-7xl mt-[30px] '>
            <h1 className='text-[28px] font-bold px-6 py-3 text-center all-text md:px-20'>Our Features</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-1 w-full md:px-5 lg:px-20 max-sm:grid-cols-1'>
                {data.map((item) => (
                    <div key={item.img} className='w-[45vw] md:w-[245px] lg:w-[350px] flex flex-col h-auto lg:h-[300px] max-sm:w-[300px] max-sm:ml-8 rounded-lg py-5 lg:py-20 px-2 md:px-4 gap-3 my-3'>
                        <div>
                            <img className='object-cover' src={item.img} alt="" />
                        </div>
                        <div className="text-left">
                            <h1 className='text-[18px] md:text-xl font-bold  '>{item.title}</h1>
                            <p className='text-[12px] text-[#9898A3] md:text-[14px] font-normal leading-5 mt-2'>{item.des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
