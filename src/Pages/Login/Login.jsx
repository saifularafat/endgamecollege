import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../components/useAuth";
import { HashLoader } from "react-spinners";
import { AiOutlineEye } from "react-icons/ai";
import { handleShowPass } from "../../api/ShowPassword";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import loginAnimation from '../../assets/login/education.json'
import SocialSignIn from "../Share/SocialSignIn/SocialSignIn";

const Login = () => {
    const {
        loading,
        setLoading,
        login,
    } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handlerLogin = data => {
        login(data.email, data.password)
            .then(result => {
                const logged = result.user;
                console.log(logged);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your SignUp Successful',
                    showConfirmButton: false,
                    timer: 1300
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
        <div className='bg-green-400'>
            <div className="lg:flex justify-center items-center">
                <Helmet>
                    <title>Education Master || LogIn</title>
                </Helmet>
                <Lottie
                    animationData={loginAnimation}
                    loop={true} className="lg:w-3/6 bg-green-400" />
                {/* TODO lottieFile */}
                <div className='bg-green-400 flex flex-col lg:w-4/12 p-8 rounded-md sm:p-10 text-gray-800 shadow-xl'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 md:text-4xl text-3xl font-Lobster font-bold uppercase'>LogIn</h1>
                        <p className='text-sm text-slate-600'>
                            Sign in to access your account
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit(handlerLogin)}
                        noValidate=''
                        action=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='form_label'>
                                    Email *
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='input_style'
                                    data-temp-mail-org='0'
                                    {...register("email", { required: true })}
                                />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-600">Email is required</p>
                                )}
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='form_label'>
                                        Password *
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type='password'
                                        name='password'
                                        id='password'
                                        required
                                        placeholder='*******'
                                        className='input_style'
                                        {...register("password", { required: true })}
                                    />
                                    {errors.password?.type === 'required' &&
                                        <p className="text-red-600 mt-1">Password is required</p>
                                    }

                                    <AiOutlineEye
                                        onClick={handleShowPass}
                                        className="absolute top-3 right-3 cursor-pointer text-lg"
                                    ></AiOutlineEye>
                                </div>

                            </div>
                            <div>
                                {/* TODO PASSWORD RESET */}
                                <p className=" underline text-lg font-open ">Forget Password</p>
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='bg-green-950 w-full text-xl font-semibold font-mono uppercase tracking-wider rounded-md py-3 text-white hover:bg-transparent hover:text-green-950 border-2 hover:border-green-900 border-green-800 transition duration-200'
                            >
                                {
                                    loading ?
                                        <HashLoader className="mx-auto 
                                    animate-pulse"
                                            color="#fff"
                                            size={26} />
                                        :
                                        'Login'
                                }

                            </button>
                        </div>
                    </form>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-600 font-open'>
                            Login with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>

                    {/* social component */}
                    <SocialSignIn />
                    <p className='px-6 md:text-lg text-base text-center text-gray-700'>
                        Do not have an account yet?{' '}
                        <Link
                            to='/register'
                            className='hover:underline hover:text-rose-600 text-teal-900 font-medium'
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;