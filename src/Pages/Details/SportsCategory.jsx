import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const SportsCategory = ({ sports }) => {
    const sportsFind = sports?.sports;
    console.log(sportsFind);
    return (
        <div className="mt-8">
            <SectionTitle
                title="Sports"
            />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 pt-12">
                {
                    sportsFind.map((sport, index) =>
                        <div
                            key={index}
                        >
                            <div className="space-y-1">
                                <img src={sport?.sport_img} alt="" className="md:w-[380px] sm:w-[320px] w-full md:h-[280px] sm:h-[220px] " />
                                <h2 className="pt-2 text-2xl font-open font-semibold"><span className="">Sport Name:</span> <span className="text-color-btn">{sport?.sport_name}</span></h2>
                                <p className="text-lg font-medium font-open"><span>Sport Date: </span>{sport?.date}</p>
                                <p className="text-justify"><span className="text-lg font-open font-medium">Sport Details: </span> {sport?.sports_details}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default SportsCategory;