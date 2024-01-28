import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import CourseCard from "../../components/card/CourseCard";
import { TbFilterDown } from "react-icons/tb";


const Courses = () => {
    return (
        <>
            <section>
                <div className="box flex items-center my-6">
                    <div className="grid lg:grid-cols-4 w-full py-16 bg-gradient-to-r to-cyan-500 from-blue-500 px-7 rounded-md">
                        <div className="lg:col-span-3 w-full ">
                            <ul className="flex items-center gap-4 text-sm text-gray-200 pb-4">
                                <li><Link to="/" className="text-gray-300 font-medium">Home</Link></li> <LiaAngleRightSolid />
                                <li><Link to="/" className="text-gray-300 font-medium">Shop</Link></li>
                            </ul>
                            <h1 className="text-3xl xl:text-4xl font-bold text-white ">Courses</h1>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="box space-y-5">
                    <div className="bg-gray-100 rounded-md px-8 py-7">
                        <div className="flex flex-wrap lg:flex-nowrap items-center gap-5">
                            <div className="">
                                <span className="pr-3 flex items-center gap-2 font-medium"><TbFilterDown className="text-primary" />Filters</span>
                            </div>
                            <div className="bg-white lg:w-full rounded-md ">
                                <select name="" id="" className="py-3 w-full rounded-md px-4 outline-none ">
                                    <option value="">All categorys</option>
                                    <option value="">Web design</option>
                                </select>
                            </div>
                            <div className="bg-white lg:w-full rounded-md ">
                                <select name="" id="" className="py-3 w-full rounded-md px-4 outline-none ">
                                    <option value="">All Language</option>
                                    <option value="">English</option>
                                    <option value="">Bangla</option>
                                </select>
                            </div>
                            <div className="bg-white lg:w-full rounded-md">
                                <select name="" id="" className="py-3 w-full rounded-md px-4 outline-none ">
                                    <option value="">All Price</option>
                                    <option value="">Free</option>
                                    <option value="">Paid</option>
                                    <option value="">Low</option>
                                    <option value="">High</option>
                                </select>
                            </div>
                            <div className="bg-white lg:w-full rounded-md ">
                                <select name="" id="" className="py-3 w-full rounded-md px-4 outline-none ">
                                    <option value="">All Skills</option>
                                    <option value="">Bigneer</option>
                                    <option value="">Advance</option>
                                    <option value="">Intermediate</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-14">
                    <div className="box">
                        <div className="flex flex-col sm:flex-row pb-5 justify-between items-center">
                            <span> Showing 1-6 of 6 results </span>
                            <div className="flex items-center gap-3 ">
                                <span>Sort by:</span>
                                <select name="" id="" className="px-4 outline-none py-2">
                                    <option value="">Select order</option>
                                    <option value="">Latest</option>
                                    <option value="">Oldest</option>
                                    <option value="">Alfabet</option>
                                </select>
                            </div>
                        </div>
                        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                            <CourseCard />
                            <CourseCard />
                            <CourseCard />
                            <CourseCard />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Courses;