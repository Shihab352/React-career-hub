import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeatuedJobs = () => {
    const [jobs, setJobs] = useState([]);

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
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

        </div>
    );
};

export default FeatuedJobs;