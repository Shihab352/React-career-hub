import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-h-max text-center mt-64">
            <h2 className="text-4xl my-8 font-bold">Opps!!!!</h2>
            <button className="btn btn-primary bg-slate-400 text-xl font-semibold "><Link to={'/'}>Go Back To Home</Link></button>
        </div>
    );
};

export default ErrorPage;