import Container from '../../../components/Container'
import Logo from "./Logo";
import Nav from "./Nav";
import MobileResponsive from "./MobileResponsive";

const NavBer = () => {
    return (
        <div className="bg-white bg-main_color py-2 w-full shadow-lg">
            <Container>
                <div className="flex flex-row items-center justify-between">
                    <Logo />
                    screech
                    <Nav />

                    {/* Mobile Menu */}
                    <MobileResponsive />
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