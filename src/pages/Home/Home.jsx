import HomeBanner from "../../components/section/HomeBanner";
import HomeCategory from "../../components/section/HomeCategory";
import HomeCourse from "../../components/section/HomeCourse";


const Home = () => {
    return (
        <main className="mb-16">
            <HomeBanner />
            <HomeCategory />
            <HomeCourse />
        </main>
    );
};

export default Home;