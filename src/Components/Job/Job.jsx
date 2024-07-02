

const Job = ({ job }) => {
    const { logo, job_title,company_name,remote_or_onsite,location,job_type,salary} = job
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
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;