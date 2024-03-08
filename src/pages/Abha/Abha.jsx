import React from 'react';
// import ArrowComp from '../ArrowComp';
import Button from '../../components/Button/Button'
import abha1 from '../../Assets/Abha/1.svg';
import abha2 from '../../Assets/Abha/2.svg';
import abha3 from '../../Assets/Abha/3.svg';
import { Link } from 'react-router-dom';
import arrow from '../../Assets/icon/arrow.svg'
const Abha = () => {
  return (
    <div className='pt-32 min-h-screen w-full md:container md:mx-auto'>

      <div className=' mx-4 md:mx-16 my-7 '>
        <img className='py-2' src={arrow} alt="" />
        <h1 className='text-xl md:text-3xl font-medium all-text mt-5'>Discover Ayushman Bharat Health Account (ABHA)</h1>
        <p className=' text-xs md:text-base font-normal'>"ABHA, under the Ayushman Bharat Digital Mission, is a groundbreaking initiative by the Indian government. It offers individuals a unique health identifier and a centralized digital health account. Learn more about the benefits and how ABHA is revolutionizing healthcare."</p>
      </div>
      <div className=' mx-4 md:mx-16 my-6'>
        <h1 className=' text-xl font-semibold my-4'>Key Features</h1>
        <div className=' flex flex-col md:flex-row gap-10 justify-between'>
          <div className='flex flex-col justify-center items-center'>
            <img src={abha1} alt="" />
            <p className=' text-xs md:text-base font-normal'>Unique Health Identifier (UHI)</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={abha2} alt="" />
            <p className='text-xs md:text-base font-normal'>Centralized Health Account</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={abha3} alt="" />
            <p className='text-xs md:text-base font-normal'>Ayushman Bharat Health ID</p>
          </div>
        </div>
      </div>
      <div className=' mx-4 md:mx-16 my-10'>
        <h1 className=' text-xl font-semibold my-4'>How to Register</h1>
        <div>
          <ul className=' mx-5 flex flex-col gap-3'>
            <li className=' list-disc text-xs md:text-base  '>
              <span className='font-semibold'>Step 1: </span> Visit the official Ayushman Bharat website
            </li>
            <li className=' list-disc text-xs md:text-base '>
              <span className='font-semibold'>Step 2:</span> Follow the registration process to create your ABHA account.
            </li>
            <li className=' list-disc text-xs md:text-base '>
              <span className='font-semibold'>Step 3:</span> Verify your identity and link your health records to your unique identifier.
            </li>
          </ul>
        </div>
        <div className=' flex items-center justify-center mt-12'>
          <Link to={'https://abha.abdm.gov.in/abha/v3/'} target="_blank">
          <Button text='Explore Abha on Official Website' color='#6CEBC6' />
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Abha;
