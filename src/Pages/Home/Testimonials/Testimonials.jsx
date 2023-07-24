import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Container from "../../../components/Container";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const url = `${import.meta.env.VITE_API_URL}/testimonials`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="md:py-20 sm:py-16 py-10 bg-slate-100">
            <Container>
                <SectionTitle
                    title='Student Reviews'
                />
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col items-center md:mx-24 md:mt-10 mt-4">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review?.rating}
                                    readOnly
                                    className="text-btn_color border-color-btn mb-5" />
                                <img src={review?.image} alt="Professor img" className="md:w-32 md:h-32 sm:w-24 sm:h-24 w-20 h-20 rounded-full border-slate-600 bg-slate-300" />
                                <p className="md:max-w-[1024px] w-full text-center font-open font-normal text-black">{review?.details}</p>
                                <h1 className="font-open font-semibold md:text-3xl sm:text-2xl text-xl text-btn_color sm:mt-2 mt-1">{review?.name}</h1>
                                <h1 className="font-open font-medium md:text-xl sm:text-lg text-base text-stone-900">{review?.subject}</h1>
                            </div>
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </Container>
        </section>
    );
};
export default Testimonials;