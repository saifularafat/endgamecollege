import { Helmet } from "react-helmet-async";
import { CollegesCart } from "../../api/useColleges";
import Container from '../../components/Container'
import CartCollege from "./CartCollege";
const Colleges = () => {
    const [allColleges] = CollegesCart();
    console.log(allColleges);
    return (
        <div>
            <Helmet>
                <title>Education Master || Colleges</title>
            </Helmet>
            <Container>
                <div className="">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:mt-16 sm:mt-12 mt-8">
                        {
                            allColleges.map((colleges) => <CartCollege
                                key={colleges?._id}
                                colleges={colleges}
                            />)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Colleges;