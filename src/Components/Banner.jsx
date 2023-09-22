import React from 'react';
import user from '../assets/images/user.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center gap-20'>
            <div className='space-y-5'>
                <h1 className='text-6xl font-bold text-[#1A1919]'>One Step <br /> Closer To Your <br /> <span className='text-[#85D7A9]'>Dream Job</span></h1>
                <p className='text-[#757575]'>
                    Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. <br /> Manage all your job application from start to finish.
                </p>
                <button className='px-4 py-3 rounded-lg font-bold bg-[#85D7A9] text-white'>Get Started</button>
            </div>
            <div className=''>
                <img className='w-[550px]' src={user} alt="" />
            </div>
        </div>
    );
};

export default Banner;