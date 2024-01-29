
import AddCourse from "../../components/form/AddCourse";
import { useEffect, useState } from "react";
import CourseRows from "../../components/rows/CourseRows";
import useAxios from "../../hooks/useAxios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const CourseLists = () => {
    const axios = useAxios()
    const {user} = useSelector(state => state.user)
    const [course, setCourse] = useState([])
    const handleCloseModal = () => {
        document.getElementById('my_modal_4').close()
    }

    useEffect(() => {
        const getCourse = async () => {
            const res = await axios.get(`/courses?author=${user?._id}`)
            console.log(res.data.courses);
            if(res.data.success){
                setCourse(res.data.courses)
            }
        };
        getCourse();
    },[])

    return (
        <div>
            <button onClick={()=>document.getElementById('my_modal_4').showModal()} className="px-4 py-2 bg-primary text-white rounded ">New course</button>
            <Link to="/user/new-course" className="px-4 py-2 bg-primary text-white rounded inline-block ml-3 ">course</Link>
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
                        {
                            course?.map((course,index) => <CourseRows key={index} index={index} course={course} /> )
                        }
                    
                      
                   
                    </tbody>
                </table>
            </div>



            <dialog id="my_modal_4" className="modal">
                <div className="modal-box lg:w-9/12 max-w-5xl">
                    <div className="font-bold text-lg flex justify-between items-center">
                        Course information 
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn btn-sm">Close</button>
                        </form>
                    </div>
                    <AddCourse setAllCourse={setCourse} allCourse={course} handleCloseModal={handleCloseModal} />

                </div>
            </dialog>
        </div>
    );
};

export default CourseLists;