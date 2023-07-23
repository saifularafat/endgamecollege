import React from 'react';
import { Link } from 'react-router-dom';

const Paragraph = ({ title, colorTitle, subTitle, label, addressPath, labelOne, addressOne }) => {
    return (
        <div className=' text-white text-center w-5/5 mx-auto md:space-y-4 relative items-center lg:left-1/3 md:left-16 overflow-hidden'>
            <h2 className='sm:text-4xl md:text-6xl text-2xl font-open font-semibold uppercase'>{title} <span className='text-color-btn'>{colorTitle}</span></h2>
            <p className='lg:w-[740px] md:w-[640px] mx-auto md:text-xl sm:text-base text-sm font-sans font-normal text-slate-200'>{subTitle}</p>
            <div className='flex items-center justify-center gap-3'>
                <Link to='/admission' className='banner_btn'>
                    {label}
                </Link>
                <Link to='/colleges' className='banner_btn_white'>
                    {labelOne}
                </Link>
            </div>
        </div>
    );
};

export default Paragraph;