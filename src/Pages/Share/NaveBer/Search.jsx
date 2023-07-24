import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CollegesCart } from "../../../api/useColleges";

const Search = () => {
    const [colleges] = CollegesCart(); 
    const [college, setCollege] = useState(colleges);
    // console.log(college);
    const [searchText, setSearchText] = useState("");

    const handlerSearch = () => {
        fetch(`${import.meta.env.VITE_API_URL}/searchFieldColleges/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setCollege(data);
            })
    }

    return (
        <div className="bg-blue-600 py-2">
            <div className="input-group items-center justify-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder="Search your college"
                    className="md:w-1/3 w-1/2 px-4 py-3 focus:outline-none" />
                <button
                    onClick={handlerSearch}
                    className="md:px-5 px-3 bg-color-btn text-white py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
            {
                
            }
        </div>
    );
};

export default Search;