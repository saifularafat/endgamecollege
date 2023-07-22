import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer/Footer";
import Header from "../Pages/Share/Header/Header";
import NavBer from "../Pages/Share/NaveBer/NavBer";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <NavBer />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;