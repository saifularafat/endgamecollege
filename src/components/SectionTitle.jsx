
const SectionTitle = ({ title, subTitle }) => {
    return (
        <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className=" text-center">
            <h2 className="w-60 mx-auto text-4xl font-semibold font-Lobster pb-3 text-slate-900 pt-12 border-b-4 border-color-btn">
                {title}
            </h2>
            <p className='text-white mt-3 text-lg'>
                {subTitle}
            </p>
        </div>
    );
};

export default SectionTitle;