import { CgCalendarDates, CgCalendarDue, CgPathExclude } from "react-icons/cg";
import { IoMdSchool } from "react-icons/io";
import { BiReceipt, BiSolidTimeFive, BiTime } from "react-icons/bi";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdHolidayVillage, MdOutlineAccountBalance } from "react-icons/md";

const AdmissionProcess = ({ admissions }) => {
    console.log(admissions);
    return (
        <div className="sm:flex justify-center sm:text-start text-center sm:gap-3 md:gap-6 gap-2">
            <div className="md:pr-10 sm:pr-6 sm:border-r-2 space-y-2 md:px-0 sm:px-0 px-8">
                <h2 className="admission_title ">Admission Process</h2>
                <div className="flex items-center gap-2 mx-auto">
                    <IoMdSchool className="admission_fontSize" />
                    <p className="admission_desc"><span className="font-mono text-orange-800">{admissions?.admission_process[0]}</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <BiReceipt className="admission_fontSize" />
                    <p className="admission_desc"><span className="font-mono text-orange-800">{admissions?.admission_process[1]}</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <CgPathExclude className="admission_fontSize" />
                    <p className="admission_desc"><span className="font-mono text-orange-800">{admissions?.admission_process[2]}</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <GoProjectRoadmap className="admission_fontSize" />
                    <p className="admission_desc"><span className="font-mono text-orange-800">{admissions?.admission_process[3]}</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <FaRegMoneyBillAlt className="admission_fontSize" />
                    <p className="admission_desc"><span className="font-mono text-orange-800">{admissions?.admission_process[4]}</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <MdOutlineAccountBalance className="admission_fontSize" />
                    <p className="admission_desc"><span className="font-mono text-orange-800">{admissions?.admission_process[5]}</span></p>
                </div>
            </div>
            <div className="md:pl-6 sm:pl-3 space-y-2 md:px-0 sm:px-0 px-8 md:pt-0 sm:pt-0 pt-8">
                <h2 className="admission_title">Admission Date</h2>
                <div className="flex items-center gap-2">
                    <CgCalendarDates className="admission_fontSize" />
                    <p className="admission_desc">Start Date: <span className="font-mono text-orange-800">{admissions?.date}</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <CgCalendarDue className="admission_fontSize" />
                    <p className="admission_desc">End Date: <span className="font-mono text-orange-800">00-00-0000</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <MdHolidayVillage className="admission_fontSize" />
                    <p className="admission_desc">Day :<span className="font-mono text-orange-800"> Sat - Thu</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <BiTime className="admission_fontSize" />
                    <p className="admission_desc">Morning Time :<span className="font-mono text-orange-800"> 08:30AM - 11: 30AM</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <BiSolidTimeFive className="admission_fontSize" />
                    <p className="admission_desc">Evening Time :<span className="font-mono text-orange-800"> 02:30PM - 05:30PM</span></p>
                </div>
            </div>
        </div>
    );
};

export default AdmissionProcess;