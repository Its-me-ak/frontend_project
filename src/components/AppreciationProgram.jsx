import React from 'react'

const AppreciationProgram = () => {
    return (
        <>
            <div className='program-bg py-24'>
                <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-12'>
                    <div className="program-conent lg:ps-20 lg:px-0 px-8">
                        <h1 className='text-[3.5rem] text-black font-semibold'>Employee <span className='text-[#F36F2B]'>Appreciation Program</span></h1>
                        <p className='text-gray-900 text-2xl leading-10 mt-8'>Our Employee Appreciation Program is tailored to honor the ongoing commitment and efforts of our long-serving team members. Our 5 Year Club
                            and 10 Year Club are special milestones within this program, celebrating employees who have dedicated half a decade or a full decade to our
                            company mission. Each year, members of these clubs are invited to annual events held at select, memorable locations, reflecting our gratitude and
                            recognition of their unwavering dedication. It's our way of saying thank you and ensuring that every significant chapter in our collective journey is
                            celebrated with the grandeur it deserves
                        </p>
                    </div>
                    <div className="program-img lg:pe-12 lg:px-0 px-8">
                        <img src="assets/img/program-img.png" alt="" />
                    </div>
                </div>
                <div className="program-grid grid gap-9 px-8 mt-14">
                    <div className="image1">
                        <img src="assets/img/pg-grid1.png" alt="" className='h-[392px]' />
                    </div>
                    <div className="image2">
                        <img src="assets/img/pg-grid2.png" c alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppreciationProgram
