import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import { AdmissionData } from "../../api/useAdmissionData";
import { CollegesCart } from "../../api/useColleges";

const MyCollege = () => {
    const [admission] = AdmissionData();
    const [colleges] = CollegesCart();

    console.log(admission);

    return (
        <div className=" md:py-16 sm:py-10 py-8">
            <Helmet>
                <title>Education Master || My College</title>
            </Helmet>
            <Container>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <tr>
                            <th className="text-lg">College Name</th>
                            <th className="text-lg">Rating</th>
                            <th className="text-lg">Subject</th>
                            <th className="text-lg">Review</th>
                        </tr>
                        <tbody>
                            {
                                admission.map(admissionCart => <tr
                                key={admissionCart?._id}>
                                    <td>{admissionCart?.university}</td>
                                    <td>{admissionCart?.rating}</td>
                                    <td>{admissionCart?.subject}</td>
                                    <td>Review</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default MyCollege;