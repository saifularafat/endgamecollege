import Container from "../../../components/Container";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <div>
            <Banner />
            <Container>
                <Contact />
            </Container>
        </div>
    );
};

export default Home;