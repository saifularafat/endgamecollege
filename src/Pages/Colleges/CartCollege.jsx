import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CartCollege = ({ colleges }) => {
    console.log(colleges);
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl mb-8">
            <img src={colleges?.Image} alt="college" className="rounded-md h-[310px]" />
            <div className="card-body">
                <h2 className="md:text-xl text-lg md:font-bold sm:font-medium ">{colleges?.college_name}</h2>
                <div className="flex leading-3">
                    <span className="pr-1 text-lg font-medium">Rating:</span>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={colleges?.rating}
                        readOnly
                        className="text-btn_color border-color-btn mb-5" />
                    <span className="text-lg font-semibold pl-2">({colleges?.rating})</span>
                </div>
                <p className="text-xl font-open font-medium leading-3">Admission Date : <span className="sm:text-lg text-base">{colleges?.date}</span></p>
                <p className="text-xl font-open font-medium">Serial Number : <span>{colleges?.number}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${colleges?._id}`}>
                        <button className="details_btn">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartCollege;