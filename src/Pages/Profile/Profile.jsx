import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../components/useAuth";
import { HashLoader } from "react-spinners";
import { AiTwotoneHome } from "react-icons/ai";
import { GiBroccoli, GiEcology } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";
import { UsersData } from "../../api/useUserData";

const Profile = () => {
    const { user } = useAuth();
    console.log(user);
    // const [allUsers] = UsersData();
    // const filteRUser = allUsers.find(users => users.email === user.email)

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
        Swal.fire({
            title: 'Are you sure?',
            text: "Your web site New Admin selected",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes.!'
        }).then((result) => {
            // if (result.isConfirmed) {
            //     fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
            //         method: 'PATCH'
            //     })
            //         .then(res => res.json())
            //         .then(data => {
            //             console.log(data);
            //             if (data.modifiedCount) {
            //                 refetch();
            //                 Swal.fire(
            //                     '!Edit Your Profile',
            //                     'success'
            //                 )
            //             }
            //         })
            // }
        })
    }
    return (
        <div className="md:py-16 sm:py-10 py-8 bg-gradient-to-tr from-orange-300 to-green-300">
            <Helmet>
                <title>Education Master || Profile</title>
            </Helmet>
            <Container>
                <div>
                    <img src={user?.photoURL} alt="profile" 
                    title={user?.displayName}
                    className="w-32 h-32 mx-auto border-2 border-color-btn rounded-full" />
                </div>
                <div className="flex items-center justify-center pt-6 gap-5">
                    <Link to='/'>
                        <AiTwotoneHome className="fontSize" />
                    </Link>
                    <Link to='/colleges'>
                        <GiEcology className="fontSize" />
                    </Link>
                    <Link to='/admission'>
                        <MdAdminPanelSettings className="fontSize" />
                    </Link>
                    <Link to='/myCollege'>
                        <GiBroccoli className="fontSize" />
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
                            defaultValue={user?.displayName}
                            className='input_style'
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
                            defaultValue={user?.email}
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