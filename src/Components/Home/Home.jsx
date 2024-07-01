import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeatuedJobs from "../FeaturedJobs/FeatuedJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeatuedJobs></FeatuedJobs>
        </div>
    );
};

export default Home;