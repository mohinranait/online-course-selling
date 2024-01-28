import { FaRegUser, FaStar } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { IoIosStar } from "react-icons/io";
import {Link} from "react-router-dom"
import { LiaAngleRightSolid } from "react-icons/lia";
import { CiClock2 } from "react-icons/ci";
import { useState } from "react";
import Rating from "react-rating"
import CourseRatingItem from "../../components/ratings/CourseRatingItem";


const isTabs = [
    {_id: 1, label: 'Overview', value:"Overview"},
    {_id: 2, label: 'Curriculum', value:"Curriculum"},
    {_id: 3, label: 'Instructor', value:"Instructor"},
    {_id: 4, label: 'Reviews', value:"Reviews"},
]



const Course = () => {
    const [isToggle, setIsToggle] = useState('Overview')


    return (
       <>
            <section>
                <div className="box flex items-center my-6">
                    <div className="grid w-full lg:grid-cols-4 py-8 bg-gradient-to-r to-cyan-500 from-blue-500 px-7 rounded-md">
                        <div className="lg:col-span-3 space-y-4">
                            <ul className="flex items-center gap-4 text-sm text-gray-200 pb-4">
                                <li><Link to="/" className="text-gray-300 font-medium">Home</Link></li> <LiaAngleRightSolid />
                                <li><Link to="/" className="text-gray-300 font-medium">Course</Link></li> <LiaAngleRightSolid />
                                <li><span>Web design and web development using React and Next.js</span></li>
                            </ul>
                            <h1 className="text-3xl xl:text-4xl font-bold text-white ">Web design and web development using React and Next.js</h1>
                            <p className="text-gray-200"> Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus officiis perferendis quasi facere autem tempora aut exercitationem aliquid accusantium quam rem ipsum ab minima atque, saepe officia earum numquam.</p>
                            <ul className="flex items-center gap-4 ">
                                <li className="flex items-center gap-1 text-sm text-white font-medium"><FaRegUser size={18} /> <span>120 Students</span> </li>
                                <li className="flex items-center gap-1 text-sm text-white font-medium"><GrNotes size={18} /> <span>6 Lession</span> </li>
                                <li className="flex items-center gap-1 text-sm text-white font-medium"><FiClock size={18} /> <span>9 Hours</span> </li>
                            </ul>
                            <div className="flex gap-4">
                                <Link className="w-[40px] h-[40px] rounded-full bg-white ring-4 ring-gray-200">
                                    <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads//learn-press-profile/4/5a084ec8c7fddeff9644d1ba46c5eb06.jpeg" className="w-[38px] h-[38px] rounded-full" alt="" />
                                </Link>
                                <div>
                                    <Link to={'/'} className="text-white">Mohin Rana</Link>
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
                                    <div className="space-y-3">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsa similique minima dicta esse, laborum, amet, id repudiandae debitis incidunt unde eveniet eligendi sunt facere porro culpa est nisi aliquid iusto voluptate nobis. Possimus quo similique magnam deserunt necessitatibus eos.</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsa similique minima dicta esse, laborum, amet, id repudiandae debitis incidunt unde eveniet eligendi sunt facere porro culpa est nisi aliquid iusto voluptate nobis. Possimus quo similique magnam deserunt necessitatibus eos.</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsa similique minima dicta esse, laborum, amet, id repudiandae debitis incidunt unde eveniet eligendi sunt facere porro culpa est nisi aliquid iusto voluptate nobis. Possimus quo similique magnam deserunt necessitatibus eos.</p>
                                    </div>
                                </div>
                                {/* Curriculum */}
                                <div className={`mt-7 ${isToggle == 'Curriculum' ? 'block' :'hidden'} `}>
                                    <p className="text-3xl font-semibold ">Course Curriculum</p>
                                    <div className="space-y-3">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsa similique minima dicta esse, laborum, amet, id repudiandae debitis incidunt unde eveniet eligendi sunt facere porro culpa est nisi aliquid iusto voluptate nobis. Possimus quo similique magnam deserunt necessitatibus eos.</p>
                                   
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
                                                <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads//learn-press-profile/4/5a084ec8c7fddeff9644d1ba46c5eb06.jpeg" className="w-[180px] h-[180px] rounded-full" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <p><Link to={'/'} className="text-xl font-bold ">Mohin Rand</Link></p>
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
                                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa voluptas consequuntur soluta ipsam facilis optio alias laboriosam distinctio quaerat!</p>
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
                                    <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_1-380x277.jpg" className="w-full" alt="" />
                                </div>
                                <div className="px-5 mb-5 ">
                                    <div className="flex items-center justify-between text-2xl font-semibold mb-4">
                                        <span >Pay</span>
                                        <span className="text-primary">$ 30</span>
                                    </div>
                                    <button className="w-full rounded-md py-3 text-center text-white bg-primary font-medium">Buy now</button>
                                </div>
                                <div className="px-5">
                                    <span className="text-xl font-semibold text-gray-800  inline-block">This Course Includes:</span>
                                </div>
                                <ul className="px-5 divide-y">
                                    <li className="flex py-3 justify-between items-center">
                                        <span className="flex gap-1 items-center">
                                            <CiClock2 />
                                            <span>Course Level</span>
                                        </span>
                                        <span className="">
                                            10 minutes
                                        </span>
                                    </li>
                                    <li className="flex py-3 justify-between items-center">
                                        <span className="flex gap-1 items-center">
                                            <CiClock2 />
                                            <span>Course Level</span>
                                        </span>
                                        <span className="">
                                            10 minutes
                                        </span>
                                    </li>
                                    <li className="flex py-3 justify-between items-center">
                                        <span className="flex gap-1 items-center">
                                            <CiClock2 />
                                            <span>Course Level</span>
                                        </span>
                                        <span className="">
                                            10 minutes
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