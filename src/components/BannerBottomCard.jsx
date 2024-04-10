import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const BannerBottomCard = () => {
    return (
        <>
            <div className=" w-[100%] bg-[#112C41]">
              <div className="container mx-auto">
                    <div className="card-main grid lg:grid-cols-3 grid-cols-1">
                        <div className="banner-card flex justify-between items-end lg:border-r-2 border-b-2 lg:border-b-0 p-10 border-gray-900">
                            <div className='card-content'>
                                <div className="number text-gray-500 text-3xl font-bold">01</div>
                                <h3 className='text-[1.6rem] text-gray-200 font-bold'>We stay connected</h3>
                            </div>
                            <div className="card-arrow">
                                <IoIosArrowForward className='w-10 h-10 border border-gray-300 bg-transparent rounded-full p-2 text-white' />
                            </div>
                        </div>
                        <div className="banner-card flex justify-between items-end lg:border-r-2  lg:border-b-0 border-b-2 p-10 border-gray-900">
                            <div className='card-content'>
                                <div className="number text-gray-500 text-3xl font-bold">02</div>
                                <h3 className='text-[1.6rem] text-gray-200 font-bold'>We believe in diversity & inclusion</h3>
                            </div>
                            <div className="card-arrow">
                                <IoIosArrowForward className='w-10 h-10 border border-gray-300 bg-transparent rounded-full p-2 text-white' />
                            </div>
                        </div>

                        <div className="banner-card flex justify-between items-end p-10">
                            <div className='card-content'>
                                <div className="number text-gray-500 text-3xl font-bold">03</div>
                                <h3 className='text-[1.6rem] text-gray-200 font-bold'>We celebrate success</h3>
                            </div>
                            <div className="card-arrow">
                                <IoIosArrowForward className='w-10 h-10 border border-gray-300 bg-transparent rounded-full p-2 text-white' />
                            </div>
                        </div>
                    </div>
              </div>
            </div>
        </>
    )
}

export default BannerBottomCard
