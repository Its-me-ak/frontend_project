import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const GlobalBusiness = () => {
    return (
        <>
            <div id="global-business-bg" className='py-24'>
                <div className="container mx-auto">
                    <div className="global-heading text-center lg:px-80">
                        <h1 className='text-[3rem] font-bold text-black leading-tight'>As a <span className='text-[#F36F2B]'>global business,</span> we encourage you to contact us no matter where you are located in the world.</h1>
                        <h6 className='mt-10 text-2xl font-bold text-black'>Browse our job opportunities across the globe.</h6>
                        <div className="link flex items-center justify-center mt-10">
                            <Link className='text-2xl text-[#F36F2B] font-semibold uppercase me-6'>
                                Open roles
                            </Link>
                            <FaArrowRight className='w-4 h-4 border border-gray-300 bg-transparent p-3 rounded-full text-[#F36F2B]'/>
                        </div>
                    </div>
                    <div className="map-image px-20 py-16">
                        <img src="assets/img/globe.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GlobalBusiness
