import { NavLink } from "react-router-dom";
import useAuth from "../../../components/useAuth";
import Swal from "sweetalert2";
import DarkLight from "./DarkMode";
// import Profile from "../../Profile/Profile";

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
                    <NavLink to='/colleges'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Colleges
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admission'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Admission
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/myCollege'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        My College
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Profile
                    </NavLink>
                </li>
               
                {
                    user ?
                        <span className="flex items-center gap-x-4 ml-12 ">
                            <button
                                className='bg-color-btn text-white py-[8px] px-4 text-lg font-sans font-semibold uppercase rounded-lg tracking-wide hover:opacity-70'
                                onClick={handlerLogOut}>
                                Log Out
                            </button>
                            <span className=' '>
                                <DarkLight />
                            </span>
                        </span>
                        :
                        <div className='flex items-center gap-x-4'>
                            <NavLink
                                to='login'
                                className='bg-black text-main_color py-[8px] px-4 ml-5 text-lg font-sans font-semibold uppercase rounded-lg tracking-wide hover:opacity-70'>
                                Login
                            </NavLink>
                                <DarkLight />
                        </div>
                }
            </ul>
        </nav>
    );
};

export default Nav;