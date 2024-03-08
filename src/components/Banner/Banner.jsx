import React, { useEffect } from 'react'
import laptop from '../../Assets/Home/1.svg';
import mobile from '../../Assets/Home/mobile.svg';
import tab from '../../Assets/Home/tab.svg';
import Card from '../Card/Card'
import Button from '../Button/Button'

const Banner = () => {

    let interval;
    useEffect(() => {
        let images = document.querySelectorAll('.animateee');
        let animationCount = 1;
            interval = setInterval(() => {
            images.forEach((e) => {
                e.classList.remove('animateee1');
            });
            animationCount === 3 ? (animationCount = 0) : null;
            images[animationCount++].classList.add('animateee1');
        }, 2500);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className='2xl:container 2xl:mx-auto w-full bg-home overflow-hidden py-10 md:py-24 max-sm:mt-[65px] mt-0'>
            <div className=" w-full flex flex-col-reverse md:flex-row items-stretch md:justify-around md:10  py-5 md:pt-10 mx-auto h-[60rem] md:h-auto">
                <div className="flex  items-center py-10 md:w-1/2 px-5 md:px-5 md:pb-20 md:pt-10  lg:px-[4.5rem] ">
                    <div className="text-left ">
                        <h2 className="text-[48px] all-text font-bold leading-[3.7rem]  text-[#FFFFFF] md:text-[48px] max-sm:text-[40px]
                        max-sm:text-center max-md:text-center">
                            Let's elevate your clinic together!
                        </h2>
                        <p style={{ lineHeight: "1.5rem" }} className="w-full text-[16px]  text-[#FFFFFF] sm:text-lg md:text-[16px] mt-[20px] mb-[5px] max-sm:text-center max-sm:mb-[15px] max-md:text-center">
                            Our innovative solution is designed to seamlessly integrate into your clinic, transforming the way you manage appointments, streamline operations, and prioritize patient care.
                        </p>

                        <div className="flex flex-col justify-around py-2 gap-5 w-full  ">
                            <div className='flex items-center justify-center md:justify-start '>
                                <Button text='Get Started' color='#6CEBC6' />
                            </div>
                            <p className='text-[14px] md:text-sm pt-5 text-[#FFFFFF] text-center md:text-left'>Our app is out in the market. Download now!</p>
                        </div>
                        <div className="items-center flex gap-3  w-full flex-row justify-center md:justify-start mt-[4px]">
                            <a href="#" className="md:w-fit bg-[#3C3C3C]  text-white rounded-lg inline-flex items-center justify-center px-3 py-1 md:py-[2px] ">
                                <i className="fa-brands fa-google-play text-xl md:text-3xl px-1 md:px-1"></i>
                                <div className=" rtl:text-right">
                                    <div className="text-[10px] uppercase md:tracking-widest">Go it on</div>
                                    <div className="-mt-1 text-nowrap text-sm md:text-xl font-normal">Googel Play</div>
                                </div>
                            </a>
                            <a href="#" className=" md:w-fit bg-[#3C3C3C]  text-white rounded-lg inline-flex items-center  px-3 py-[2px] ">
                                <i className="fa-brands fa-apple  text-2xl md:text-3xl px-1 md:px-2"></i>
                                <div className="text-center rtl:text-right ">
                                    <div className="text-[10px] md:tracking-widest">Download on the</div>
                                    <div className="-mt-1  font-sans text-sm md:text-xl font-semibold">App Store</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden flex-1 relative w-full -mt-5">
                    <img className="animateee animateee1 absolute md:-left-5 " src={laptop} />
                    <img className="animateee" src={tab}  />
                    <img className="animateee" src={mobile} />
                </div>
            </div>
            <div className='px-2'>
                <Card />
            </div>
        </div>
    )
}

export default Banner
