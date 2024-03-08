import React, { useState } from 'react'
import footerimg from '../../Assets/Svg/footer.svg'
import location from '../../Assets/icon/location.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  
  return (
    <footer className="bg-[#BCBCBC] w-full overflow-hidden text-[#000000]">
      <div className="grid md:grid-cols-3  lg:container lg:mx-auto lg:py-6 lg:px-16 ">
        {/* images logo */}
        <div className="col-span-4 md:col-span-1 px-4 py-4  md:p-5 ">
          <a href="#" className="flex items-center">
            <img className='' src={footerimg} alt="FlowBite Logo" />
          </a>
          <p className=' py-5 text-base'>Join us on this transformative journey as we redefine healthcare together. </p>

          <div className='hidden md:block'>
            <div className="flex items-center flex-wrap gap-3 w-full flex-row">
              <a href="#" className="md:w-fit bg-[#11111E]  text-white rounded-lg inline-flex items-center justify-center  py-1 md:py-[3px] ">
                <i className="fa-brands fa-google-play text-xl md:text-3xl px-1 "></i>
                <div className="">
                  <div className="text-[10px] uppercase md:tracking-widest">Go it on</div>
                  <div className="-mt-1 text-nowrap text-sm md:text-xl font-normal">Googel Play</div>
                </div>
              </a>
              <a href="#" className=" md:w-fit bg-[#11111E]  text-white rounded-lg inline-flex items-center px-4 lg:px-3 py-[3px] ">
                <i className="fa-brands fa-apple  text-xl md:text-4xl px-1 md:px-2"></i>
                <div className="text-center rtl:text-right ">
                  <div className="text-[10px] md:tracking-widest">Download on the</div>
                  <div className="-mt-1  font-sans text-sm md:text-xl font-normal">App Store</div>
                </div>
              </a>
            </div>
            <div className='flex lg:justify-start gap-5 py-5  px-3'>
              <div className='bg-[#4BBE9E] py-[5px] px-[8px] shadow-2xl rounded-lg'>
                <button>
                  <i className="fa-brands fa-facebook-f text-xl"></i>
                </button>
              </div>
              <div className='bg-[#4BBE9E]  py-[5px] px-[8px] shadow-2xl rounded-lg'>
                <button>
                  <i className="fa-brands fa-x-twitter text-xl"></i>
                </button>
              </div>
              <div className='bg-[#4BBE9E]  py-[5px] px-[8px] shadow-2xl rounded-lg'>
                <button>
                  <i className="fa-brands fa-linkedin-in text-xl"></i>
                </button>
              </div>
              <div className='bg-[#4BBE9E]  py-[5px] px-[8px] shadow-2xl rounded-lg'>
                <button>
                  <i className="fa-brands fa-instagram text-lg"></i>
                </button>
              </div>
              <div className='bg-[#4BBE9E]  py-[5px] px-[8px] shadow-2xl rounded-lg'>
                <button>
                  <i className="fa-brands fa-youtube text-xl"></i>
                </button>
              </div>

            </div>
            <div className="">
              <p className="text-base  ">© Copyright 2024 HealTether. All Rights Reserved</p>
            </div>
          </div>
        </div>
        {/* sitemap section */}
        <div className='col-span-4 md:col-span-1 p-3 md:p-5'>
          <h2 className="mb-2 text-base font-semibold  ">Sitemap</h2>
          <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
            <div className=' text-[16px]   font-normal'>
              <p className="py-1">
                <Link to={'/'} className="hover:underline">Home</Link>
              </p>
              <p className="py-1">
                <Link to={'/about'} className="hover:underline">About Us</Link>
              </p>
              <p className="py-1">
                <Link to={'/product'} className="hover:underline">Products</Link>
              </p>
              <p className="py-1">
                <Link to={'/'} className="hover:underline">Help</Link>
              </p>
            </div>
            <div className=' text-[16px]   font-normal'>
              <p className="py-1">
                <Link to={'/'} className="hover:underline">Privacy Policy</Link>
              </p>
              <p className="py-1">
                <Link to={'/'} className="hover:underline">FAQs</Link>
              </p>
              <p className="py-1">
                <Link to={'/'} className="hover:underline">Complaints</Link>
              </p>
            </div>
          </div>
        </div>
        {/* contact section */}
        <div className='col-span-4 md:col-span-1  p-3 md:p-5 '>
          <h2 className="mb-2 text-base font-semibold ">Contact</h2>
          <ul className=" font-normal text-[16px] ">
            <li className="py-2 ">
              <Link to={'/'} className="hover:underline "><i className="fa-regular fa-envelope-open me-2 text-xl"></i>hello@healtether.com</Link>
            </li>
            <li className='py-2 '>
              <a href="#" className="hover:underline"><i className="fa-solid fa-phone me-2 text-xl"></i>+91-7853040929</a>
            </li>
            <li className='py-2 '>
              <Link to={'/'} className="hover:underline flex items-center  gap-3"><img src={location} alt="" />
                <p>No.12(2) Veerazhagamman Street
                  Bodinayakanur, Theni, Tamil Nadu</p>
              </Link>
            </li>
            <li className='py-2 '>
              <Link to={'/'} className="hover:underline flex items-center  gap-3"><i className="fa-regular fa-clock me-2 text-xl"></i>
              <p>Open Hrs:  </p>
              
              </Link>
              <p className='ml-10'>Mon-Sat: 10AM - 10 PM</p>
            </li>
          </ul>
        </div>
        {/* mobile view show  */}
        <div className='block md:hidden col-span-4 md:col-span-1  p-3 '>
          <div className="items-center flex gap-3 w-full flex-row">
            <Link to={'/'} className="md:w-fit bg-[#11111E]  text-white rounded-lg inline-flex items-center justify-center px-3 py-1 md:py-[3px] ">
              <i className="fa-brands fa-google-play text-xl md:text-3xl px-1 md:px-1"></i>
              <div className=" rtl:text-right">
                <div className="text-[10px] uppercase md:tracking-widest">Go it on</div>
                <div className="-mt-1 text-nowrap text-sm md:text-xl font-normal">Googel Play</div>
              </div>
            </Link>
            <Link to={'/'} className=" md:w-fit bg-[#11111E]  text-white rounded-lg inline-flex items-center  px-3 py-[3px] ">
              <i className="fa-brands fa-apple  text-xl md:text-3xl px-1 md:px-2"></i>
              <div className="text-center rtl:text-right ">
                <div className="text-[10px] md:tracking-widest">Download on the</div>
                <div className="-mt-1  font-sans text-sm md:text-xl font-semibold">App Store</div>
              </div>
            </Link>
          </div>
          <div className='flex lg:justify-start gap-3 p-3'>
            <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
              <button>
                <i className="fa-brands fa-facebook-f"></i>
              </button>
            </div>
            <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
              <button>
                <i className="fa-brands fa-twitter"></i>
              </button>
            </div>
            <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
              <button>
                <i className="fa-brands fa-linkedin-in"></i>
              </button>
            </div>
            <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
              <button>
                <i className="fa-brands fa-instagram"></i>
              </button>
            </div>
            <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
              <button>
                <i className="fa-brands fa-youtube"></i>
              </button>
            </div>
          </div>
          <div className="">
            <p className="text-sm md:text-base text-center text-[#FDFCFD] ">© Copyright 10 HealTether. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
