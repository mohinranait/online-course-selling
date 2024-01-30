
import { FaRegCirclePlay } from "react-icons/fa6";
import Input from "../../components/Input/Input";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import {  useParams } from "react-router-dom";
import { FaUnlock } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {useEffect, useState} from "react"
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ModuleAdd = () => {
    const [course, setCourse] = useState({});
    const {id} = useParams();
    const axiosPublic= useAxiosPublic();
    const [courseModules, setCourseModules] = useState([]);
    const {user} = useSelector(state => state.user)
    const axios = useAxios();
    const [allSyllabus, setAllSyllabus]= useState([]);
    const [modules, setModules] = useState([])

   


    const handleSubmitModule = async e => {
        e.preventDefault();

        const form = e.target;
        const duration = form.duration.value;
        const name = form.name.value;
        const isLock = form.isLock.value || true;
        const video = form.video.value;
        const weeklySyllabus = form.weeklySyllabus.value;

        if( !name ) return toast.error("Name is required")
        if( !duration ) return toast.error("Duration is required")
        if( !weeklySyllabus ) return toast.error("Week is required")
        if( !video ) return toast.error("Video link is required")

        try {
            const formate = {
                duration: Number(duration),
                weeklySyllabus: Number(weeklySyllabus),
                isLock: isLock == 'lock' ? true : false || "lock", 
                video,
                name
            } 
            const updateObj = {
                totalDuration: Number(duration) + course.modules?.reduce((acc, cur) => acc + cur?.duration , 0 ),
                modules : [
                    ...course.modules ,
                    formate
                ]
            }

            const res = await axios.patch(`/course/${course?._id}?userId=${user?._id}`, updateObj);
            setModules(res.data?.course?.modules);
            form.reset();
            document.getElementById('my_modal_4').close()
        } catch (error) {
            toast.error(error.message)
        }

    }

    const handleSubmitSyllabus = async e => {
        e.preventDefault();

        const form = e.target;
        const week = form.week.value;
        const topic = form.topic.value;
        const content = form.content.value;

        if( !week ) return toast.error("Week is required")
        if( !topic ) return toast.error("Topic is required")
        // if( !content ) return toast.error("Content is required")
        const obj = {
            week,
            topic,               
            content
        }
        const weekObj = [
            ...course.syllabus,
            obj
        ]

        try {
            const res = await axios.patch(`/course/${course?._id}?userId=${user?._id}`, {syllabus:weekObj});
            if(res.data.success){
                setAllSyllabus(res.data?.course?.syllabus)
                form.reset();
            }
            document.getElementById('my_modal_5').close()
           
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        setAllSyllabus(course?.syllabus)
        setModules(course?.modules)
    },[course])


    useEffect(() => {
        const courseModules = allSyllabus?.map(item => {
            return { 
                modules : modules?.filter(mod => {
                    if(mod?.weeklySyllabus == item?.week){
                        return mod;
                    }
                }),
                topic: item?.topic,
                content: item?.content,
                week: item?.week,
            }
        })
        setCourseModules(courseModules);
       
    },[allSyllabus, modules])



    useEffect(() => {
        const currentCourse = async () => {
            const res = await axiosPublic(`/course/${id}`)
            setCourse(res.data?.course);
        }
        currentCourse();
    },[allSyllabus, modules,id])


    return (
        <>
            <div>
                <div className='py-8  rounded-md  mb-10'>
                    <p className='text-3xl font-bold '>{course?.name}</p>
                    <div className="flex  gap-3 items-center mt-2">
                        <p className='text-base font-medium'>Price: <span className='text-gray-700 font-normal'>{course?.price || 0}</span> </p>
                        <p className='text-base font-medium'>Duration: <span className='text-gray-700 font-normal'> 54 minutes</span> </p>
                    </div>
                    <div className="mt-3">
                        <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary btn-outline btn-sm ">Add Syllabus</button>
                    </div>
                </div>


                {/* Module */}
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-6/12 max-w-5xl">
                        <div className="font-bold text-lg flex items-center justify-between">
                            Module information
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn btn-sm">Close</button>
                            </form>
                        </div>
                        <form onSubmit={handleSubmitModule} className="py-4">
                            <div className="space-y-5">
                                <div className="grid lg:grid-cols-2 gap-5">
                                    <select 
                                    name="weeklySyllabus" id="" 
                                    className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '
                                    // onChange={(e) => setFormModuel({...formModule, modules:{ ...formModule.modules, weeklySyllabus:e.target.value }})} 
                                    >
                                        <option value="">Select week</option>
                                        {
                                            allSyllabus?.map(item =>  <option key={item?._id} value={item?.week}>{item?.week} Week</option> )
                                        }
                                    </select>
                                    <select 
                                    name="isLock" id="" 
                                    className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '
                                    // onChange={(e) => setFormModuel({...formModule, modules:{ ...formModule.modules, isLock:e.target.value }})} 
                                    >
                                        <option value="lock">Lock</option>
                                        <option value="unlock">Unlock</option>
                                    </select>
                                </div>
                                <Input 
                                type={'text'} 
                                placeholder={"Name"} 
                                name="name"
                                // value={formModule.modules.name} 
                                // onChange={(e) => setFormModuel({...formModule, modules:{ ...formModule.modules, name:e.target.value }})} 
                                />
                               
                               
                                <Input
                                 type={'number'} 
                                 placeholder={"Duration"} 
                                 name="duration"
                                //  value={formModule.modules.duration} 
                                //  onChange={(e) => setFormModuel({...formModule, modules:{ ...formModule.modules, duration:e.target.value }})} 
                                 />
                                <Input
                                 type={'text'} 
                                 placeholder={"Video link"} 
                                 name={'video'}
                                //  value={formModule.modules.video} 
                                //  onChange={(e) => setFormModuel({...formModule, modules:{ ...formModule.modules, video:e.target.value }})} 
                                 />
                                <div>
                                    <ButtonPrimary type={'submit'} options={'w-full'}>
                                        Save module
                                    </ButtonPrimary>
                                </div>
                            </div>  
                        </form>
                    </div>
                </dialog>

                {/* Syllabus */}
                <dialog id="my_modal_5" className="modal">
                    <div className="modal-box w-6/12 max-w-5xl">
                        <div className="font-bold text-lg flex items-center justify-between">
                            Syllabus information
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn btn-sm">Close</button>
                            </form>
                        </div>
                        <form onSubmit={handleSubmitSyllabus} className="py-4">
                            <div className="space-y-5">
                               <div>
                               <label htmlFor="" className="text-sm text-gray-600">Week number</label>
                                <Input 
                                    type={'number'} 
                                    name="week"
                                    placeholder={"Week"} 
                                  
                                    />
                               </div>
                               
                               <div>
                               <label htmlFor="" className="text-sm text-gray-600">Module topic</label>
                                 <Input
                                 type={'text'} 
                                 placeholder={"Topic"} 
                                 name="topic"
                                 />
                               </div>
                               
                               
                                <div>
                                <label htmlFor="" className="text-sm text-gray-600">Module summery</label>
                                    <Input
                                    type={'text'} 
                                    placeholder={"Content"} 
                                    name="content"
                                  
                                    />
                                </div>
                               
                               
                                <div>
                                    <ButtonPrimary type={'submit'} options={'w-full'}>
                                        Save Syllabus
                                    </ButtonPrimary>
                                </div>
                            </div>  
                        </form>
                    </div>
                </dialog>

                <div className="bg-white rounded-md p-8">
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-800 font-medium flex gap-2 items-center">
                            Module
                            <div className="">
                                <button onClick={()=>document.getElementById('my_modal_4').showModal()} className="btn btn-primary btn-sm ">New Module</button>
                            </div>
                        </span>
                        <span className="text-gray-800 font-medium">Duration</span>
                    </div>
                    <hr />
                    {
                        courseModules?.map((item,index) =>  <ul key={index} className="border-x">
                        <li className="bg-gray-200 px-4 py-2  flex justify-between  items-center">
                            <div>
                                <p className="text-lg font-medium">{item?.topic}</p>
                                <p className="text-base font-normal">{item?.content}</p>
                            </div>
                            <div>
                                <p className="text-lg font-medium">{item?.week} Week</p>
                            </div>
                        </li>
                        {
                            item?.modules?.map(item =>   <li key={item?._id} className="py-3 px-4 border-b border-gray-200 w-full flex justify-between">
                            <span className="flex items-center gap-3">
                                <FaRegCirclePlay />
                                <span>{item?.name}</span>
                            </span>
                            <div className="flex gap-2 items-center">
                                <span className="text-gray-500 text-sm">Duration: {item?.duration}m</span>
                                <span className="text-gray-600">
                                    {item?.isLock ? <FaLock /> : <FaUnlock />  }
                                </span>
                            </div>
                        </li> )
                        }
                        
                        </ul> )
                    }
                   
                </div>
            </div>
        </>
    );
};

export default ModuleAdd;