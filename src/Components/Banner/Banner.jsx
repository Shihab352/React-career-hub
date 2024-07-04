import user from '../Images/user.png'

const Banner = () => {
    return (
        <div>
            <div className='flex items-center justify-between my-20 bg-slate-800 p-10 rounded-[32px]'>
            <div className="space-y-5">
                <h1 className="text-7xl manrope-extrabold leading-snug ">One Step <br />
                Closer To Your <br />
                 <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text" >Dream Job</span> </h1>
                <p className="manrope-medium text-lg text-[#757575] ">Explore thousands of job opportunities with all the 
                information
                  you need. Its your future. Come find it. Manage all 
                <br />
                 your job application from start to finish. </p>

                <button className="btn text-xl manrope-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button> 
            </div>
            <div>
                <img className='ml-10' src={user} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;