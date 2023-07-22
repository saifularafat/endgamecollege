
const Search = () => {
    return (
        <div className=" md:block hidden">
            <div className="input-group">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder="Search your college"
                    className="input input-bordered py-5 " />
                <button
                    onClick={''}
                    className="btn bg-color-btn py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>
    );
};

export default Search;