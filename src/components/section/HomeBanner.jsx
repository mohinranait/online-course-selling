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
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum unde eveniet illum aspernatur, ullam explicabo optio, quisquam quae, repellendus </p>
                        <ul className="space-y-1">
                            <li className="flex gap-2 items-center"><CiCircleCheck className="text-primary" size={20} />Lorem ipsum dolor sit amet.d</li>
                            <li className="flex gap-2 items-center"><CiCircleCheck className="text-primary" size={20} />Lorem ipsum dolor sit amet.d</li>
                            <li className="flex gap-2 items-center"><CiCircleCheck className="text-primary" size={20} />Lorem ipsum dolor sit amet.d</li>
                            <li className="flex gap-2 items-center"><CiCircleCheck className="text-primary" size={20} />Lorem ipsum dolor sit amet.d</li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;