import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaXmark } from "react-icons/fa6";

const Header = () => {
    const [header, setHeader] = useState('');
    const [view, setView] = useState(false)

    const handleToggleMenu = () =>{
        setView(!view)
        console.log("menu toggle");
    }
    useEffect(() => {
        const headerChange = () => {
            if (window.scrollY > 300) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        };
        window.addEventListener('scroll', headerChange);
    }, []);
    return (
        <>
            <div className="container mx-auto">
                <div className={header ? 'header-main bg-black animate-slidedown fixed top-0 left-0 w-[100%] h-auto z-50 px-14' : 'header-main absolute top-0 left-0 w-[100%] h-auto z-50 px-14'}>
                    <div className="logo-mobile">
                        <img src="assets/img/Logo.png" className='h-20' alt="" />
                    </div>
                    <div className="burger" id="burger" onClick={()=> handleToggleMenu()}>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </div>
                    <span className={view ? 'overlay active' : 'overlay'}></span>
                    <nav className={view ? 'navbar-menu active flex justify-start flex-col' : 'navbar-menu flex justify-between items-center'}>
                        <div className='cancel-icon w-14 h-14 justify-center items-center cursor-pointer absolute right-0 p-2 bg-white' onClick={() => handleToggleMenu()}>
                            <FaXmark className='text-black text-2xl'/>
                        </div>
                        <div className="header-left">
                            <ul className='flex gap-8'>
                                <li className='text-white text-2xl font-bold cursor-pointer uppercase hover:underline'>
                                    <Link>
                                        projects
                                    </Link>
                                </li>
                                <li className='text-white text-2xl font-bold cursor-pointer uppercase hover:underline'>
                                    <Link>
                                        expertise
                                    </Link>
                                </li>
                                <li className='text-white text-2xl font-bold cursor-pointer uppercase hover:underline'>
                                    <Link>
                                        about us
                                    </Link>
                                </li>
                                <li className='text-white text-2xl font-bold cursor-pointer uppercase hover:underline'>
                                    <Link>
                                        people
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="logo">
                            <img src="assets/img/Logo.png" className='h-32' alt="" />
                        </div>
                        <div className="header-right">
                            <ul className='flex gap-10'>
                                <li className='text-white text-2xl font-bold cursor-pointer uppercase hover:underline'>
                                    <Link>
                                        careers
                                    </Link>
                                </li>
                                <li className='text-white text-2xl font-bold cursor-pointer uppercase hover:underline'>
                                    <Link>
                                        AU
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header
