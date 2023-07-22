import { Link } from 'react-router-dom';

import logo from '../../../assets/Edu-logo.png'

const Logo = () => {
    return (
        <div className=''>
            <Link to='/' className=''>
                <div className='flex items-center'>
                    <img
                        src={logo}
                        alt="logo"
                        width={75}
                        height={75}
                        className='hidden md:block' />
                    <img
                        src={logo}
                        alt="logo"
                        width={50}
                        height={50}
                        className='md:hidden block' />
                    <div className="leading-3">
                        <h2 className="pl-2 sm:text-2xl md:text-2xl lg::text-3xl text-xl font-Lobster font-bold">Education <span className="text-orange-600">Master</span> </h2>
                        <p className="pl-2 uppercase sm:block hidden md:text-sm text-slate-500">university college all education</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Logo;