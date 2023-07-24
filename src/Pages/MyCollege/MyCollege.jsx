import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";

const MyCollege = () => {
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
                            <th className="text-lg">Serial Number</th>
                            <th className="text-lg">Colleges</th>
                        </tr>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default MyCollege;