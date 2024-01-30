import { useState } from "react";
import Input from "../Input/Input";
import ButtonPrimary from "../buttons/ButtonPrimary";
import {useDispatch, useSelector} from "react-redux"
import { toast } from "react-toastify";
import { singleImage } from "../../services/uploadImage";
import useAxios from "../../hooks/useAxios";
import { addUser } from "../../redux/features/user/authSlice";

const UserAccountForm = () => {
    const {user} = useSelector( state => state.user)
    const dispatch = useDispatch()
    const [file, setFile] = useState("")
    const axios = useAxios();
    const [formValue, setFormValue] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        bio: user?.bio || '',
    })

    const handleFileChange = e => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const {name,phone} = formValue;

        if( !name ) return toast.error("Name is required")
        if( !phone ) return toast.error("Phone is required")

        let avater = user?.avater || ''
        if(file){
            avater = await singleImage(file)
        }

        const userObj = {
            ...formValue,
            avater,
        }
        try {
            const res = await  axios.patch(`/update-user/${user?._id}`, userObj);
            if(res.data.success){
                dispatch(addUser(res.data?.user))
                // setUser();
                toast.success("Profile updated")
                // setLoading(false)
            }
        } catch (error) {
            toast.error(error.message)
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid lg:grid-cols-2 gap-5">
                    <Input 
                    type={'text'} 
                    placeholder={"Name"} 
                    value={formValue.name} 
                    onChange={(e) => setFormValue({...formValue, name:e.target.value})} 
                    />
                    <Input 
                    type={'number'} 
                    placeholder={"Phone"} 
                    value={formValue.phone} 
                    onChange={(e) => setFormValue({...formValue, phone:e.target.value})} 
                    />
                </div>
                <div>
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
                </div>
                <div className="">
                    <textarea 
                    name="" id="" cols="30" 
                    rows="3" 
                    className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '
                    value={formValue.bio} 
                    onChange={(e) => setFormValue({...formValue, bio:e.target.value})} 
                    ></textarea>
                </div>
                <div>
                    <ButtonPrimary type={'submit'} >
                        Update information
                    </ButtonPrimary>
                </div>
            </form>
        </>
    );
};

export default UserAccountForm;