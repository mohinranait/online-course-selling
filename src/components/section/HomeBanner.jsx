import { CiCircleCheck } from "react-icons/ci";


const HomeBanner = () => {
    return (
        <section className="relative bg-center bg-cover" style={{backgroundImage: `url('https://demo-themewinter.com/courselog/wp-content/uploads/2020/12/hero_area_image.png')`}}>
            <div className=" absolute w-full h-full top-0 left-0 bg-gradient-to-r from-white "></div>
            <div className="box h-screen flex items-center relative">
                <div className="lg:grid grid-cols-2 ">
                    <div className="space-y-4">
                        <div>
                            <span className="text-base text-primary font-bold">100% QUALITY COURSES</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold py-4">Master the Skills to Drive <span className="text-primary">your Career</span> </h1>
                        <p>Free online courses from the world’s leading experts.
Join 17 million learners today.</p>
                        <ul className="space-y-1">
                            <li className="flex gap-2 items-center"><CiCircleCheck className="text-primary" size={20} />Learn the high-impact skills that top companies want.</li>
                            <li className="flex gap-2 items-center"><CiCircleCheck className="text-primary" size={20} />Lifetime access opertunitys</li>
                            <li className="flex gap-2 items-center"><CiCircleCheck className="text-primary" size={20} />Access more then 100K online courses.</li>
                            <li className="flex gap-2 items-center"><CiCircleCheck className="text-primary" size={20} />Learn with experts from world-leading universities.</li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;