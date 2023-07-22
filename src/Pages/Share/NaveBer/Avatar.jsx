import useAuth from '../../../components/useAuth';
import img from '../../../assets/avater.png'
const Avatar = () => {
    const { user } = useAuth();
    return (
        <img src={user && user?.photoURL ?
            user?.photoURL : img}
            title= {user?.displayName}
            className="rounded-full w-14 h-14"
            referrerPolicy="no-referrer"
            alt="Profile photo"
           />
    );
};

export default Avatar;