import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job=> job.id === idInt);
    // console.log(job);

    const handleApplyJob =()=>{
        saveJobApplication(idInt);
        toast('You have Apply Successfully')
    }
    return (
        <div>
            <h2 className="text-5xl manrope-extrabold text-center my-10">Job Details </h2>
            <div className="grid gap-4 md:grid-cols-4 border p-5">
                <div className=" md:col-span-3">
                    <h2 className=""> <b className="text-lg">Job Description</b> : {job.job_description}</h2>
                    <h2 className="my-3"><b className="text-lg">Job Responsibility  </b> : {job.job_responsibility}</h2>
                    <h2 className="my-3 space-y-3"><b className="text-lg">Educational Requirments </b> : <br />
                    <p> {job.educational_requirements}</p></h2>
                    <h2 className="my-3 space-y-3"><b className="text-lg">Experience </b> : <br />
                    <p> {job.experiences}</p></h2>
                </div>
                <div className="border p-5">
                    <h2 className="text-xl manrope-extrabold border-b"> Job Details </h2>
                    <div>
                        <h2> Salary : <span>{job.job.salary}</span></h2>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
