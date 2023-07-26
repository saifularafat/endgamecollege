
const ResearchCart = ({ search }) => {
    console.log(search);
    return (
        <div className="card sm:w-96 bg-base-100 shadow-md hover:shadow-2xl mb-8">
            <div className="card-body">
                <h2 className="md:text-2xl text-lg md:font-bold sm:font-medium text-slate-700">{search?.research_name}</h2>
                <h3 className=" text-lg font-open font-medium text-slate-600">{search?.name}</h3>
                <p className="text-justify text-sm text-slate-500">{search?.history}</p>
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <p className=""><span className="text-lg text-slate-600 font-medium font-open">{search?.date}</span></p>
                        <p className="text-base text-orange-400 font-medium font-open">{search?.publics}</p>
                    </div>
                    <div>
                        <p className=""><span className="text-lg text-slate-600 font-medium font-open">{search?.time}</span></p>
                        <p className="text-base text-orange-400 font-medium font-open">{search?.reading_time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchCart;