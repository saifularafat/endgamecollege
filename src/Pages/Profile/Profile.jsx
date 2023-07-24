import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../components/useAuth";
import { HashLoader } from "react-spinners";

const Profile = () => {
    const {
        loading,
        setLoading,
        updateUserProfile,
    } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const profileForm = (data) => {
        console.log(data);
    }
    return (
        <div className="md:py-16 sm:py-10 py-8">
            <Helmet>
                <title>Education Master || Profile</title>
            </Helmet>
            <Container>
                <div>
                    <img src="" alt="profile" className="w-24 h-24 mx-auto border-2 border-color-btn rounded-full" />
                </div>
                <div className="flex items-center justify-center gap-5">
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to='/colleges'>
                        College
                    </Link>
                    <Link to='/admission'>
                        Admission
                    </Link>
                    <Link to='/myCollege'>
                        My College
                    </Link>
                </div>
                <form
                    onSubmit={handleSubmit(profileForm)}
                    className="md:pt-10 pt-8 space-y-2"
                >
                    <div className="md:w-3/5 mx-auto">
                        <label
                            htmlFor='name'
                            className='form_label'>
                            Name
                        </label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            defaultValue={''} className='input_style'
                            data-temp-mail-org='0'
                        />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <label
                            htmlFor='name'
                            className='form_label'>
                            Email
                        </label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            defaultValue={''}
                            className='input_style'
                            data-temp-mail-org='0'
                        />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <label
                            htmlFor='name'
                            className='form_label'>
                            University
                        </label>
                        <input
                            type='text'
                            name='university'
                            id='university'
                            defaultValue={''}
                            className='input_style'
                            data-temp-mail-org='0'
                        />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <label
                            htmlFor='name'
                            className='form_label'>
                            Address
                        </label>
                        <input
                            type='text'
                            name='address'
                            id='address'
                            defaultValue={''}
                            className='input_style'
                            data-temp-mail-org='0'
                        />
                    </div>
                    <div className="md:w-3/5 mx-auto">
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
                                    'Save'
                            }

                        </button>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default Profile;