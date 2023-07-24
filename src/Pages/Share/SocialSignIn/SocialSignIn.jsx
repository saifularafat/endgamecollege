import {  FaGoogle } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import useAuth from "../../../components/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const SocialSignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { setLoading, googleSignIn, githubSignIn } = useAuth();

    const handlerGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;

                axios.post(`${import.meta.env.VITE_API_URL}/users`, {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                    image: loggedUser.photoURL,
                    role: loggedUser.role,
                })
                    .then(() => {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your SignUp Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true });
                    })
                    .catch((err) => {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'error',
                            title: `${err.message}`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setLoading(false)
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
                setLoading(false)
            })
    }

    const handlerGitHubLogin = () => {
        githubSignIn()
            .then(result => {
                console.log(result);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your SignUp Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
                setLoading(false)
            })
    }

    return (
        <div className="">
            <div
                onClick={handlerGoogleLogin}
                className='social_style'>
                <FaGoogle size={28} />
            </div>
            <div
                onClick={handlerGitHubLogin}
                className='social_style'>
                <BsGithub size={28} />
            </div>
        </div>
    );
};

export default SocialSignIn;