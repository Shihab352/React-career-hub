import { SlLocationPin } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo, job_title,company_name,remote_or_onsite,location,job_type,salary} = job
    return (
        <div>
            <div className="card card-compact bg-base-100  shadow-xl">
                <figure>
                    <img className="w-[150px] h-[50px]"
                        src={logo}
                        alt="" />
                </figure>
                <div className="">
                    <h2 className="card-title ">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="btn  px-5 py-2 font-extrabold rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="btn m-3 px-5 py-2 font-extrabold rounded border-[#7E90FE]  text-[#7E90FE] ">{job_type}</button>
                    </div>
                    <div className="my-4 flex gap-4 items-center">
<h2 className="flex gap-2"><SlLocationPin className="text-2xl"></SlLocationPin>{location}</h2>
<h2 className="flex gap-2"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>{salary}</h2>
                    </div>
                    <div className="card-actions">
                       <Link to={`/job/${id}`}> <button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;