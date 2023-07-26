import Search from "../../Share/NaveBer/Search";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CollegeCart from "../CollegeCart/CollegeCart";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Research from "../Researchs/Research";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Search />
            <Banner />
            <About />
            <CollegeCart />
            <Gallery />
            <Research />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;