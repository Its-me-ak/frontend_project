import React from 'react'

const SuccessGrid = () => {
    return (
        <>
            <div className="success-bg px-10 pt-24">
                <main class="grid-main grid gap-5">
                    <div className="item-1">
                        <img src="assets/img/grid1.png" alt="" />
                    </div>
                    <div className="item-2">
                        <img src="assets/img/grid2.png" alt="" />
                    </div>
                    <div className="item-3">
                        <img src="assets/img/grid3.png" alt="" />
                    </div>
                    <div className="item-4">
                        <img src="assets/img/grid4.png" alt="" />
                    </div>
                    <div className="item-5 lg:p-8">
                        <h1 className='text-[3.5rem] font-semibold text-black'>We celebrate <span className='text-[#F36F2B]'>success</span></h1>
                        <p className='text-gray-900 text-2xl leading-10 mt-5 text-justify'>At Case we understand that every achievement, big or small, is a result of the hard work and dedication of our team members. We take pride in
                            celebrating these moments because they underscore the commitment and effort put into each project.
                        </p>
                        <p className='text-gray-900 text-2xl leading-10 mt-8 text-justify'>Some of our favourite events on the calendar include our coveted Melbourne Cup event and our always amazing Christmas Party. In-between, our
                            team celebrate together during team cycling events, regular team dinners and social morning teas to celebrate milestones and special days. Taking the time to celebrate wins is our way of showing gratitude and ensuring everyone knows their efforts make a difference.</p>
                    </div>
                    <div className="item-6 pe-5 pb-5">
                        <img src="assets/img/grid5.png" alt="" />
                    </div>

                </main>
            </div>
        </>
    )
}

export default SuccessGrid
