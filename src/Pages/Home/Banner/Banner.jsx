import sliderOne from "../../../assets/1.jpg";
import sliderTwo from "../../../assets/2.jpg";
import sliderThree from "../../../assets/3.jpg";
import Paragraph from './Paragraph'

const Banner = () => {
    return (
        <div className="carousel w-full md:h-[600px] h-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={sliderOne} className="w-full " />
                <div className="absolute flex items-center left-0 top-0 bottom-0">

                    <Paragraph
                        title='Welcome To'
                        colorTitle='College'
                        subTitle='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
                        label='Admission'
                        adders='/admission'
                        labelOne='College'
                        addressOne='/colleges'
                    />

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide2" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={sliderTwo} className="w-full " />
                <div className="absolute flex items-center  left-0 top-0 bottom-0">

                    <Paragraph
                        title='ADMISSION OPEN'
                        colorTitle='2002'
                        subTitle='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
                        label='Admission'
                        adders='/admission'
                        labelOne='College'
                        addressOne='/colleges'
                    />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide3" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={sliderThree} className="w-full " />
                <div className="absolute flex items-center  left-0 top-0 bottom-0">

                    <Paragraph
                        title='EDUCATION '
                        colorTitle='MASTER'
                        label='Admission'
                        addressPath='/'
                        labelOne='College'
                        addressOne='/'
                    />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle mr-5 slider_btn1">❮</a>
                    <a href="#slide1" className="btn btn-circle slider_btn2">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;