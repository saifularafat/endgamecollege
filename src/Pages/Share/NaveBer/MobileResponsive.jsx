import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from "react";
import Profile from "./Profile";
import useAuth from "../../../components/useAuth";

const MobileResponsive = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const { user } = useAuth();
    return (
        <div>
            <div className='lg:hidden px-2'>
                <button
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}>
                    <Bars3BottomRightIcon className="h-8 w-8 text-black" />
                </button>
                {
                    isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='flex justify-between items-center px-2 py-2 bg-main_color shadow-lg'>
                                {/* logo and close ber section */}
                                <div className="">
                                    <Profile />
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
                                         bg-green-600
                                         text-white w-full'>
                                    <li className='p-2
                                            hover:bg-orange-400 
                                            '>
                                        <Link to='/' className='default hover:text-white'>
                                            Home
                                        </Link>
                                    </li>
                                    <li className='p-2
                                            hover:bg-orange-400'>
                                        <Link to='/trainers' className='default hover:text-white'>
                                            Trainers
                                        </Link>
                                    </li>
                                    <li className='p-2
                                            hover:bg-orange-400'>
                                        <Link to='/classes' className='default hover:text-white'>
                                            Classes
                                        </Link>
                                    </li>

                                    <li className='p-2
                                            hover:bg-orange-400'>
                                        <Link to='blog' className='default hover:text-white'>
                                            Blog
                                        </Link>
                                    </li>
                                    <li className='p-2
                                            hover:bg-orange-400'>
                                        <Link to='/dashboard'
                                            className='default hover:text-white'>
                                            Dashboard
                                        </Link>
                                    </li>
                                    {
                                        user ?
                                            <li className='p-2
                                            hover:bg-orange-400'>
                                                <Link to='' className='default hover:text-white'>
                                                    LogOut
                                                </Link>
                                            </li>
                                            :
                                            <li className='p-2
                                            hover:bg-orange-400'>
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
    );
};

export default MobileResponsive;