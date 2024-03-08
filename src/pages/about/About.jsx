import React from 'react'
import { Link } from 'react-router-dom'
import Connect_form from '../../components/Connect/Connect_form'
import img3 from '../../Assets/About/Linkedin.png'
import img1 from '../../Assets/About/ab1.jpg'
import img2 from '../../Assets/About/ab2.jpg'
import star from '../../Assets/About/growing.png'
import about from '../../Assets/About/aboutlogo.png'


const About = () => {
  return (
    <div className='md:container md:mx-auto '>
      {/* //herr */}
      <div className='flex items-center my-16 w-full flex-col-reverse md:flex-row md:justify-between  md:py-14  md:ps-20'>
        <div className='w-full lg:w-1/2  py-3  px-5 md:px-2 '>
          <div className='hidden  md:block flex-col  '>
            <Link to={'/'}><i className="fa-solid fa-arrow-left text-3xl pb-10"></i></Link>
            <h1 className='text-2xl all-text  py-1 font-medium'>About us</h1>
          </div>
          <p className='text-justify text-base md:text-lg tracking-tight'>At HealTether, we're on a mission to revolutionize healthcare, making it convenient, accessible, and high-quality for everyone. Our innovative platform empowers individuals by bridging the gap between patients and healthcare providers, putting the power of healthcare in the palm of your hand.</p>
          <p className='text-justify text-base md:text-lg tracking-tight'>Our mission is to create a seamless connection between individuals and a network of qualified medical professionals, providing access to a wide range of medical services while offering personalized care tailored to specific needs.</p>
        </div>
        <div className='w-full lg:w-1/2   '>
          <div className='flex sm:block md:hidden flex-col   p-4'>
            <i className="fa-solid fa-arrow-left"></i>
            <h1 className='text-2xl  py-1 font-medium'>About us</h1>
          </div>
          <div className='w-60 flex items-center justify-center mx-auto'>
            <img className='w-full' src={about} alt="" />
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='text-center px-5'>
          <h2 className='text-2xl font-medium'>Our Vision</h2>
          <p className='text-[16px] py-2'>Empowering Healthcare, Transforming Lives</p>
          <p className='text-[16px] pb-10'>Our vision is to be a beacon of innovation and excellence in the healthcare industry. We aspire to redefine the way healthcare is delivered, experienced, and managed, ultimately empowering clinics and healthcare professionals to transform lives through technology.</p>
        </div>
        {/* star */}
        <div className='py-20'>
        <h2 className='text-2xl text-center pb-5 font-medium'>Our Core Values</h2>
        <div className='w-full flex items-center justify-between flex-wrap px-3 gap-5 md:gap-0 md:px-10'>
          <div className='w-full md:w-[33%]'>
            <div className='flex items-center gap-2'>
              <img className='w-7' src={star} alt="" />
              <span className='text-[20px] font-medium'>Partnership</span>
            </div>
            <p className='text-[14px]'>We view your clinic as a partner, not just a client. Our commitment is to walk hand-in-hand with you, ensuring our solution aligns with your unique needs and goals.</p>
          </div>
          <div className='w-full md:w-[33%]'>
            <div className='flex items-center gap-2'>
              <img className='w-7' src={star} alt="" />
              <span className='text-[20px] font-medium'>Partnership</span>
            </div>
            <p className='text-[14px]'>We view your clinic as a partner, not just a client. Our commitment is to walk hand-in-hand with you, ensuring our solution aligns with your unique needs and goals.</p>
          </div>
          <div className='w-full md:w-[33%]'>
            <div className='flex items-center gap-2'>
              <img className='w-7' src={star} alt="" />
              <span className='text-[20px] font-medium'>Partnership</span>
            </div>
            <p className='text-[14px]'>We view your clinic as a partner, not just a client. Our commitment is to walk hand-in-hand with you, ensuring our solution aligns with your unique needs and goals.</p>
          </div>
        </div>
        </div>

        
      </div>

      {/* //box */}
    
        <h1 className='w-full text-3xl text-center font-medium'>A sneak-peek into our Team</h1>
        <div className='flex w-full justify-center gap-10 py-5 flex-wrap px-5 md:px-0'>
          <div className='card  md:w-[45%]'>
            <div className='img'>
              <img src={img1} alt="" />
            </div>
            <div className='content'>
              <h1 className='text-xl md:text-2xl font-semibold py-1'>Dr. Surya Kapoor - Founder & CEO</h1>
              <p className='text-sm md:text-[18px] leading-7'>Dr. Kapoor is a seasoned healthcare professional with a background in internal medicine. She envisioned HealTether to bridge the gap between patients and healthcare providers, driven by her passion for making healthcare more accessible.</p>
              <div className='p-3 bg-white rounded-full shadow-2xl w-14'>
              <img src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className='card md:w-[45%]'>
            <div className='card'>
              <div className='img'>
                <img src={img2} alt="" />
              </div>
              <div className='content'>
                <h1 className='text-xl md:text-2xl font-semibold py-1'>Dr. Aisha Khan</h1>
                <p className='text-sm md:text-[18px] leading-7'>Dr. Kapoor is a seasoned healthcare professional with a background in internal medicine. She envisioned HealTether to bridge the gap between patients and healthcare providers, driven by her passion for making healthcare more accessible.</p>
                <div className='p-3 bg-white rounded-full shadow-2xl w-14'>
              <img src={img3} alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      <Connect_form />
    </div>
  )
}

export default About
