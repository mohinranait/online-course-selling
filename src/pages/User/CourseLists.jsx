import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import Input from "../../components/Input/Input";


const CourseLists = () => {

    const handleCloseModal = () => {
        document.getElementById('my_modal_4').close()
    }

    return (
        <div>
            <button onClick={()=>document.getElementById('my_modal_4').showModal()} className="px-4 py-2 bg-primary text-white rounded ">New course</button>
            <div className="overflow-x-auto mt-8">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>SI</th>
                        <th>Course</th>
                        <th>Add module</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://demo-themewinter.com/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td> <Link to={'/user/module-manage'} className="btn btn-sm btn-primary btn-outline">Manage Module</Link></td>
                            <td>Active</td>
                            <td className="flex gap-2">
                                <button className="btn btn-neutral btn-sm">Edit</button>
                                <button className="btn btn-secondary btn-sm">Delete</button>
                            </td>
                        </tr>
                      
                   
                    </tbody>
                </table>
            </div>



            <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-6/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Course information</h3>
                        <form className="py-4">
                            <div className="space-y-5">
                                <Input type={'text'} placeholder={"Name"} />
                                <Input type={'number'} placeholder={"Duration"} />
                                <select name="" id="" className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '>
                                    <option value="active">Active Status</option>
                                    <option value="Active">Active</option>
                                    <option value="inActive">In-Active</option>
                                </select>
                                <textarea name="" id="" cols="30" rows="3" className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all ' placeholder="Note..."> </textarea>
                                <div>
                                    <ButtonPrimary type={'button'} options={'w-full'}>
                                        Save course
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
        </div>
    );
};

export default CourseLists;