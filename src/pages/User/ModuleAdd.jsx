
import { FaRegCirclePlay } from "react-icons/fa6";
import Input from "../../components/Input/Input";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import { useLoaderData } from "react-router-dom";
import { FaUnlock } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {useEffect, useState} from "react"
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import { useSelector } from "react-redux";

const ModuleAdd = () => {
    const {course} = useLoaderData();
    const [courseModules, setCourseModules] = useState([]);
    const {user} = useSelector(state => state.user)
    const axios = useAxios();
    const [allSyllabus, setAllSyllabus]= useState([]);
    const [modules, setModules] = useState([])
    const [syllabus, setSyllabus] = useState({
        week: null,
        topic: '',
        content: '',
    })
    const [formModule, setFormModuel] = useState({
        modules: {
            duration: '',
            name: '',
            isLock: "lock",
            video: '',
            weeklySyllabus:'',
        }
    })


    const handleSubmitModule = async e => {
        e.preventDefault();

        const {modules} = formModule;
        console.log(formModule);

        if( !modules.name ) return toast.error("Name is required")
        if( !modules.duration ) return toast.error("Duration is required")

        try {
            const formate = {
                ...modules , 
                duration: Number(modules.duration),
                weeklySyllabus: Number(modules.weeklySyllabus),
                isLock: modules.isLock == 'lock' ? true : false, 
            } 
            const updateObj = {
                totalDuration: Number(modules.duration) + course.modules?.reduce((acc, cur) => acc + cur?.duration , 0 ),
                modules : [
                    ...course.modules ,
                    formate
                ]
            }
            // console.log(updateObj);
            const res = await axios.patch(`/course/${course?._id}?userId=${user?._id}`, updateObj);
            setModules(res.data?.course?.modules);
            document.getElementById('my_modal_4').close()
        } catch (error) {
            toast.error(error.message)
        }

    }

    const handleSubmitSyllabus = async e => {
        e.preventDefault();

        const {week, topic, content} = syllabus;
        if( !week ) return toast.error("Week is required")
        if( !topic ) return toast.error("Topic is required")
        if( !content ) return toast.error("Content is required")

        const weekObj = [
            ...course.syllabus,
            syllabus
        ]

        try {
           
            const res = await axios.patch(`/course/${course?._id}?userId=${user?._id}`, {syllabus:weekObj});
            // setModules(res.data?.course?.modules);
            console.log(res.data?.course?.syllabus);
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
        setFormModuel({
            modules: {
                duration: '',
                name: '',
                isLock: "lock",
                video: '',
                weeklySyllabus:'',
            }
        })
    },[modules])
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
                                    name="" id="" 
                                    className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '
                                    onChange={(e) => setFormModuel({...formModule, modules:{ ...formModule.modules, weeklySyllabus:e.target.value }})} 
                                    >
                                        <option value="">Select week</option>
                                        {
                                            allSyllabus?.map(item =>  <option key={item?._id} value={item?.week}>{item?.week} Week</option> )
                                        }
                                    </select>
                                    <select 
                                    name="" id="" 
                                    className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '
                                    onChange={(e) => setFormModuel({...formModule, modules:{ ...formModule.modules, isLock:e.target.value }})} 
                                    >
                                        <option value="lock">Lock</option>
                                        <option value="unlock">Unlock</option>
                                    </select>
                                </div>
                                <Input 
                                type={'text'} 
                                placeholder={"Name"} 
                                value={formModule.modules.name} 
                                onChange={(e) => setFormModuel({...formModule, modules:{ ...formModule.modules, name:e.target.value }})} 
                                />
                               
                               
                                <Input
                                 type={'number'} 
                                 placeholder={"Duration"} 
                                 value={formModule.modules.duration} 
                                 onChange={(e) => setFormModuel({...formModule, modules:{ ...formModule.modules, duration:e.target.value }})} 
                                 />
                                <Input
                                 type={'text'} 
                                 placeholder={"Video link"} 
                                 value={formModule.modules.video} 
                                 onChange={(e) => setFormModuel({...formModule, modules:{ ...formModule.modules, video:e.target.value }})} 
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
                                <Input 
                                type={'number'} 
                                placeholder={"Week"} 
                                value={syllabus.week} 
                                onChange={(e) => setSyllabus({...syllabus, week: e.target.value })} 
                                />
                               
                                <Input
                                 type={'text'} 
                                 placeholder={"Topic"} 
                                 value={syllabus?.topic} 
                                 onChange={(e) => setSyllabus({...syllabus, topic: e.target.value })} 
                                 />
                               
                                <Input
                                 type={'text'} 
                                 placeholder={"Content"} 
                                 value={syllabus?.content} 
                                 onChange={(e) => setSyllabus({...syllabus, content: e.target.value })} 
                                 />
                               
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