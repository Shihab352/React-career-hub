

const Job = ({job}) => {
    const {logo} = job
    return (
        <div>
            <img className="w-[150px] h-[50px]" src={logo} alt="" />
        </div>
    );
};

export default Job;