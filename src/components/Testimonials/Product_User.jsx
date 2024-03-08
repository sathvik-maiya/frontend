import React from 'react'
import img1 from '../../Assets/Testimonial/1.png'
import img2 from '../../Assets/Testimonial/2.png'
import img3 from '../../Assets/Testimonial/3.png'
import img4 from '../../Assets/Testimonial/4.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';


import './our.css'
const Our_users = () => {
  return (

    <div className='p-2 md:p-11 '>
      <h1 className='text-[28px] m-auto text-center all-text max-md:mt-10'>A word from our product users - </h1>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        loop={true}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,

        }}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper "
      >
        <SwiperSlide data-hash="slide3">
          <section className="">
            <div className="md:container flex flex-col mx-auto items-center justify-center py-10 md:flex-row max-md:flex-row lg:justify-evenly max-md:gap-4 max-sm:flex-col">
              <div className=" md:w-[38vw] max-md:w-[408vw] max-md:ml-[60px] max-md:h-[80vh] max-sm:w-[95vw] max-sm:ml-[0px] max-sm:h-[60vh]">
            
                 <img src={img4} alt="" className="object-cover " />
              </div>

              <div className="flex flex-col  md:w-1/2 text-start  md:text-left  p-3 md:px-10 ">
                <p className="mt-6 mb-1 text-base md:text-[18px] max-md:text-[16px]  max-md:text-[#2B2B2B]  tracking-widest">"HealTether has transformed the way I manage my cardiology practice. The streamlined appointment scheduling and telemedicine features have saved me valuable time. My patients appreciate the convenience, and I can focus more on delivering personalized care. It's a game-changer in cardiac healthcare."
                </p>
                <h1 className='text-xl my-3 font-medium'>Dr. Sarah Thompson, Cardiologist</h1>
              </div>

            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
          <section className="">
            <div className="md:container flex flex-col mx-auto items-center justify-center py-10 md:flex-row max-md:flex-row lg lg:justify-evenly max-md:gap-4 max-sm:flex-col">
              <div className=" md:w-[38vw] max-md:w-[408vw] max-md:ml-[60px] max-md:h-[80vh] max-sm:w-[95vw] max-sm:ml-[0px] max-sm:h-[60vh]">
                <img src={img2} alt="" className="object-cover " />
              </div>

              <div className="flex flex-col  md:w-1/2  text-start  md:text-left max-md:text-[16px]  max-md:text-[#2B2B2B] p-3 md:px-10 ">
                <p className="mt-6 mb-1 text-base md:text-[18px]   tracking-widest">"HealTether has transformed the way I manage my cardiology practice. The streamlined appointment scheduling and telemedicine features have saved me valuable time. My patients appreciate the convenience, and I can focus more on delivering personalized care. It's a game-changer in cardiac healthcare."
                </p>
                <h1 className='text-xl my-3 font-medium'>Dr. Sarah Thompson, Cardiologist</h1>
                
              </div>

            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide  data-hash="slide3">
          <section className="">
            <div className="md:container flex flex-col mx-auto items-center justify-center py-10 max-md:flex-row lg md:flex-row lg:justify-evenly max-md:gap-4 max-sm:flex-col">
              <div className="md:w-[38vw] max-md:w-[408vw] max-md:ml-[60px] max-md:h-[80vh] max-sm:w-[95vw] max-sm:ml-[0px] max-sm:h-[60vh] ">
                <img src={img3} alt="" className="object-cover " />
              </div>

              <div className="flex flex-col  md:w-1/2 text-start max-md:text-[16px]  max-md:text-[#2B2B2B] md:text-left  p-3 md:px-10 ">
                <p className="mt-6 mb-1 text-base md:text-[18px]    tracking-widest">"HealTether has transformed the way I manage my cardiology practice. The streamlined appointment scheduling and telemedicine features have saved me valuable time. My patients appreciate the convenience, and I can focus more on delivering personalized care. It's a game-changer in cardiac healthcare."
                </p>
                <h1 className='text-xl my-3 font-medium'>Dr. Sarah Thompson, Cardiologist</h1>
                 
              </div>

            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide  data-hash="slide3">
          <section className="">
            <div className="md:container flex flex-col mx-auto items-center justify-center py-10 max-md:flex-row md:flex-row lg:justify-evenly max-md:gap-4 max-sm:flex-col">
              <div className="md:w-[38vw] max-md:w-[408vw] max-md:ml-[60px] max-md:h-[80vh] max-sm:w-[95vw] max-sm:ml-[0px] max-sm:h-[60vh] ">
                    <img src={img1} alt="" className="object-cover " />
              </div>

              <div className="flex flex-col  md:w-1/2 text-start  md:text-left  p-3 md:px-10  ">
                <p className="mt-6 mb-1 text-base md:text-[18px] max-md:text-[16px]  max-md:text-[#2B2B2B]  tracking-widest">"HealTether has transformed the way I manage my cardiology practice. The streamlined appointment scheduling and telemedicine features have saved me valuable time. My patients appreciate the convenience, and I can focus more on delivering personalized care. It's a game-changer in cardiac healthcare."
                </p>
                <h1 className='text-xl my-3 font-medium'>Dr. Sarah Thompson, Cardiologist</h1>
                
              </div>

            </div>
          </section>
        </SwiperSlide>
        <div className="slider-controler ">
          <div className="swiper-button-prev slider-arrow">
            <i className="fa-solid fa-angle-left text-2xl text-black"></i>
          </div>
          <div className="swiper-button-next slider-arrow">
            <i className="fa-solid fa-angle-right text-2xl text-black"></i>
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </Swiper>
    </div>
  )
}

export default Our_users
