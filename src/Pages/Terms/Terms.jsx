import { Link } from "react-router-dom";
import Container from "../../components/Container";

const Terms = () => {
    return (
        <div className="bg-orange-100">
            <Container>
                <div className="py-12 space-y-4">
                    <h2 className="text-2xl font-open font-bold text-slate-800">
                        1. Description of the Services
                    </h2>

                    <p className="text-lg font-open text-slate-600">
                        Subject to the terms and conditions specified herein, the Site offers Users information regarding us and our programs. The Site also offers Users the possibility of accessing video content, obtaining information about the programs, communicating through certain functions provided on the Site or accessing our social media sites.
                    </p>

                    <h2 className="text-2xl font-open font-bold text-slate-800">
                        2. Collection of Personal Data
                    </h2>

                    <p className="text-lg font-open text-slate-600">
                        Certain of our Services, including signing up for updates regarding our programs or participating in certain functions provided by the Site, require Users to provide personal data, as detailed in our Privacy Policy. If you wish to obtain information regarding the Services, we may direct you away from the Site to a third-party site.

                        You agree by providing personal data to us or through a third-party site: (i) to these Terms of Service; (ii) to provide true, accurate, current and complete information; (iii) to maintain and promptly update the information to keep it true, accurate, current and complete; (iv) for security reasons, to maintain the confidentiality of personal data;

                        We are not responsible for any loss or damage arising from your failure to comply with the foregoing requirements. If you provide any information that is untrue, inaccurate, not current or incomplete, or to which you do not have rights, or if we have reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, we may suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
                    </p>

                    <h2 className="text-2xl font-open font-bold text-slate-800">
                        3. Eligibility
                    </h2>

                    <p className="text-lg font-open text-slate-600">
                        This Site is intended solely for Users who are over the age of 13 and any registration by, use of or access to the Site by anyone who is not over 13 is unauthorized, unlicensed and in violation of these Terms of Service. By using the Services or the Site, you represent and warrant that you are over 13 and that you agree to and abide by all of the terms and conditions of these Terms of Service. If you violate any of these Terms of Service, or otherwise violate an agreement between you and us, or for any other reason, we may terminate your registration and/or prohibit you from using or accessing the Services or the Site (or any portion, aspect or feature of the Services or the Site), at any time in our sole discretion. You agree that we will not be liable to you or any third party for any termination of your account.
                    </p>

                    <h2 className="text-2xl font-open font-bold text-slate-800">
                        4. Content of Site
                    </h2>

                    <p className="text-lg font-open text-slate-600">
                        We are not responsible if information on the Site is not accurate, complete or current. Any reliance on the material on the Site is at your own risk. We shall not be liable to you or to any third-party for any modification, suspension or discontinuance of the Service.

                        Information on the Site may contain typographical errors, inaccuracies or omissions. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information if any information on the Site is inaccurate at any time without prior notice.

                        We undertake no obligation to update, amend or clarify information on the Site, except as required by law. No specified update to the Site should be taken to indicate that all the information in the Site has been modified or updated.
                    </p>

                    <p className="text-lg font-open text-slate-600">A terms and conditions agreement outlines the website administrator’s rules regarding user behavior and provides information about the actions the website administrator can and will perform.</p>
                    <br />
                    <p className="text-lg font-open text-slate-600">A terms and conditions agreement outlines the website administrator’s rules regarding user behavior and provides information about the actions the website administrator can and will perform.</p>

                </div>
                <div className="text-center pb-7">
                    <Link to='/register'>
                        <button className="terms_btn"> Go Back </button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Terms;