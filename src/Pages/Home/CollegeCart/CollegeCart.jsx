import { CollegesCart } from "../../../api/useColleges";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import Cart from "./Cart";

const CollegeCart = () => {
    const [allColleges] = CollegesCart();
    return (
        <div className="md:py-20 sm:py-14 py-10 ">
            <SectionTitle 
            title='Colleges'
            />
            <Container>
                <div className="grid md:grid-cols-3 grid-cols-1 md:mt-16 sm:mt-12 mt-8">
                    {
                        allColleges.slice(0, 3).map((colleges) => <Cart
                            key={colleges?._id}
                            colleges={colleges}
                        />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default CollegeCart;