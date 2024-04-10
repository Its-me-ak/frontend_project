import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer-bg bg-black py-24">
                <div className="container mx-auto">
                    <div className="footer-main grid">
                        <div className="footer-logo border-r border-gray-600 lg:border-b-0 border-b lg:me-16 lg:ms-14 ms-0 sm:ps-0 ps-10 sm:pb-0 pb-10">
                            <img src="assets/img/footer-logo.png" alt="" />
                            <div className="social-link flex px-12 pt-12 gap-6 text-gray-400 text-2xl">
                                <Link>
                                    <FaInstagram />
                                </Link>
                                <Link>
                                    <FaFacebookF />
                                </Link>

                                <Link>
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                        </div>
                        <div className="expertise-link lg:border-b-0 border-b lg:border-r border-r-0 border-gray-600 lg:me-16 lg:ps-0 sm:ps-16 ps-10 sm:py-0 py-10">
                            <h3 className='text-gray-200 text-2xl font-semibold'>Expertise</h3>
                            <ul className='text-gray-400 pt-6 list-none text-xl'>
                                <li className='py-4'>
                                    <Link>
                                        Design
                                    </Link>
                                </li>
                                <li className='py-4'>
                                    <Link>
                                        Specialist Expertise
                                    </Link>
                                </li>
                                <li className='py-4'>
                                    <Link>Commercial Advice</Link>
                                </li>
                                <li className='py-4'>
                                    <Link>Traffic & Transport</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="sector-link border-r  border-gray-600 lg:me-16 lg:pt-0  sm:pt-10 sm:py-0 py-10 sm:ps-0 ps-10">
                            <h3 className='text-gray-200 text-2xl font-semibold'>Sectors </h3>
                            <ul className='text-gray-400 pt-6 list-none text-xl'>
                                <li className='py-4'>
                                    <Link>Road</Link>
                                </li>
                                <li className='py-4'>
                                    <Link>Tunner</Link>
                                </li>
                                <li className='py-4'>
                                    <Link>Bridge</Link>
                                </li>
                                <li className='py-4'>
                                    <Link>Others</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="quick-link lg:ps-0 sm:ps-16 lg:pt-0 sm:pt-8 sm:py-0 py-10 ps-10">
                            <ul className='text-gray-400 columns-2 capitalize list-none text-xl'>
                                <li className='py-4'>
                                    <Link>Our Business</Link>
                                </li>
                                <li className='py-4'>
                                    <Link>work with us</Link>
                                </li>
                                <li className='py-4'>
                                    <Link>projects</Link>
                                </li>
                                <li className='py-4'>
                                    <Link>news</Link>
                                </li>
                                <li className='py-4'>
                                    <Link>Our Capabilities</Link>
                                </li>
                                <li className='py-4'>
                                    <Link>engineers</Link>
                                </li>
                                <li className='py-4'>
                                    <Link>contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-copyright flex justify-between items-center text-gray-300 border-t border-gray-600 pt-8 text-xl">
                        <div className="copyright">
                            <p>2021 Case International. All right reserved.</p>
                        </div>
                        <div className="terms">
                            <Link className='pe-8'>
                                Terms & Condition
                            </Link>

                            <Link>
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
