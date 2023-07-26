import { Helmet } from "react-helmet-async";
import { CollegesCart } from "../../api/useColleges";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

const Admissions = () => {
    const [allColleges] = CollegesCart();
    console.log(allColleges);
    return (
        <div className=" md:py-16 sm:py-10 py-8">
             <Helmet>
                <title>Education Master || Admission</title>
            </Helmet>
            <Container>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr className="bg-slate-400 text-slate-800">
                                <th className="text-lg">College Name</th>
                                <th className="text-lg">Rating</th>
                                <th className="text-lg">Serial Number</th>
                                <th className="text-lg">Admission</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               allColleges.map(colleges => <tr
                               key={colleges?._id}
                               >
                                <td>{colleges?.college_name}</td>
                                <td>{colleges?.rating}</td>
                                <td>{colleges?.number}</td>
                                <td>
                                <Link to={`/admission/${colleges?._id}`}>
                                        <button className="details_btn">Admission</button>
                                    </Link>
                                </td>
                            </tr>) 
                            }
                            
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default Admissions;