import Avatar from "./Avatar";
import DarkLight from "./DarkMode";

const Profile = () => {
    return (
        <div className="flex md:flex-row flex-row-reverse items-center  md:mr-0">
            <div className="mr-3 md:mr-0">
                {/* <Avatar /> */}
            </div>
            <div className="pl-2">
                <DarkLight />
            </div>
        </div>
    );
};

export default Profile;