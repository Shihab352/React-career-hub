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
            <h2 className="text-6xl">Featured Jobs :{jobs.length}</h2>
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, ipsa.</p>
            <div className="grid grid-cols-2 gap-6 my-10">

                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
<div className={dataLength === jobs.length && 'hidden'}>
    <button 
    onClick={()=> setDataLength(jobs.length)}
    className="btn btn-primary">Show All Jobs</button>
</div>
        </div>
    );
};

export default FeatuedJobs;