import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import register from '../../../assets/register.jpg'
const Contact = () => {
    return (
        <div className="mt-5">
            <Container>
                <SectionTitle
                    title='Contact'
                    subTitle=''
                />
                <div className="py-12 md:w-1/2 mx-auto text-center">
                    <div>
                        <img src={register} alt="" className="rounded-full md:w-56 w-36 md:h-56 h-36 mx-auto border-green-600 border-2" />
                        <h2 className="text-xl text-slate-800 font-open font-semibold pt-2 tracking-wider uppercase">Sen Watson</h2>
                        <p className="text-lg text-slate-600 leading-3">Senior Register</p>
                    </div>
                    <div className="hidden sm:block pt-2">
                        <p className="text-xl font-open font-semibold hover:opacity-75">Phone:<span className=" font-medium"> +880-000-00-000-00</span></p>
                        <p className="text-xl font-open font-semibold hover:opacity-75 leading-5">Email:<span className="lowercase font-medium"> EDUCATIONMASTER@Gmail.com</span></p>
                        <p className="text-xl font-open font-semibold hover:opacity-75 leading-7">Address:<span className=" font-medium"> Mirpur, Dhaka-1200, Bangladesh</span></p>
                    </div>
                    <div className="sm:hidden block pt-4 space-y-2">
                        <p className="text-xl font-open font-semibold hover:opacity-75">Phone: <br /><span className=" font-medium"> +880-000-00-000-00</span></p>
                        <p className="text-xl font-open font-semibold hover:opacity-75 leading-5">Email: <br /><span className="lowercase font-medium"> EDUCATIONMASTER@Gmail.com</span></p>
                        <p className="text-xl font-open font-semibold hover:opacity-75 leading-7">Address: <br /><span className=" font-medium"> Mirpur, Dhaka-1200, Bangladesh</span></p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;