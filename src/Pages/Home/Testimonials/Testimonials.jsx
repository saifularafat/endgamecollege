import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { BsBookFill } from 'react-icons/Bs';
import Container from "../../../components/Container";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);


    // TODO JSON URL


    const url = 'Testimonials.json';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="md:py-20 sm:py-16 py-10 bg-slate-100">
            <Container>
                <SectionTitle
                    title='Testimonials'
                />

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review.id}
                        >
                            <div className="flex flex-col items-center mx-24 md:mt-10 mt-4">
                                {/* <div>
                                    <img src={review.image} alt="" className=""/>
                                </div> */}
                                <BsBookFill className="w-12 h-12 md:my-5 my-2 " />
                                <p className="md:max-w-[1024px] w-full text-center font-Inter font-normal text-descColor">{review.details}</p>
                                <h1 className="font-open font-semibold md:text-3xl text-2xl text-btn_color mt-2">{review.name}</h1>
                                <h1 className="font-open font-medium md:text-xl sm:text-lg text-base text-stone-900">{review.position}</h1>
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