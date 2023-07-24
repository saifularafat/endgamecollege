import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import { CollegesCart } from "../../api/useColleges";
import { useForm } from "react-hook-form";
import { HashLoader } from "react-spinners";
import useAuth from "../../components/useAuth";

const AdmissionForm = () => {
    const formId = useParams();
    const [colleges] = CollegesCart();
    const filterCollege = colleges.filter((college) => college._id === formId.id)
    // console.log(filterCollege);
    const {
        loading,
        setLoading,
        updateUserProfile,
    } = useAuth();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const admissionForm = (data) => {
        console.log(data);
    }

    return (
        <div className="md:py-20 sm:py-12 py-8">
            <Container>
                {
                    filterCollege.map(colleges => <div
                        key={colleges?._id}
                    >
                        <h2 className="text-center md:text-3xl sm:text-2xl text-lg font-semibold ">{colleges?.college_name}</h2>
                    </div>)
                }

                <form
                    onSubmit={handleSubmit(admissionForm)}
                    className="md:pt-10 pt-8 md:space-y-5 space-y-2"
                >
                    <div className='sm:flex items-center gap-4'>
                        <div className="w-1/2">
                            <label
                                htmlFor='name'
                                className='form_label'>
                                Student Name*
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
                                <p className="text-red-600">Name is required</p>
                            )}
                        </div>
                        <div className="w-1/2">
                            <label
                                htmlFor='name'
                                className='form_label'>
                                Student Email*
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email'
                                className='input_style'
                                data-temp-mail-org='0'
                                {...register("email", { required: true })}
                            />
                            {errors.name?.type === "required" && (
                                <p className="text-red-600">Email is required</p>
                            )}
                        </div>
                    </div>
                    <div className='sm:flex items-center gap-4'>
                        <div className="w-1/2">
                            <label
                                htmlFor='name'
                                className='form_label'>
                                Phone Number*
                            </label>
                            <input
                                type='text'
                                name='number'
                                id='number'
                                placeholder='Your Phone Number'
                                className='input_style'
                                data-temp-mail-org='0'
                                {...register("number", { required: true })}
                            />
                            {errors.name?.type === "required" && (
                                <p className="text-red-600">Number is required</p>
                            )}
                        </div>
                        <div className="w-1/2">
                            <label
                                htmlFor='name'
                                className='form_label'>
                                Address*
                            </label>
                            <input
                                type='text'
                                name='address'
                                id='address'
                                placeholder='Enter Your Address'
                                className='input_style'
                                data-temp-mail-org='0'
                                {...register("address", { required: true })}
                            />
                            {errors.name?.type === "required" && (
                                <p className="text-red-600">Address is required</p>
                            )}
                        </div>
                    </div>
                    <div className='sm:flex items-center gap-4'>
                        <div className="w-1/2">
                            <label
                                htmlFor='name'
                                className='form_label'>
                                Date of Birth*
                            </label>
                            <input
                                type='date'
                                name='birth'
                                id='birth'
                                placeholder='Your Phone Birth'
                                className='input_style'
                                data-temp-mail-org='0'
                                {...register("birth", { required: true })}
                            />
                            {errors.name?.type === "required" && (
                                <p className="text-red-600">Date of Birth is required</p>
                            )}
                        </div>
                        <div className="w-1/2">
                            <label
                                htmlFor='name'
                                className='form_label'>
                                Subject*
                            </label>
                            <input
                                type='text'
                                name='subject'
                                id='subject'
                                placeholder='Enter Your Subject'
                                className='input_style'
                                data-temp-mail-org='0'
                                {...register("subject", { required: true })}
                            />
                            {errors.name?.type === "required" && (
                                <p className="text-red-600">Subject is required</p>
                            )}
                        </div>
                    </div>
                    <div className="">
                            <label
                                htmlFor='name'
                                className='form_label'>
                                Image*
                            </label>
                            <input
                                type='file'
                                name='file'
                                id='file'
                                placeholder='Enter Your Image'
                                className='input_style'
                                data-temp-mail-org='0'
                                {...register("file", { required: true })}
                            />
                            {errors.name?.type === "required" && (
                                <p className="text-red-600">Image is required</p>
                            )}
                        </div>
                    <div>
                        <button
                            type='submit'
                            className='admissionForm_btn'
                        >
                            {
                                loading ? <HashLoader
                                    className="mx-auto 
                                    animate-pulse"
                                    color="#orange"
                                    size={26} />
                                    :
                                    'Register'
                            }

                        </button>
                    </div>
                </form>


            </Container>
        </div>
    );
};

export default AdmissionForm;