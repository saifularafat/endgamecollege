import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import { CollegesCart } from "../../api/useColleges";
import { useForm } from "react-hook-form";
import { HashLoader } from "react-spinners";
import useAuth from "../../components/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AdmissionForm = () => {
    const formId = useParams();
    const [colleges] = CollegesCart();
    const filterCollege = colleges.filter((college) => college._id === formId.id)
    // console.log(filterCollege);
    const {
        user,
        loading,
        setLoading
    } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const admissionForm = (data) => {
        console.log(data);
        const imageUrl = data.file[0];
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
                axios.post(`${import.meta.env.VITE_API_URL}/admissions`, {
                    name: data.name,
                    email: data.email,
                    address: data.address,
                    number: data.number,
                    birth: data.birth,
                    university: data.university,
                    subject: data.subject,
                    image: imageAdders,
                    rating: '4.8'
                })
                    .then(data => {
                        console.log(data);
                        if (data.data.insertedId) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Your Admission Successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
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
                                defaultValue={user?.displayName}
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
                                defaultValue={user?.email}
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
                    <div className="hidden">
                        {
                            filterCollege.map(college => <div
                                key={college?.id}>
                                <label
                                    htmlFor='name'
                                    className='form_label'>
                                    university*
                                </label>
                                <input
                                    type='text'
                                    name='university'
                                    id='university'
                                    defaultValue={college?.college_name}
                                    placeholder='Enter Your university'
                                    className='input_style'
                                    data-temp-mail-org='0'
                                    {...register("university", { required: true })}
                                />
                                {errors.name?.type === "required" && (
                                    <p className="text-red-600">university is required</p>
                                )}
                            </div>)
                        }
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