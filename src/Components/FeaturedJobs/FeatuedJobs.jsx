import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeatuedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));

    }, [])
    return (
        <div className="text-center">
            <h2 className="text-5xl manrope-extrabold text-center my-5 ">Featured Jobs :{jobs.length}</h2>
            <p className="text-center manrope-medium text-lg">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6 my-10">

                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
<div className={dataLength === jobs.length && 'hidden'}>
    <button 
    onClick={()=> setDataLength(jobs.length)}
    className="manrope-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 rounded-xl my-4">Show All Jobs</button>
</div>
        </div>
    );
};

export default FeatuedJobs;