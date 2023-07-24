import { useForm } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai";
import SocialSignIn from "../Share/SocialSignIn/SocialSignIn";
import { Link, useNavigate } from "react-router-dom";
import { handleShowConfirmPass, handleShowPass } from "../../api/ShowPassword";
import useAuth from "../../components/useAuth";
import Swal from "sweetalert2";
import { HashLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();

    const {
        loading,
        setLoading,
        createUser,
        updateUserProfile,
    } = useAuth();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = watch("password", "");
    const FormSubmit = (data) => {
        console.log(data);

        const imageUrl = data.image[0];
        const formData = new FormData();
        formData.append('image', imageUrl)
        console.log(formData);
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_KEY}`;

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData);
                const imageAdders = imageData.data.url;
                createUser(data.email, data.password)
                    .then(result => {
                        console.log(result);
                        updateUserProfile(data.name, imageAdders)
                            .then(() => {
                                axios.post(`${import.meta.env.VITE_API_URL}/users`, {
                                    name: data.name,
                                    email: data.email,
                                    image: imageAdders,
                                })
                                    .then(data => {
                                        if (data.insertedId) {
                                            Swal.fire({
                                                position: 'top-center',
                                                icon: 'success',
                                                title: 'Your SignUp Successful',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                        }
                                        navigate('/')
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
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `${error.message}`,
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
    return (
        <>
            <Helmet><title>Education Master || Register</title></Helmet>
            <div className="hero bg-green-700 w-full min-h-screen">
                <div className='bg-green-700 flex justify-center items-center min-h-screen  pt-5'>
                    <div className='bg-green-700 flex flex-col max-w-md p-6  sm:p-10 shadow-2xl'>
                        <div className='mb-8 text-center border-b-2 border-rose-900'>
                            <h1 className='my-3 text-4xl text-slate-800 font-bold font-Lobster'>Register</h1>
                            <p className='text-base text-slate-800 mb-4'>Welcome to Sports kings Academy</p>
                        </div>
                        <form
                            onSubmit={handleSubmit(FormSubmit)}
                            noValidate=''
                            action=''
                            className='space-y-6 ng-untouched ng-pristine ng-valid'
                        >
                            <div className='space-y-4'>
                                <div>
                                    <label
                                        htmlFor='name'
                                        className='form_label'>
                                        Name*
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        placeholder='Enter Your Name'
                                        className='input_style'
                                        data-temp-mail-org='0'
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name?.type === "required" && (
                                        <p className="text-red-600">Email is required</p>
                                    )}
                                </div>

                            </div>
                            <div>
                                <label htmlFor='email' className='form_label'>
                                    Email address*
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
                                        Password*
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
                                        {...register("password",
                                            {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{6}/
                                            })}
                                    />
                                    {errors.password?.type === 'required' &&
                                        <p className="text-red-600 mt-1">Password is required</p>
                                    }
                                    {errors.password?.type === 'minLength' &&
                                        <p className="text-red-600 mt-1">Password must be 6 character</p>
                                    }
                                    {errors.password?.type === 'maxLength' &&
                                        <p className="text-red-600 mt-1">Password must be 20 character</p>
                                    }
                                    {errors.password?.type === 'pattern' &&
                                        <p className="text-red-600 mt-1">Password must have one Uppercase
                                            two lowercase one number and special character</p>
                                    }
                                    <AiOutlineEye
                                        onClick={handleShowPass}
                                        className="absolute top-3 right-3 cursor-pointer text-lg"
                                    ></AiOutlineEye>
                                </div>

                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='form_label'>
                                        Confirm*
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="confirm"
                                        {...register("confirm", { required: true })}
                                        {...register("confirm", {
                                            validate: (value) =>
                                                value === password || "Password do not match",
                                        })}
                                        id="confirm"
                                        placeholder="confirm password"
                                        className="input_style"
                                    />
                                    {errors.confirm?.type === "required" && (
                                        <p className="text-rose-500">Confirm Password is required</p>
                                    )}
                                    {errors.confirm?.type === "validate" && (
                                        <p className="text-rose-500 mt-1">{errors.confirm.message}</p>
                                    )}
                                    <AiOutlineEye
                                        onClick={handleShowConfirmPass}
                                        className="absolute top-3 right-3 cursor-pointer text-lg"
                                    ></AiOutlineEye>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='form_label'>
                                        Phone
                                    </label>
                                </div>
                                <input
                                    type='text'
                                    name='phone'
                                    id='phone'
                                    placeholder='+000 00 0000 000 0 '
                                    className='input_style'
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <label htmlFor='image' className='block mb-2 text-base'>
                                        Select Image:*
                                    </label>
                                    <input
                                        required
                                        type='file'
                                        id='image'
                                        name='image'
                                        accept='image/*'
                                        {...register("image", { required: true })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='image' className='block mb-2 text-base'>
                                        Gender:*
                                    </label>
                                    <select {...register("gender")} className="px-2 focus:outline-main_color rounded-md">
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                            </div>
                            <label className=" inline-flex mt-2">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    {...register("checkbox")}
                                    required
                                    className="checkbox" />
                                <p className='md:pl-3 pl-1 md:text-xl font-open'>Accept
                                    <Link to='/terms' className='text-blue-600 underline md:pl-2'>Terms and Condition
                                    </Link>
                                </p>
                            </label>
                            <div>
                                <button
                                    type='submit'
                                    className='bg-green-900 w-full text-xl font-semibold font-mono uppercase tracking-wider rounded-md py-3 text-white hover:bg-transparent hover:text-main_color border-2 hover:border-white border-green-900 transition duration-200'
                                >
                                    {
                                        loading ? <HashLoader 
                                        className="mx-auto 
                                    animate-pulse"
                                            color="#fff"
                                            size={26} />
                                            :
                                            'Register'
                                    }

                                </button>
                            </div>
                        </form>
                        <div className='flex items-center pt-4 space-x-1'>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            <p className='px-3 text-lg dark:text-main_color'>
                                Sign up with social accounts
                            </p>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        </div>
                        {/* social Component */}
                        <SocialSignIn />

                        <p className='px-6 text-lg text-center text-title-color'>
                            Already have an account?{' '}
                            <Link
                                to='/login'
                                className='hover:underline hover:text-white text-teal-900 font-medium'
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;