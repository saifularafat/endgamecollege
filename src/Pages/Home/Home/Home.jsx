import Container from "../../../components/Container";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;