import { Helmet } from "react-helmet-async";
import { CollegesCart } from "../../api/useColleges";
import Container from '../../components/Container'
import CartCollege from "./CartCollege";
import Search from "../Share/NaveBer/Search";
import SectionTitle from "../../components/SectionTitle";
const Colleges = () => {
    const [allColleges] = CollegesCart();
    console.log(allColleges);
    return (
        <div className="md:pb-16 pb-10">
            <Helmet>
                <title>Education Master || Colleges</title>
            </Helmet>
            <Search />
            <div className="md:pt-16 md:pb-6 py-6 ">
                <SectionTitle title='Get Colleges' />
            </div>
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