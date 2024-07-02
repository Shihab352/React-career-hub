import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
import { list } from "postcss";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedjobs] = useState([]);
    const [displayJobs,setDisplayJobs] = useState([]);

    useEffect(()=>{
      const storedJobIds = getStoredJobApplication();
      if(jobs.length > 0){
        // const jobsApplied = jobs.filter (job=>storedJobIds.includes(job.id));
        const jobsApplied=[];
        for(const id of storedJobIds){
            const job = jobs.find(job=>job.id === id);
            if(job){
                jobsApplied.push(job);
            }
        }
        setAppliedjobs(jobsApplied);
        setDisplayJobs(jobsApplied);
        // console.log(jobs, storedJobIds, jobsApplied);
      }  
    },[jobs])
    return (
        <div>
            <h2 className="text-2xl">Jobs I applied : {appliedJobs.length}</h2>
            <details className="dropdown">
  <summary className="btn m-1">Filter by</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>All</a></li>
    <li><a>Remote</a></li>
    <li><a>Onsite</a></li>
  </ul>
</details>
            <ul>
                {
                    appliedJobs.map(job=> <li key={job.id}>
                        <span>{job.job_title} {job.company_name} : {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;