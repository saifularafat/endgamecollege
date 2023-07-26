import { AboutEvents } from "../../../api/useAbout";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import AboutCart from "./AboutCart";

const About = () => {
    const [events] = AboutEvents();
    console.log(events);
    return (
        <div className="md:py-14 sm:py-10 py-8 ">
            <SectionTitle title="About" />
            <Container>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mt-16 sm:mt-12 mt-8">
                    {
                        events.map(event => <AboutCart
                            key={event?._id}
                            aboutData={event}>
                        </AboutCart>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default About;