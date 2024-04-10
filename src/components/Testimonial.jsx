import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <>
            <div className="testimonial-bg bg-[#112c41] py-24 px-10">
                <div className="container mx-auto">
                    <Slider {...settings}>
                        <div className="testimonial-card">
                            <div className="testi-img lg:w-1/3 w-[100%] ps-12 sm:inline-block hidden">
                                <img src="assets/img/client1.png" alt="" />
                            </div>
                            <div className="content-wrapper ps-12 sm:pe-20 pe-12 py-16 relative">
                                <div className='icon absolute top-8 left-5'>
                                    <ImQuotesLeft className='text-[#F36F2B] h-10 w-10'/>
                                </div>
                                <p className='text-2xl text-gray-300 font-semibold mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.
                                </p>
                                <div className="testimonial-name mt-5 text-gray-200">
                                    <h2 className='text-[1.7rem] font-semibold'>Sarah Brown</h2>
                                    <h4 className='desg text-xl font-medium mt-1'>Project Manager (Singapore)</h4>
                                </div>
                                <div className="testi-link flex items-center gap-4 text-gray-100 mt-5">
                                    <FaArrowRight className='w-8 h-8 border rounded-full p-2'/>
                                    <Link className='text-xl'>
                                        Read my story
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testi-img lg:w-1/3 w-[100%] ps-12 sm:inline-block hidden">
                                <img src="assets/img/client1.png" alt="" />
                            </div>
                            <div className="content-wrapper ps-12 sm:pe-20 pe-12 py-16 relative">
                                <div className='icon absolute top-8 left-5'>
                                    <ImQuotesLeft className='text-[#F36F2B] h-10 w-10' />
                                </div>
                                <p className='text-2xl text-gray-300 font-semibold mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.
                                </p>
                                <div className="testimonial-name mt-5 text-gray-200">
                                    <h2 className='text-[1.7rem] font-semibold'>Sarah Brown</h2>
                                    <h4 className='desg text-xl font-medium mt-1'>Project Manager (Singapore)</h4>
                                </div>
                                <div className="testi-link flex items-center gap-4 text-gray-100 mt-5">
                                    <FaArrowRight className='w-8 h-8 border rounded-full p-2' />
                                    <Link className='text-xl'>
                                        Read my story
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testi-img lg:w-1/3 w-[100%] ps-12 sm:inline-block hidden">
                                <img src="assets/img/client1.png" alt="" />
                            </div>
                            <div className="content-wrapper ps-12 sm:pe-20 pe-12 py-16 relative">
                                <div className='icon absolute top-8 left-5'>
                                    <ImQuotesLeft className='text-[#F36F2B] h-10 w-10' />
                                </div>
                                <p className='text-2xl text-gray-300 font-semibold mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.
                                </p>
                                <div className="testimonial-name mt-5 text-gray-200">
                                    <h2 className='text-[1.7rem] font-semibold'>Sarah Brown</h2>
                                    <h4 className='desg text-xl font-medium mt-1'>Project Manager (Singapore)</h4>
                                </div>
                                <div className="testi-link flex items-center gap-4 text-gray-100 mt-5">
                                    <FaArrowRight className='w-8 h-8 border rounded-full p-2' />
                                    <Link className='text-xl'>
                                        Read my story
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonial
