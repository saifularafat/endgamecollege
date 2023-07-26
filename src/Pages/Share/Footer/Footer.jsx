import Container from "../../../components/Container";
import logo from '../../../assets/Edu-logo.png'
const Footer = () => {
    return (
        <div className="bg-base-300">
            <Container>
                <footer className="footer mx-auto p-10 bg-base-300 text-base-content">
                    <div className="">
                        <img src={logo} alt="" className="w-24 mx-auto" />
                        <h2 className="text-2xl font-semibold">Education Master</h2>
                    </div>
                    <div className="">
                        <span className="footer-title">Admission</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Sports</span>
                        <a className="link link-hover">Cricket</a>
                        <a className="link link-hover">Football</a>
                        <a className="link link-hover">Basketball</a>
                        <a className="link link-hover">Badminton</a>
                    </div>
                    <div>
                        <span className="footer-title">Events</span>
                        <a className="link link-hover">Dances</a>
                        <a className="link link-hover">Fashion Show</a>
                        <a className="link link-hover">Tour</a>
                    </div>
                </footer>
            </Container>

        </div>
    );
};

export default Footer;