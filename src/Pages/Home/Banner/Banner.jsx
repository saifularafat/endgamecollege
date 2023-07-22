import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import sliderOne from "../../../assets/1.jpg";
import sliderTwo from "../../../assets/2.jpg";
import sliderThree from "../../../assets/3.jpg";
const Banner = () => {
    return (
        <div>
            <Carousel className="text-center">
                <div>
                    <img src={sliderOne} />
                </div>
                <div>
                    <img src={sliderTwo} />
                </div>
                <div>
                    <img src={sliderThree} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;