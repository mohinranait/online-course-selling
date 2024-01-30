import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { FaLock, FaUnlock } from 'react-icons/fa';
import ReactPlayer from 'react-player'

const CourseVideo = () => {
    const {id} = useParams();
    const axios = useAxios();
    const {user} = useSelector(state => state.user)
    const [course, setCourse] = useState({})
    const [courseModules, setCourseModules] = useState([]);
    const [video, setVideo] = useState({});


    useEffect(() => {
        const getCourse = async () => {
            const res = await axios.get(`/course-video/${id}?userId=${user?._id}`)
            if(res.data?.success){

                console.log(res.data?.course);
                setCourse(res.data?.course);
            }
        };
        getCourse();
    },[id, user])

    console.log(video);
    useEffect(() => {
        const filterModuels = course?.course?.syllabus?.map(item => {
            return { 
                modules : course?.course?.modules?.filter(mod => {
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

    return (
        <>
            <div>
                <div className="px-2 lg:px-5  mx-auto">
                    <div className='grid lg:grid-cols-7 gap-5'>
                        <div className='order-2 lg:order-1 lg:col-span-2'>
                            <div className='h-screen bg-white overflow-y-auto'>
                                <div className='bg-primary px-6 py-5 rounded-md mb-5 mt-3'>
                                    <p className='text-white font-medium'>{course?.course?.name}</p>
                                    <p className='text-white text-sm'>Duration: {course?.course?.totalDuration}</p>
                                </div>
                                {
                                    courseModules?.map((item,index) =>  <ul key={index} className='bg-white '>
                                        <li className="bg-gray-100 px-4 py-2  flex justify-between  items-center">
                                            <div>
                                                <p className="text-sm font-medium">{item?.topic}</p>
                                                <p className="text-xs font-normal">{item?.content}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">{item?.week} Week</p>
                                            </div>
                                        </li>
                                        {
                                            item?.modules?.map((item,idx) =>  <li onClick={() => setVideo(item)} key={item?._id} className={`py-3 px-4 cursor-pointer group border-b border-gray-200 w-full flex justify-between ${video?._id == item?._id ? 'bg-primary text-white':'bg-white' } `}>
                                            <span className="flex items-center gap-3">
                                                <FaRegCirclePlay size={25} />
                                                <div >
                                                    <span className=" font-medium">{item?.name}</span>
                                                    
                                                    <p className=" text-xs ">Duration: {item?.duration}m</p>    
                                                </div>
                                            </span>
                                            <div className="flex gap-2 items-center">
                                            
                                                <span className="text-gray-600">
                                                    <FaUnlock className="text-green-500" /> 
                                                </span>
                                            </div>
                                        </li> )
                                        }
                                    
                                    </ul> )
                                }
                            
                            </div>
                        </div>
                        <div className='order-1 lg:order-2 lg:col-span-5 '>
                            <div className='mt-3 space-y-5'>
                                <div className='py-5 px-4 lg:px-8 bg-white rounded flex justify-between items-center shadow '>
                                    <span>{course?.course?.name}</span>
                                    <Link to={'/user/dashboard'}>Dashboard</Link>
                                </div>
                                <div>
                                    <div className='mb-4 '>
                                        <div className='mb-8'>
                                            <p className='text-xl font-semibold '>{video?.name}</p>
                                        </div>
                                        <div className='flex w-full  h-[200px] sm:h-[400px] md:h-[500px] lg:h-[400px] lg:w-[80%] mx-auto justify-center'>
                                            <ReactPlayer
                                                width={'100%'}
                                                height={"100%"}

                                            // className={`h-[100px]`}
                                                url={video?.video ? video?.video : 'https://www.youtube.com/watch?v=KLuTLF3x9sA'} 
                                            />
                                        </div>
                                      
                                    </div>
                                    <div className='flex items-center bg-white shadow rounded px-3 lg:px-7 py-3 justify-between'>
                                        <button className='px-4 py-2 rounded text-sm '>Prev</button>
                                        <button className='px-4 py-2 rounded text-sm '>Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default CourseVideo;