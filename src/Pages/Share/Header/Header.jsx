import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
const Header = () => {
    return (
        <div className="bg-[#05494e] md:p-3 p-1" >
            <Container>
                <div className="md:flex items-center justify-between ">
                    <div className="md:flex items-center text-center">
                        <p className="md:pr-2 md:border-r-2 border-white text-white hover:opacity-100 opacity-70">Address: Dhaka-1200, Bangladesh </p>
                        <p className="md:px-3 md:border-r-2 border-white text-white hover:opacity-100 opacity-70">Phone: +88010-000-000-00</p>
                    </div>
                    <div className="flex items-center md:space-x-8 space-x-5 text-white md:max-w-max md:mx-0 w-fit mx-auto">
                        <FaFacebookF className="w-6 h-6 hover:opacity-100 opacity-70 cursor-pointer transition duration-300" />
                        <FaTwitter className="w-6 h-6 hover:opacity-100 opacity-70 cursor-pointer transition duration-300" />
                        <FaGooglePlusG className="w-8 h-6 hover:opacity-100 opacity-70 cursor-pointer transition duration-300" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;