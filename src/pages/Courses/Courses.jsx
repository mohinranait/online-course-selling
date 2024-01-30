import { LiaAngleRightSolid } from "react-icons/lia";
import { Link, useSearchParams } from "react-router-dom";
import CourseCard from "../../components/card/CourseCard";
import { TbFilterDown } from "react-icons/tb";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import data from "../../services/data";


const Courses = () => {
    const axiosPublic = useAxiosPublic()
    const [courses, setCourse]= useState([])
    const [toggleFetch, setToggleFetch] = useState(true)

    const [category, setCategory] = useState(null);
    const [language, setLanguage] = useState(null);
    const [skills, setSkills] = useState(null);
    const [reqFil, setReqFill] = useState('createdAt');
    const [isOrder, setIsOrder] = useState('desc');

    const [params, setParams] = useSearchParams();
    const search = params.get('search');



    useEffect(() => {
        const getCourses = async () => {
            const res = await axiosPublic.get(`/courses?search=${search||null}&cat=${category || null}&lan=${language || null}&skil=${skills||null}&order=${isOrder||null}&filed=${reqFil||null}`);
            setCourse(res.data?.courses);
        }
        getCourses()
    },[toggleFetch,params])

    const handlePriceFilter = e => {
        const val = e.target.value;
        setReqFill('price')
        if(val == 'high'){
            setIsOrder("desc")
        }else{
            setIsOrder("asc")
        }
    }

    const handleSortByOrder = e => {
        const val = e.target.value;
        if(val == 'latest'){
            setReqFill('createdAt')
            setIsOrder("desc")
        }else if(val == 'oldest'){
            setReqFill('createdAt')
            setIsOrder("asc")
        }else if(val == 'atoz'){
            setReqFill('name')
            setIsOrder("asc")
        }else{
            setReqFill('name')
            setIsOrder("desc")
        }
        setToggleFetch(!toggleFetch)
    }

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
                                <select 
                                name="" id="" 
                                className="py-3 w-full rounded-md px-4 outline-none "
                                onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">All categorys</option>
                                    {
                                        data.categorys?.map(item => <option key={item?._id} value={item?.name}>{item?.name}</option> )
                                    }
                                   
                                </select>
                            </div>
                            <div className="bg-white lg:w-full rounded-md ">
                                <select  onChange={(e) => setLanguage(e.target.value)} name="" id="" className="py-3 w-full rounded-md px-4 outline-none ">
                                    <option value="">All Language</option>
                                    {
                                        data.language?.map(item =>  <option key={item?.name} value={item?.name}>{item?.name}</option> )
                                    }
                                </select>
                            </div>
                            <div className="bg-white lg:w-full rounded-md">
                                <select onChange={handlePriceFilter} name="" id="" className="py-3 w-full rounded-md px-4 outline-none ">
                                    <option value="">All Price</option>
                                    {/* <option value="">Free</option>
                                    <option value="">Paid</option> */}
                                    <option value="low">Low</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                            <div className="bg-white lg:w-full rounded-md ">
                                <select  onChange={(e) => setSkills(e.target.value)} name="" id="" className="py-3 w-full rounded-md px-4 outline-none ">
                                    <option value="">All Skills</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Advance">Advance</option>
                                    <option value="Intermediate">Intermediate</option>
                                </select>
                            </div>
                            <div>
                                <button onClick={() => setToggleFetch(!toggleFetch)} className="px-3 py-2 bg-red-600 text-white rounded-md">Filter</button>
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
                                <select onChange={handleSortByOrder} name="" id="" className="px-4 outline-none py-2">
                                    <option value="">Select order</option>
                                    <option value="latest">Latest</option>
                                    <option value="oldest">Oldest</option>
                                    <option value="atoz">A-Z alfabet</option>
                                    <option value="ztoa">Z-A alfabet</option>
                                </select>
                            </div>
                        </div>
                        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                            {
                                courses?.map(course => <CourseCard key={course?._id} course={course} /> )
                            }
                        
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Courses;