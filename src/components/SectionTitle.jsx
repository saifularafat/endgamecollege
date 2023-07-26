
const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className=" text-center">
            <p className='text-slate-600 text-lg'>
                {subTitle}
            </p>
            <h2 className="w-[310px] mx-auto md:text-4xl text-3xl font-semibold font-Lobster pb-3 text-slate-900 border-b-4 border-color-btn rounded-xl">
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;