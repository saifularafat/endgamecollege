import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";

import imgOne from '../../../assets/graduate-img/graduate-3.jpeg'
import imgTwo from '../../../assets/graduate-img/graduate-2.jpeg'
import imgThree from '../../../assets/graduate-img/graduate-1.jpeg'
import imgFour from '../../../assets/graduate-img/graduate-6.jpeg'
import imgFive from '../../../assets/graduate-img/graduate-4.jpeg'
import imgSix from '../../../assets/graduate-img/graduate-5.jpeg'
const Gallery = () => {
    console.log(imgOne);
    return (
        <div className="md:pt-16 sm:pt-14 pt-10 pb-6">
            <SectionTitle title='Gallery' />
            <Container>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-16">
                    <div>
                        <img src={imgOne} alt="" className="hover:scale-105 hover:rounded-br-lg transition duration-200"/>
                    </div>
                    <div>
                        <img src={imgTwo} alt="" className="hover:scale-105 hover:rounded-bl-lg hover:rounded-br-lg transition duration-200"/>
                    </div>
                    <div>
                        <img src={imgThree} alt="" className="hover:scale-105 hover:rounded-bl-lg transition duration-200"/>
                    </div>
                    <div>
                        <img src={imgFour} alt="" className="hover:scale-105 hover:rounded-rt-lg transition duration-200"/>
                    </div>
                    <div>
                        <img src={imgFive} alt="" className="hover:scale-105 hover:rounded-t-lg transition duration-200"/>
                    </div>
                    <div>
                        <img src={imgSix} alt="" className="hover:scale-105 hover:rounded-tl-lg transition duration-200"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Gallery;