import { NavLink } from "react-router-dom";
import useAuth from "../../../components/useAuth";
import Profile from "./Profile";
import Swal from "sweetalert2";

const Nav = () => {
    const { user, logOut } = useAuth();
    const handlerLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your logOut success.!',
                    showConfirmButton: false,
                    timer: 1000
                })
            })
    }
    return (
        <nav>
            <ul className="lg:flex items-center md:gap-x-4 lg:gap-0 text-white hidden">
                <li>
                    <NavLink to='/'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/trainers'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        TRAINERS
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/classes'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Classes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/blog'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Blog
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to='/dashboard'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Dashboard
                    </NavLink>
                </li>
                <Profile />
                {
                    user ?
                        <span className="flex items-center gap-x-4 ml-12 ">
                            <button
                                className='bg-white text-main_color py-[6px] px-4 text-lg font-sans font-semibold uppercase rounded-lg tracking-wide hover:opacity-70'
                                onClick={handlerLogOut}>
                                Log Out
                            </button>
                            <span className=' '>
                                    <Profile />
                            </span>
                        </span>
                        :
                        <div className='flex items-center gap-x-4'>
                            <NavLink
                                to='login'
                                className='bg-white text-main_color py-[6px] px-4 text-lg font-sans font-semibold uppercase rounded-lg tracking-wide hover:opacity-70'>
                                Login
                            </NavLink>
                                <Profile />
                        </div>
                }
            </ul>
        </nav>
    );
};

export default Nav;