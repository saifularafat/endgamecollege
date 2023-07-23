import Container from "../../../components/Container";
import Banner from "../Banner/Banner";
import CollegeCart from "../CollegeCart/CollegeCart";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <CollegeCart />
            <Gallery />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;