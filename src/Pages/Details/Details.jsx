import { useParams } from "react-router-dom";
import { CollegesCart } from "../../api/useColleges";
import Container from "../../components/Container";
import EventCategory from "./EventCategory";
import SportsCategory from "./SportsCategory";
import AdmissionProcess from "./AdmissionProcess";

const Details = () => {
    const detailsId = useParams();
    const [colleges] = CollegesCart();
    const filterCollege = colleges.filter((college) => college._id === detailsId.id)
    return (
        <div className="md:my-12 sm:my-6 my-4">
            <Container>
                <div className="space-y-10">
                    <div>
                        {
                            filterCollege.map(college => <div
                                key={college?._id}
                                className="md:flex items-center justify-center gap-5"
                            >
                                <div className="md:w-1/2 sm:w-full">
                                    <img src={college?.Image} alt="" className="h-[530px] w-full"/>
                                </div>
                                <div className="md:w-1/2 sm:w-full md:space-y-3">
                                    <h2 className="md:text-2xl lg:text-3xl sm:text-xl font-open font-semibold text-orange-500"><span className="text-title-color">College Name: </span>{college?.college_name}</h2>
                                    <p className=" text-justify text-lg"><span className="text-2xl text-title-color font-medium">History:</span> {college?.history}</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className="md:mt-16">
                        {
                            filterCollege.map(events => <EventCategory
                                key={events?._id}
                                events={events}>
                            </EventCategory>)
                        }
                    </div>
                    <div className="md:mt-20">
                        {
                            filterCollege.map(sports => <SportsCategory
                                key={sports?._id}
                                sports={sports}>
                            </SportsCategory>)
                        }
                    </div>
                    <div className="md:py-16 py-6 bg-slate-400">
                        {
                            filterCollege.map(admissions => <AdmissionProcess
                                key={admissions?._id}
                                admissions={admissions}>
                            </AdmissionProcess>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Details;