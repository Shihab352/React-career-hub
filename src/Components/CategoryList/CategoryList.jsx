import accounts from '../Images/accounts.png';
import  creative from '../Images/creative.png';
import marketing from '../Images/marketing.png';
import chip from '../Images/chip.png'

const CategoryList = () => {
    return (
        <div>
            <h2 className="text-5xl manrope-extrabold text-center my-5 ">Job Category List</h2>
            <p className="text-center manrope-medium text-lg">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                <div className='grid grid-cols-4 gap-7 my-10'>
                    {/* card 1 */}
                    <div className='bg-slate-800 p-7 rounded-3xl'>
                    <img src={accounts} alt="" />
                    <div className='mt-5 space-y-3'>
                        <h1 className='text-xl manrope-extrabold text-[#cdb6d8]'>Accounts & Finance</h1>
                        <p className='manrope-medium '>300 Jobs Available</p>
                    </div>
                </div>
                {/* card-2 */}
                <div className='bg-slate-800 p-7 rounded-3xl'>
                    <img src={creative} alt="" />
                    <div className='mt-5 space-y-3'>
                        <h1 className='text-xl manrope-extrabold text-[#cdb6d8]'>Creative Design</h1>
                        <p className='manrope-medium '>100 Jobs Available</p>
                    </div>
                </div>
                {/* card-3 */}
                <div className='bg-slate-800 p-7 rounded-3xl'>
                    <img src={marketing} alt="" />
                    <div className='mt-5 space-y-3' >
                        <h1 className='text-xl manrope-extrabold text-[#cdb6d8]'>Marketing & Sales</h1>
                        <p className='manrope-medium '>150 Jobs Available</p>
                    </div>
                </div>
                {/* card-4 */}
                <div className='bg-slate-800 p-7 rounded-3xl'>
                    <img src={chip} alt="" />
                    <div className='mt-5 space-y-3'>
                        <h1 className='text-xl manrope-extrabold text-[#cdb6d8]'>Engineering job</h1>
                        <p className='manrope-medium '>224 Jobs Available</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;