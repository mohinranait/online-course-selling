
import { FaRegCirclePlay } from "react-icons/fa6";
import Input from "../../components/Input/Input";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";


const ModuleAdd = () => {
    const handleCloseModal = () => {
        document.getElementById('my_modal_4').closeModal()
    }
    return (
        <>
            <div>
                <div className='py-8  rounded-md  mb-10'>
                    <p className='text-3xl font-bold '>Web design with MERN stack</p>
                    <p className='text-base font-medium'>Duration: <span className='text-gray-700 font-normal'> 54 minutes</span> </p>
                    <div className="mt-3">
                        <button onClick={()=>document.getElementById('my_modal_4').showModal()} className="btn btn-primary btn-sm ">New Module</button>
                    </div>
                </div>


                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-6/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Module information</h3>
                        <form className="py-4">
                            <div className="space-y-5">
                                <Input type={'text'} placeholder={"Name"} />
                                <Input type={'number'} placeholder={"Duration"} />
                                <select name="" id="" className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '>
                                    <option value="lock">Lock</option>
                                    <option value="unlock">Unlock</option>
                                </select>
                                <textarea name="" id="" cols="30" rows="3" className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all ' placeholder="Note..."> </textarea>
                                <div>
                                    <ButtonPrimary type={'button'} options={'w-full'}>
                                        Save module
                                    </ButtonPrimary>
                                </div>
                            </div>  
                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                        <button onClick={() => handleCloseModal()} className="btn">Close</button>

                    </div>
                </dialog>

                <div className="bg-white rounded-md p-8">
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-800 font-medium">Module</span>
                        <span className="text-gray-800 font-medium">Duration</span>
                    </div>
                    <hr />
                    <ul className="divider-y divide-orange-600">
                    
                        <li className="py-3 w-full flex justify-between">
                            <span className="flex items-center gap-3">
                                <FaRegCirclePlay />
                                <span>What is category copy</span>
                            </span>
                            <span className="text-gray-500 text-sm">Duration: 20m</span>
                        </li>
                    
                    
                        <li className="py-3 w-full flex justify-between">
                            <span className="flex items-center gap-3">
                                <FaRegCirclePlay />
                                <span>What is category copy</span>
                            </span>
                            <span className="text-gray-500 text-sm">Duration: 20m</span>
                        </li>
                    
                    
                        <li className="py-3 w-full flex justify-between">
                            <span className="flex items-center gap-3">
                                <FaRegCirclePlay />
                                <span>What is category copy</span>
                            </span>
                            <span className="text-gray-500 text-sm">Duration: 20m</span>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ModuleAdd;