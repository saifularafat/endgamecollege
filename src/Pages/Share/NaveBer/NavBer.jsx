import Container from '../../../components/Container'
import Logo from "./Logo";
import Nav from "./Nav";
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from "react";
import useAuth from "../../../components/useAuth";
import DarkLight from './DarkMode';
import { Link } from 'react-router-dom';

const NavBer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const { user } = useAuth();
    return (
        <div className="bg-white py-2 w-full shadow-lg">
            <Container>
                <div className="flex items-center justify-between">
                    <Logo />
                    <Nav />

                    {/* Mobile Menu */}
                    <div className='lg:hidden px-2'>
                        <button
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}>
                            <Bars3BottomRightIcon className="h-8 w-8 text-black" />
                        </button>
                        {
                            isMenuOpen && (
                                <div className='absolute top-0 left-0 w-full z-10'>
                                    <div className='flex justify-between items-center bg-[#05494e] px-2 py-2 bg-main_color shadow-lg'>
                                        {/* logo and close ber section */}
                                        <div className="">
                                            <DarkLight />
                                        </div>
                                        <div>
                                            <button
                                                title='Close Menu'
                                                onClick={() => setIsMenuOpen(false)}>
                                                <XMarkIcon
                                                    className='h-8 w-8 text-white ' />
                                            </button>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* menu dropdown section */}
                                    <nav>
                                        <ul
                                            className='space-y-3 py-6
                                         bg-sec-btn
                                         text-white w-full mx-auto text-center'>
                                            <li className='p-2
                                            hover:bg-color-btn 
                                            '>
                                                <Link to='/' className='default hover:text-white'>
                                                    Home
                                                </Link>
                                            </li>
                                            <li className='p-2
                                            hover:bg-color-btn'>
                                                <Link to='/colleges' className='default hover:text-white'>
                                                Colleges
                                                </Link>
                                            </li>
                                            <li className='p-2
                                            hover:bg-color-btn'>
                                                <Link to='/admission' className='default hover:text-white'>
                                                Admission
                                                </Link>
                                            </li>

                                            <li className='p-2
                                            hover:bg-color-btn'>
                                                <Link to='/myCollege' className='default hover:text-white'>
                                                My College
                                                </Link>
                                            </li>
                                            <li className='p-2
                                            hover:bg-color-btn'>
                                                <Link to='/profile'
                                                    className='default hover:text-white'>
                                                    Profile
                                                </Link>
                                            </li>
                                            {
                                                user ?
                                                    <li className='p-2
                                            hover:bg-color-btn'>
                                                        <Link to='' className='default hover:text-white'>
                                                            LogOut
                                                        </Link>
                                                    </li>
                                                    :
                                                    <li className='p-2
                                            hover:bg-color-btn'>
                                                        <Link to='login' className='default hover:text-white'>
                                                            Login
                                                        </Link>
                                                    </li>
                                            }
                                        </ul>
                                    </nav>

                                </div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavBer;


// <div className="md:py-4">
//     <Container>
//         <div className="flex items-center justify-between">
//             <div className="flex items-center">
//                 <img src={logo} alt="logo" className="w-16" />
//                 <div className="leading-3">
//                     <h2 className="pl-2 text-3xl font-Lobster font-bold">Education <span className="text-orange-600">Master</span> </h2>
//                     <p className="pl-2 uppercase text-sm text-slate-500">university college all education</p>
//                 </div>
//             </div>
//             <div>

//             </div>
//         </div>
//     </Container>
// </div>