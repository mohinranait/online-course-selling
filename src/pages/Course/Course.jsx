import { FaLock,  FaRegCirclePlay, FaRegUser, FaStar, FaUnlock } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

import { GrNotes } from "react-icons/gr";
import { IoIosStar } from "react-icons/io";
import {Link, useLoaderData} from "react-router-dom"
import { LiaAngleRightSolid } from "react-icons/lia";
import { CiClock2 } from "react-icons/ci";
import { BsTranslate } from "react-icons/bs";
import { useEffect, useState } from "react";
import Rating from "react-rating"
import CourseRatingItem from "../../components/ratings/CourseRatingItem";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { GiNetworkBars } from "react-icons/gi";


const isTabs = [
    {_id: 1, label: 'Overview', value:"Overview"},
    {_id: 2, label: 'Curriculum', value:"Curriculum"},
    {_id: 3, label: 'Instructor', value:"Instructor"},
    {_id: 4, label: 'Reviews', value:"Reviews"},
]



const Course = () => {
    const [courseModules, setCourseModules] = useState([]);
    const [isToggle, setIsToggle] = useState('Overview')
    const {course} = useLoaderData();

    useEffect(() => {
        const filterModuels = course?.syllabus?.map(item => {
            return { 
                modules : course?.modules?.filter(mod => {
                    if(mod?.weeklySyllabus == item?.week){
                        return mod;
                    }
                }),
                topic: item?.topic,
                content: item?.content,
                week: item?.week,
            }
        })
        setCourseModules(filterModuels);
    },[course])
console.log(courseModules);
    return (
       <>
            <section>
                <div className="box flex items-center my-6">
                    <div className="grid w-full lg:grid-cols-4 py-8 bg-gradient-to-r to-cyan-500 from-blue-500 px-7 rounded-md">
                        <div className="lg:col-span-3 space-y-4">
                            <ul className="flex items-center gap-4 text-sm text-gray-200 pb-4">
                                <li><Link to="/" className="text-gray-300 font-medium">Home</Link></li> <LiaAngleRightSolid />
                                <li><Link to="/" className="text-gray-300 font-medium">Course</Link></li> <LiaAngleRightSolid />
                                <li><span>{course?.name}</span></li>
                            </ul>
                            <h1 className="text-3xl xl:text-4xl font-bold text-white ">{course?.name}</h1>
                            <p className="text-gray-200">{course?.descripton}</p>
                            <ul className="flex items-center gap-4 ">
                                <li className="flex items-center gap-1 text-sm text-white font-medium"><FaRegUser size={18} /> <span>{course?.totalStudents?.length} Students</span> </li>
                                <li className="flex items-center gap-1 text-sm text-white font-medium"><GrNotes size={18} /> <span>1 Lession</span> </li>
                                <li className="flex items-center gap-1 text-sm text-white font-medium"><FiClock size={18} /> <span>{course?.totalDuration} Minutes</span> </li>
                            </ul>
                            <div className="flex gap-4">
                                <Link className="w-[40px] h-[40px] rounded-full bg-white ring-4 ring-gray-200">
                                    <img src={course?.author?.avater ? course?.author?.avater :"https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads//learn-press-profile/4/5a084ec8c7fddeff9644d1ba46c5eb06.jpeg"} className="w-[38px] h-[38px] rounded-full" alt="" />
                                </Link>
                                <div>
                                    <Link to={'/'} className="text-white">{course?.author?.name}</Link>
                                    <ul className="flex  items-center">
                                        <li><IoIosStar className="text-gray-500" /></li>
                                        <li><IoIosStar className="text-gray-500" /></li>
                                        <li><IoIosStar className="text-gray-500" /></li>
                                        <li><IoIosStar className="text-gray-500" /></li>
                                        <li><IoIosStar className="text-gray-500" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-20">
                <div className="box">
                    <div className="lg:grid lg:grid-cols-6 gap-5">
                        <div className="lg:col-span-4 ">
                            <div>
                                <ul className="flex gap-4 items-center">
                                    {
                                        isTabs?.map(item => <li key={item?._id} onClick={() => setIsToggle(item?.label) } className={`w-full inline-block  py-4 rounded-md  text-center font-medium cursor-pointer ${isToggle == item?.label ? 'bg-primary text-white':'text-gray-800 bg-white'} `}>{item?.value}</li> )
                                    }
                                </ul>

                                <div className={`mt-7 ${isToggle == 'Overview' ? 'block' :'hidden'} `}>
                                    <p className="text-3xl font-semibold ">Course Description</p>
                                    <div className="space-y-3 mt-3">
                                    <p>{course?.descripton}</p>
                                    </div>
                                </div>
                                {/* Curriculum */}
                                <div className={`mt-7 ${isToggle == 'Curriculum' ? 'block' :'hidden'} `}>
                                    <p className="text-3xl font-semibold ">Course Curriculum</p>
                                    <div className="space-y-3 mt-4">
                                       
                                        <div className="bg-white rounded-md p-8">
                                            <div className="flex justify-between mb-3">
                                                <span className="text-gray-800 font-medium">Module</span>
                                                <span className="text-gray-800 font-medium">Access</span>
                                            </div>
                                            <hr />
                                            {
                                                courseModules?.map((item,index) =>  <ul key={index} className="border-x">
                                                <li className="bg-gray-100 px-4 py-2  flex justify-between  items-center">
                                                    <div>
                                                        <p className="text-lg font-medium">{item?.topic}</p>
                                                        <p className="text-base font-normal">{item?.content}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-lg font-medium">{item?.week} Week</p>
                                                    </div>
                                                </li>
                                                {
                                                    item?.modules?.map(item =>   <li key={item?._id} className="py-3 px-4 cursor-pointer group border-b border-gray-200 w-full flex justify-between">
                                                    <span className="flex items-center gap-3">
                                                        <FaRegCirclePlay size={25} />
                                                        <div >
                                                            <span className="group-hover:text-primary font-medium">{item?.name}</span>
                                                            
                                                            <p className="text-gray-500 text-xs group-hover:text-primary">Duration: {item?.duration}m</p>    
                                                        </div>
                                                    </span>
                                                    <div className="flex gap-2 items-center">
                                                    
                                                        <span className="text-gray-600">
                                                            {item?.isLock ? <FaLock className="text-red-600" /> : <FaUnlock className="text-green-500" />  }
                                                        </span>
                                                    </div>
                                                </li> )
                                                }
                                                
                                                </ul> )
                                            }
                                     
                                        </div>
                                 
                                   
                                    </div>
                                </div>
                                {/* Instructor */}
                                <div className={`mt-7 ${isToggle == 'Instructor' ? 'block' :'hidden'} `}>
                                    <p className="text-3xl font-semibold ">Course Instructors</p>
                                    <div className="space-y-3 mt-3">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsa similique minima dicta esse, laborum, amet, id repudiandae debitis incidunt unde eveniet eligendi sunt facere .</p>
                                   
                                    </div>
                                    <div className="flex gap-6 mt-8">
                                        <div >
                                            <span className="w-[180px] h-[180px] rounded-full inline-block">
                                                <img src={ course?.author?.avater ? course?.author?.avater :  "https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads//learn-press-profile/4/5a084ec8c7fddeff9644d1ba46c5eb06.jpeg"} className="w-[180px] h-[180px] rounded-full" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <p><Link to={'/'} className="text-xl font-bold ">{course?.author?.name}</Link></p>
                                            <ul className="flex items-center gap-4 mt-2">
                                                <li className="flex items-center gap-1 text-sm text-gray-600 font-medium"><FaRegUser size={18} /> <span>120 Students</span> </li>
                                                <li className="flex items-center gap-1 text-sm text-gray-600 font-medium"><GrNotes size={18} /> <span>6 Lession</span> </li>
                                                <li className="flex items-center gap-1 text-sm text-gray-600 font-medium"><FiClock size={18} /> <span>9 Hours</span> </li>
                                            </ul>
                                            <ul className="flex  items-center mt-3">
                                                <li><IoIosStar className="text-gray-500" /></li>
                                                <li><IoIosStar className="text-gray-500" /></li>
                                                <li><IoIosStar className="text-gray-500" /></li>
                                                <li><IoIosStar className="text-gray-500" /></li>
                                                <li><IoIosStar className="text-gray-500" /></li>
                                            </ul>
                                            <p className="mt-3">{course?.author?.bio}</p>
                                        </div>
                                    </div>
                                   
                                   
                                </div>
                                {/* Reviews */}
                                <div className={`mt-7 ${isToggle == 'Reviews' ? 'block' :'hidden'} `}>
                                    <p className="text-3xl font-semibold ">Course Instructors</p>
                                    <div className="space-y-3 mt-3">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsa similique minima dicta esse, laborum, amet, id repudiandae debitis incidunt unde eveniet eligendi sunt facere .</p>
                                   
                                    </div>
                                    <div className="lg:grid grid-cols-3 pb-5 mt-7 gap-5">
                                        <div className=" space-y-2 mb-6 lg:mb-0">
                                            <div className="flex items-center gap-2"><span className="text-3xl font-bold">0 <span className="text-xl">/ 5</span></span> <span className="text-white bg-[#FD8C00] text-xs py-1 px-3">  Top Rated</span> </div>
                                            <div className="flex items-center gap-2"> 
                                                {
                                                    <Rating
                                                        initialRating={4 }
                                                        readonly
                                                        emptySymbol={<FaStar size={18} color="#E5E5E5"  className="mr-1" />}
                                                        fullSymbol={<FaStar size={18} color="#FD8C00" className="mr-1" />}
                                                    />
                                                }
                                            </div>
                                            <p className="text-gray500 text-xs font-medium text-gray-600">{'0'} Ratings</p>
                                        </div>
                                        <div className="col-span-2">
                                            <ul className="space-y-1">
                                                {
                                                    [1,2,3,4,5]?.map((rating,index) =>  <CourseRatingItem key={index} index={index} rating={rating}  /> )
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                    <form action="" className="space-y-5 mt-16">
                                        <p className="text-2xl text-gray-700 font-medium">Comments</p>
                                        <div className="lg:grid gap-5   grid-cols-2">
                                            <input type="text" className="w-full py-3 px-3 outline-none bg-white border border-gray-200 rounded" placeholder="Name..." />
                                            <input type="text" className="w-full py-3 px-3 outline-none bg-white border border-gray-200 rounded" placeholder="Email..." />
                                        </div>
                                        <div>
                                            <textarea name="" id="" cols="30" rows="3" className="w-full py-3 px-3 outline-none bg-white border border-gray-200 rounded" ></textarea>
                                        </div>
                                        <div>
                                            <button className=" px-6 rounded-md py-3 text-center text-white bg-primary font-medium">Submit comment</button>
                                        </div>
                                    </form>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 ">
                            <div className="border rounded-md bg-white overflow-hidden">
                                <div className="mb-7">
                                    <img src={course?.image ? course?.image : "https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_1-380x277.jpg"} className="w-full" alt="" />
                                </div>
                                <div className="px-5 mb-5 ">
                                    <div className="flex items-center justify-between text-2xl font-semibold mb-4">
                                        <span >Pay</span>
                                        <span className="text-primary">$ {course?.price}</span>
                                    </div>
                                    <button className="w-full rounded-md py-3 text-center text-white bg-primary font-medium">Buy now</button>
                                </div>
                                <div className="px-5">
                                    <span className="text-xl font-semibold text-gray-800  inline-block">This Course Includes:</span>
                                </div>
                                <ul className="px-5 divide-y">
                                    
                                    <li className="flex py-3 justify-between items-center">
                                        <span className="flex gap-1 items-center">
                                            <GiNetworkBars />
                                            <span>Course Level</span>
                                        </span>
                                        <span className="">
                                                {course?.courseLevel}
                                        </span>
                                    </li>
                                    <li className="flex py-3 justify-between items-center">
                                        <span className="flex gap-1 items-center">
                                            <CiClock2 />
                                            <span>Course Level</span>
                                        </span>
                                        <span className="">
                                            {course?.totalDuration} Minutes
                                        </span>
                                    </li>
                                    <li className="flex py-3 justify-between items-center">
                                        <span className="flex gap-1 items-center">
                                            <HiOutlineBadgeCheck />
                                            <span>Certificate</span>
                                        </span>
                                        <span className="">
                                                {course?.certificate ? "Yes" : "No"}
                                        </span>
                                    </li>
                                    <li className="flex py-3 justify-between items-center">
                                        <span className="flex gap-1 items-center">
                                            <FaMapMarkerAlt />
                                            <span>Location</span>
                                        </span>
                                        <span className="">
                                                {course?.location}
                                        </span>
                                    </li>
                                    <li className="flex py-3 justify-between items-center">
                                        <span className="flex gap-1 items-center">
                                            <BsTranslate />
                                            <span>Language</span>
                                        </span>
                                        <span className="">
                                            {course?.language}
                                        </span>
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Course;