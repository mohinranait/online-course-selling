import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAxios from "../../hooks/useAxios";
import {Link} from "react-router-dom"

const UserDashboard = () => {

    const {user} = useSelector(state => state.user)
    const axios = useAxios();
    const [myOrders, setMyOrders] = useState([]);
    const [ownCourse, setOwnCourse] = useState(0)


    useEffect(() => {
        const getCourse = async () => {
            const res = await axios.get(`/courses?author=${user?._id}`)
            // console.log(res.data.courses);
            if(res.data.success){
                setOwnCourse(res.data?.courses?.length)
            }
        };
        getCourse();
    },[])
    

    useEffect(() => {
        const getOrders = async () => {
            const res = await axios.get(`/orders?userId=${user?._id}&request=customer`);
            setMyOrders(res.data?.orders);
        };
        getOrders();
    },[])


    return (
        <div>
            <div className="md:grid grid-cols-3 gap-5">
                <div className="bg-white p-5 rounded-md border ">
                    <p className="text-3xl font-bold text-gray-800 text-center">{myOrders?.length}</p>
                    <p className="text-gray-500 text-sm text-center">Enrolled</p>
                </div>
                <div className="bg-white p-5 rounded-md border ">
                    <p className="text-3xl font-bold text-gray-800 text-center">{ownCourse}</p>
                    <p className="text-gray-500 text-sm text-center">Your course</p>
                </div>
                
                <div className="bg-white p-5 rounded-md border ">
                    <p className="text-3xl font-bold text-gray-800 text-center">0</p>
                    <p className="text-gray-500 text-sm text-center">Running</p>
                </div>
            </div>

    
            <p className="mb-2 mt-8 text-xl  font-bold text-gray-700">Enroll course</p>
            <div className=" bg-white">
                
                <div className="overflow-x-auto">
                    <table className="table  table-zebra">
                        {/* head */}
                        <thead>
                        <tr>
                           
                            <th>Course</th>
                            <th>Progress</th>
                            <th>Order Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            myOrders?.map(order =>  <tr key={order?._id} className="group">
                                <td>
                                    <div className="flex  items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask- w-20 rounded h-20">
                                                <Link to={`/course-purchase/${order?._id}`}>
                                                    <img className="rounded" src={ order?.course?.image ? order?.course?.image :   "https://demo-themewinter.com/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png"} alt="Avatar Tailwind CSS Component" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                <Link to={`/course-purchase/${order?._id}`} className="text-xl group-hover:text-primary">{order?.course?.name}</Link>
                                            </div>
                                            <div className="text-sm opacity-50">
                                                <Link to={`/course-purchase/${order?._id}`} className=" group-hover:text-primary">{order?.course?.category}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="radial-progress text-primary" style={{"--value":70}} role="progressbar">70%</div>
                                    {/* <progress className="progress progress-success w-56" value={30} max="100"></progress> */}
                                </td>
                                <th>
                                    <button className="btn btn-success text-green-500 hover:bg-green-500 hover:bg-opacity-10 btn-sm bg-opacity-10 ">details</button>
                                </th>
                            </tr> )
                        }
                       
            
                    
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;