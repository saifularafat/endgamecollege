
const AboutCart = ({ aboutData }) => {
    console.log(aboutData);
    return (
        <div className="card sm:w-96 bg-base-100 shadow-md hover:shadow-2xl mb-8">
            <img src={aboutData?.img} alt="college" className="rounded-md h-[310px]" />
            <div className="card-body">
                <h2 className="md:text-2xl text-lg md:font-bold sm:font-medium ">{aboutData?.name}</h2>
                <p className="text-justify text-sm">{aboutData?.details}</p>
                <div className="flex items-center gap-3">
                    <p className=""><span className="text-xl font-medium">{aboutData?.category}: </span> <span className="text-2xl text-orange-600 font-bold">{aboutData?.number}</span></p>
                    <p className=""><span className="text-xl font-medium">{aboutData?.seat}: </span> <span className="text-2xl text-green-700 font-bold">{aboutData?.sit}</span></p>
                </div>
            </div>
        </div>
    );
};

export default AboutCart;