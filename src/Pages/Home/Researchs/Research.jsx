import { Researchs } from "../../../api/useResearch";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import ResearchCart from "./ResearchCart";

const Research = () => {
    const [research] = Researchs();
    return (
        <div className="md:py-20 sm:py-16 py-10">
            <SectionTitle title="Research's Paper" />
            <Container>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mt-16 sm:mt-12 mt-8">
                    {
                        research.map(search => <ResearchCart
                            key={search?._id}
                            search={search}>
                        </ResearchCart>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Research;