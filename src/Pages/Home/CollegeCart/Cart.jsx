import { Link } from "react-router-dom";

const Cart = ({ colleges }) => {
    console.log(colleges);
    return (
        <div className="card sm:w-96 bg-base-100 shadow-xl mb-8">
            <img src={colleges?.Image} alt="college" className="rounded-md h-[310px]" />
            <div className="card-body">
                <h2 className="md:text-xl text-lg md:font-bold sm:font-medium ">{colleges?.college_name}</h2>
                <p className="text-justify text-sm">{colleges?.history}</p>
                {/* <p className="text-xl font-open font-medium">Admission Date : <span>{colleges?.date}</span></p> */}
                <div className="card-actions justify-end">
                    <Link to={`/details/${colleges?._id}`}>
                        <button className="details_btn">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;