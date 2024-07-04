import { SlLocationPin } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Job = ({ job }) => {
    const {id, logo, job_title,company_name,remote_or_onsite,location,job_type,salary} = job
    return (
        <div>
            <div className="card card-compact bg-base-100 border p-5 space-y-3 shadow-xl ">
                <figure>
                    <img className="w-[150px] h-[50px]"
                        src={logo}
                        alt="" />
                </figure>
                <div className="">
                    <h2 className=" manrope-extrabold text-2xl " >{job_title}</h2>
                    <p className="manrope-semibold text-xl">{company_name}</p>
                    <div>
                        <button className="btn  px-5 py-2 manrope-extrabold rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="btn m-3 px-5 py-2 manrope-extrabold rounded border-[#7E90FE]  text-[#7E90FE] ">{job_type}</button>
                    </div>
                    <div className="my-4 flex gap-4 items-center justify-center">
<h2 className="flex gap-2 text-xl manrope-semibold text-gray-400"><SlLocationPin className="text-2xl"></SlLocationPin>{location}</h2>
<h2 className="flex gap-2 text-xl manrope-semibold text-gray-400"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>{salary}</h2>
                    </div>
                    <div className="">
                       <Link to={`/job/${id}`}> <button className="btn text-xl manrope-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job : PropTypes.object
}
export default Job;