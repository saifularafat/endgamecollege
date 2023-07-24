import { PulseLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className=" flex items-center justify-center mt-56">
            <PulseLoader className="mx-auto
            animate-pulse"
                color="#FF3811"
                size={32} />
        </div>
    );
};

export default Loading;