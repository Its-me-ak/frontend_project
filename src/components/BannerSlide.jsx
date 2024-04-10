import React, { useState } from 'react'
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';

const HeroSliderConfigs = {
    containerClass: 'swiper-container hero-slider',
    parallax: true,
    centeredSlides: true,
    speed: 2000,
    spaceBetween: 0,
    autoplay:
    {
        delay: 5000,
    },
    loop: true,
    effect: 'slide'
};

const BannerSlide = () => {
    const [parallaxSwiper, setParallaxSwiper] = useState(null);
    const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
    const parallaxOpacity = 0.5;
    return (

        <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
            {/* 1 */}
            <div className="hero-slide h-[100vh] w-[100%] flex justify-center items-center relative flex-col overflow-hidden">
                <div className="slide-img w-[100%] h-[100vh] absolute top-0 left-0 bottom-0 right-0 m-auto -z-[1]"
                    data-swiper-parallax={parallaxAmount}
                    data-swiper-parallax-opacity={parallaxOpacity}>
                    <img src="/assets/img/banner1.png" className='h-[100vh] object-cover w-[100%]' alt="" />
                </div>
                <div className="relative z-[2] lg:px-40 px-8">
                    <div className="text-gray-100 bredcrumb">
                        <Link className='text-xl pe-3'>Home</Link>
                        <span className='text-xl'>/ Why work with us</span>
                    </div>
                    <h1 className="capitalize font-extrabold text-[4rem] text-white">headline #1</h1>
                    <p className="text-2xl mt-6 leading-10 text-gray-200">We deliver insights by combining Research Outcomes, Real-Time Data and Smart Thinking to enable you to make insightful decisions.We transform your Research into Actionable Strategies with our trusted & Highly Experienced Consultancy Expertise
                    </p>
                </div>
            </div>
            {/* 2 */}
            <div className="hero-slide h-[100vh] w-[100%] flex justify-center items-center relative flex-col overflow-hidden">
                <div className="slide-img w-[100%] h-[100vh] absolute top-0 left-0 bottom-0 right-0 m-auto -z-[1]"
                    data-swiper-parallax={parallaxAmount}
                    data-swiper-parallax-opacity={parallaxOpacity}>
                    <img src="/assets/img/banner1.png" className='h-[100vh] object-cover w-[100%]' alt="" />
                </div>
                <div className="relative z-[2] lg:px-40 px-8">
                    <div className="text-gray-100 bredcrumb">
                        <Link className='text-xl pe-3'>Home</Link>
                        <span className='text-xl'>/ Why work with us</span>
                    </div>
                    <h1 className="capitalize font-extrabold text-[4rem] text-white">headline #2</h1>
                    <p className="text-2xl mt-6 leading-10 text-gray-200">We deliver insights by combining Research Outcomes, Real-Time Data and Smart Thinking to enable you to make insightful decisions.We transform your Research into Actionable Strategies with our trusted & Highly Experienced Consultancy Expertise
                    </p>
                </div>
            </div>
            {/* 3 */}
            <div className="hero-slide h-[100vh] w-[100%] flex justify-center items-center relative flex-col overflow-hidden">
                <div className="slide-img w-[100%] h-[100vh] absolute top-0 left-0 bottom-0 right-0 m-auto -z-[1]"
                    data-swiper-parallax={parallaxAmount}
                    data-swiper-parallax-opacity={parallaxOpacity}>
                    <img src="/assets/img/banner1.png" className='h-[100vh] object-cover w-[100%]' alt="" />
                </div>
                <div className="relative z-[2] lg:px-40 px-8">
                    <div className="text-gray-100 bredcrumb">
                        <Link className='text-xl pe-3'>Home</Link>
                        <span className='text-xl'>/ Why work with us</span>
                    </div>
                    <h1 className="capitalize font-extrabold text-[4rem] text-white">headline #3</h1>
                    <p className="text-2xl mt-6 leading-10 text-gray-200">We deliver insights by combining Research Outcomes, Real-Time Data and Smart Thinking to enable you to make insightful decisions.We transform your Research into Actionable Strategies with our trusted & Highly Experienced Consultancy Expertise
                    </p>
                </div>
            </div>
        </Swiper>

    )
}

export default BannerSlide
