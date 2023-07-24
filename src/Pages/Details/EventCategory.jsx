import SectionTitle from "../../components/SectionTitle";

const EventCategory = ({ events }) => {
    const eventFind = events?.event;
    return (
        <div className="mt-8">
            <SectionTitle
                title="Colleges Events"
            />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 pt-12">
                {
                    eventFind.map((events, index) =>
                        <div
                            key={index}
                        >
                            <div className="space-y-1 pb-5">
                                <img src={events?.cultural_img} alt="" className="md:w-[380px] sm:w-[320px] w-full md:h-[280px] sm:h-[220px] "/>
                                <h2 className="pt-2 text-2xl font-open font-semibold"><span className="">Event Name:</span> <span className="text-color-btn">{events?.eventName}</span></h2>
                                <p className="text-lg font-medium font-open"><span>Event Date: </span>{events?.date}</p>
                                <p className="text-justify"><span className="text-lg font-open font-medium">Event Details: </span> {events?.details}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default EventCategory;