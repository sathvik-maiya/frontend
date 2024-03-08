import React from 'react'

const Connect = () => {
    return (
        <div className='lg:container flex items-center flex-col lg:mx-auto w-full my-5'>
            <form className="w-full max-w-6xl mx-auto bg-[#FDFCFD] shadow-2xl rounded-lg md:px-10 py-4">
                <h1 className='text-2xl md:text-[2.2rem] font-semibold all-text text-black px-3  py-8'>Connect with us</h1>
                <div className="flex flex-wrap w-full mb-6">
                    <div className="w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-[18px] font-medium mb-2" htmlFor="grid-first-name">
                            Your name
                        </label>
                        <input className="appearance-none block w-full bg-[#F8F7FC] text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your name here" />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>


                    <div className="w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block md:tracking-wide text-[18px] font-medium md:mb-2" htmlFor="grid-first-name">
                            Mobile no.
                        </label>
                        <input className="w-full bg-[#F8F7FC] text-gray-700 border rounded py-3 px-4 mb-3   focus:outline-none focus:bg-white" id="grid-first-name" type="tel" placeholder="Enter your phone number" />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-[18px] font-medium mb-2" htmlFor="grid-first-name">
                            Clinic/Hospital
                        </label>
                        <input className="appearance-none block w-full bg-[#F8F7FC] text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your Speciality" />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-[18px] font-medium mb-2" htmlFor="grid-first-name">
                            Location
                        </label>
                        <input className="appearance-none block w-full bg-[#F8F7FC] text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your location" />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className='flex items-center justify-center w-full py-2'>
                        <button className='btn bg-[#6CEBC6] p-2 rounded-md px-7 text-black font-medium'>
                            Submit
                        </button>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default Connect
