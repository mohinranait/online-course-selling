import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/card/CourseCard";
import { FaMapMarkerAlt,FaBuromobelexperte } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import data from "../../services/data";
import { TbFilterDown } from "react-icons/tb";



const InstructorWishCourse = () => {
    const {id} = useParams();
    const [courses, setCourses] = useState([]);
    const [instructor, setInstructor] = useState({})
    const axiosPublic = useAxiosPublic();

    const [toggleFetch, setToggleFetch] = useState(true)
    const [category, setCategory] = useState(null);
    const [skills, setSkills] = useState(null);
    const [reqFil, setReqFill] = useState('createdAt');
    const [isOrder, setIsOrder] = useState('desc');


    useEffect(() => {
        const fetchCourse = async () => {
            const res = await axiosPublic.get(`/instructorys-course/${id}?cat=${category || null}&&skil=${skills||null}&order=${isOrder||null}&filed=${reqFil||null}`);
            setCourses(res.data?.courses);
            setInstructor(res.data?.instructor);
        }
        fetchCourse();
    },[toggleFetch])

    const handlePriceFilter = e => {
        const val = e.target.value;
        setReqFill('price')
        if(val == 'high'){
            setIsOrder("desc")
        }else{
            setIsOrder("asc")
        }
    }



    return (
        <>
         <section className="mb-20 mt-10">
                <div className="box">
                    <div className="lg:grid lg:grid-cols-6 gap-5">
                        <div className="col-span-2 mb-16 lg:mb-0 mt-16 lg:mt-0">
                            <div className="border rounded-md bg-white overflow-hidden">
                                <div className="mb-7 pt-5">
                                    <img className={'w-[200px] h-[200px] rounded-full mx-auto'} src={instructor?.avater ? instructor?.avater : "https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_1-380x277.jpg"}  alt="" />
                                </div>
                                <div className="px-5">
                                    <p className="text-base font-medium text-gray-800 flex justify-between items-center mb-1"> <span className="text-gray-600">Instructor:</span> <span className="text-gray-400">{instructor?.name}</span></p>
                                    <p className="text-base font-medium text-gray-400 flex justify-between items-center"><span className="text-gray-600">Email:</span> <span className="text-gray-400">{instructor?.email}</span></p>
                                    <div className="mt-6">
                                        <p className="text-lg font-semibold text-gray-700">Bio</p>
                                        <p className="text-gray-600 text-sm">{instructor?.bio}</p>
                                    </div>
                                </div>
                                <div className="px-5 mt-6">
                                    <p className="text-lg font-semibold text-gray-700">Basic info</p>
                                </div>
                                <ul className="px-5 divide-y">
                                    <li className="flex py-3 justify-between items-center">
                                        <span className="flex gap-1 items-center">
                                            <FaBuromobelexperte />
                                            <span>Total course</span>
                                        </span>
                                        <span className="">
                                            2 Items
                                        </span>
                                    </li>
                                    <li className="flex flex-wrap py-3 justify-between items-center">
                                        <span className="flex gap-1 items-center">
                                            <FaMapMarkerAlt />
                                            <span>Location</span>
                                        </span>
                                        <span className="">
                                            Barguna, Bangladesh
                                        </span>
                                    </li>
                                    <li className="flex py-3 justify-between items-center">
                                        <span className="flex gap-1 items-center">
                                            <GrUserExpert />
                                            <span>Experience</span>
                                        </span>
                                        <span className="">
                                            2 Years
                                        </span>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="lg:col-span-4 space-y-4 ">
                            <div className="bg-white px-4 py-3 rounded shadow-sm">
                                <div className="flex flex-wrap lg:flex-nowrap items-center gap-5">
                                    <div className="">
                                        <span className="pr-3 flex items-center gap-2 font-medium"><TbFilterDown className="text-primary" />Filters</span>
                                    </div>
                                    <div className="bg-white border lg:w-full rounded-md ">
                                        <select 
                                        name="" id="" 
                                        className="py-3 w-full rounded-md px-4  outline-none "
                                        onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <option value="">All categorys</option>
                                            {
                                                data.categorys?.map(item => <option key={item?._id} value={item?.name}>{item?.name}</option> )
                                            }
                                        
                                        </select>
                                    </div>
                                    <div className="bg-white lg:w-full rounded-md">
                                        <select onChange={handlePriceFilter} name="" id="" className="py-3 border w-full rounded-md px-4 outline-none ">
                                            <option value="">All Price</option>
                                            <option value="low">Low</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>
                                    <div className="bg-white lg:w-full rounded-md ">
                                        <select  onChange={(e) => setSkills(e.target.value)} name="" id="" className="border py-3 w-full rounded-md px-4 outline-none ">
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
                            <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-5">
                                {
                                    courses?.map(course => <CourseCard key={course?._id} course={course} /> )
                                }
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>   
        </>
    );
};

export default InstructorWishCourse;