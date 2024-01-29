/* eslint-disable react/prop-types */

import { useState } from 'react';
import Input from '../Input/Input';
import ButtonPrimary from '../buttons/ButtonPrimary';
import Select from 'react-select';
import { toast } from 'react-toastify';
import useAxios from '../../hooks/useAxios';
import { singleImage } from '../../services/uploadImage';
import { useSelector } from 'react-redux';
import data from '../../services/data';
import { useNavigate } from 'react-router-dom';

const days = [
    {_id: 1, value:"Saturday", label:"Saturday"},
    {_id: 2, value:"Sunday", label:"Sunday"},
    {_id: 3, value:"Monday", label:"Monday"},
    {_id: 4, value:"Tuesday", label:"Tuesday"},
    {_id: 5, value:"Wednesday", label:"Wednesday"},
    {_id: 6, value:"Thursday", label:"Thursday"},
    {_id: 7, value:"Friday", label:"Friday"},
]

const times = [
    {_id: 1, value:"12 AM", label:"12 AM"},
    {_id: 2, value:"01 AM", label:"01 AM"},
    {_id: 3, value:"02 AM", label:"02 AM"},
    {_id: 4, value:"03 AM", label:"03 AM"},
    {_id: 5, value:"04 AM", label:"04 AM"},
    {_id: 6, value:"05 AM", label:"05 AM"},
    {_id: 7, value:"06 AM", label:"06 AM"},
    {_id: 8, value:"07 AM", label:"07 AM"},
    {_id: 9, value:"08 AM", label:"08 AM"},
    {_id: 10, value:"09 AM", label:"09 AM"},
    {_id: 11, value:"10 AM", label:"10 AM"},
    {_id: 12, value:"11 AM", label:"11 AM"},
    {_id: 13, value:"12 PM", label:"12 PM"},
    {_id: 14, value:"01 PM", label:"01 PM"},
    {_id: 15, value:"02 PM", label:"02 PM"},
    {_id: 16, value:"03 PM", label:"03 PM"},
    {_id: 17, value:"04 PM", label:"04 PM"},
    {_id: 18, value:"05 PM", label:"05 PM"},
    {_id: 19, value:"06 PM", label:"06 PM"},
    {_id: 20, value:"07 PM", label:"07 PM"},
    {_id: 21, value:"08 PM", label:"08 PM"},
    {_id: 22, value:"09 PM", label:"09 PM"},
    {_id: 23, value:"10 PM", label:"10 PM"},
    {_id: 24, value:"11 PM", label:"11 PM"},
]

const AddCourse = ({setAllCourse,allCourse,handleCloseModal}) => {
    const navigate = useNavigate();
    const [file, setFile] = useState("")
    const axios = useAxios();
    const {user} = useSelector(state => state.user)
    const [sedule, setSedule] = useState({
        days: [],
        firstTime:'',
        secondTime:'',
    })

    

    const [course, setCourse] = useState({
        name: "",
        status: 'Active',
        descripton: "",
        category: data?.categorys[0],
        author : user?._id,
        price : null,
        location: 'Online',
        certificate: 'Yes',
        prerequisites: []
    })


    const handleCourse = async (e) => {
        e.preventDefault();

        if(!user?.bio) {
            navigate('/user/account')
            return 
        }
        const {name,descripton,price} = course;
        const {firstTime, secondTime, days} = sedule;
        if(days?.length == 0) return toast.error("Select days")
        if(!firstTime) return toast.error("Start time")
        if(!secondTime) return toast.error("End time")
        
        if( !name ) return toast.error("Name is required")
        if( !price ) return toast.error("Price is required")
        if( !descripton ) return toast.error("descripton is required")


        // Date and time formate
        let formate = sedule.days?.map(item => item?.value).join(', ');
        let formateShedule = formate + " | " + sedule.firstTime + " - "+ sedule.secondTime 

        let image = '';
        if(file){
            image = await singleImage(file)
        }

        try {
            const courseObj = {
                ...course,
                schedule:formateShedule,
                image,
                price: Number(course?.price),
                certificate: course?.certificate == "Yes" ? true : false
            }
            const res = await  axios.post(`/course?userId=${user?._id}`, courseObj);
            if(res.data.success){
                // setAllCourse([...allCourse, res.data.course ])
                navigate('/user/your-course')
                setCourse({
                    ...course,
                    name: "",
                    status: 'Active',
                    descripton: "",
                    category: "",
                    author : user?._id,
                    price : null,
                })
                
                toast.success("Created")
                // handleCloseModal()
                
                // setLoading(false)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleFileChange = e => {
        setFile(e.target.files[0]);
    }
    return (
        <>
            <form onSubmit={handleCourse} className="py-4">
                <div className="space-y-5">
                   <div className='lg:grid grid-cols-2 gap-5'>
                        <div>
                            <label htmlFor="" className='text-gray-600 text-sm'>Course name</label>
                            <Input 
                                type={'text'} 
                                placeholder={"Name"} 
                                value={course.name} 
                                onChange={(e) => setCourse({...course, name:e.target.value})} 
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='text-gray-600 text-sm'>Price</label>
                            <Input 
                                type={'number'} 
                                placeholder={"Price"} 
                                value={course.price} 
                                onChange={(e) => setCourse({...course, price:e.target.value})} 
                            />
                        </div>
                   </div>
                    <div className='lg:grid grid-cols-4 gap-5'>
                        <div>
                            <label htmlFor="" className='text-gray-600 text-sm'>Status</label>
                            <select 
                            name="" id="" 
                            className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '
                            onChange={(e) => setCourse({...course, status:e.target.value})} 
                            >
                                <option value="Active">Active Status</option>
                                <option value="Active">Active</option>
                                <option value="inActive">In-Active</option>
                            </select>
                        </div>
                        <div>
                        <label htmlFor="" className='text-gray-600 text-sm'>Category Select</label>
                            <select 
                            name="" id="" 
                            className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '
                            onChange={(e) => setCourse({...course, category:e.target.value})} 
                            >
                                <option value="">All categorys</option>
                                {
                                    data.categorys?.map(item =>  <option key={item?._id}  value={item?.name}>{item?.name}</option> )
                                }
                            
                            </select>
                        </div>
                        <div>
                        <label htmlFor="" className='text-gray-600 text-sm'>Location</label>
                            <select 
                            name="" id="" 
                            className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '
                            onChange={(e) => setCourse({...course, location:e.target.value})} 
                            >
                                <option value="">Course lcoation</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            
                            </select>
                        </div>
                       <div>
                       <label htmlFor="" className='text-gray-600 text-sm'>Certificate</label>
                        <select 
                            name="" id="" 
                            className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '
                            onChange={(e) => setCourse({...course, certificate:e.target.value})} 
                            >
                                <option value="">Certificate</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            
                            </select>
                       </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <div>
                        <label htmlFor="" className='text-gray-600 text-sm'>Dates</label>
                            <Select
                                // defaultValue={}
                                isMulti
                                options={days}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                // onChange={(e) => {
                                //     console.log([...e,           e]);
                                // }}
                                onChange={(e) => setSedule( {...sedule, days:e} )}
                            />
                        </div>
                        <div className='grid grid-cols-2 gap-1'>
                            <div>
                            <label htmlFor="" className='text-gray-600 text-sm'>Start time</label>
                                <Select
                                    // defaultValue={times[1]}
                                    options={times}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={(e) => setSedule( {...sedule, firstTime:e.value} )}
                                />
                            </div>
                            <div>
                            <label htmlFor="" className='text-gray-600 text-sm'>End time</label>
                                <Select
                                    // defaultValue={times[1]}
                                    options={times}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={(e) => setSedule( {...sedule, secondTime:e.value} )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='file_upload px-5 py-5 relative border-4 bg-white border-dotted border-gray-300 rounded-lg'>
                        <div className='flex flex-col w-max  mx-auto text-center'>
                            <label>
                                <input
                                className='text-sm cursor-pointer w-36 hidden'
                                type='file'
                                name='image'
                                id='image'
                                accept='image/*'
                                hidden
                                multiple
                                onChange={handleFileChange}
                                // onChange={(e) => setUploadImageText(e.target.files[0].name) }
                                />
                                <div className='bg-primary py-2 overflow-x-auto max-w-[250px] overflow-hidden text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-primary'>
                                    <span>{"Upload profile"}</span>
                                </div>
                            </label>
                        </div>
                    </div>
                   <div>
                    <label htmlFor="" className='text-gray-600 text-sm'>Separated by comma (,)</label>
                    <textarea 
                    name="" id="" 
                    cols="30" rows="2" 
                    className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all ' placeholder="Pre Requisites"
                    value={course.prerequisites} 
                    onChange={(e) => setCourse({...course, prerequisites:e.target.value.split(',')})}
                    > </textarea>
                   </div>
                    <textarea 
                    name="" id="" 
                    cols="30" rows="3" 
                    className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all ' placeholder="Note..."
                    value={course.descripton} 
                    onChange={(e) => setCourse({...course, descripton:e.target.value})}
                    > </textarea>
                    <div>
                        <ButtonPrimary type={'submit'} options={'w-full'}>
                            Save course
                        </ButtonPrimary>
                    </div>
                </div>  
            </form>   
        </>
    );
};

export default AddCourse;