import { IoIosStar } from "react-icons/io";

import { FaRegUser } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { FiClock } from "react-icons/fi";
import {Link} from "react-router-dom"


const CourseCard = ({course}) => {
    const {name,price,image,category,totalDuration,_id,totalStudents} = course || {};
    return (
        <div className="rounded shadow overflow-hidden bg-white">
            <div>
                <Link to={'/'} className="relative">
                    <span className="bg-white  text-gray-800 font-medium rounded text-sm px-3 py-1 absolute top-2 left-2 ">{category}</span> 
                    <img className="w-full" src={ image ? image : "https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_1-380x277.jpg"} alt="" />
                </Link>
            </div>
            <div className="p-3 space-y-3">
                <ul className="flex items-center gap-4">
                    <li className="flex items-center gap-1 text-sm text-gray-600 font-medium"><FaRegUser size={18} /> <span>{totalStudents?.length} Students</span> </li>
                    <li className="flex items-center gap-1 text-sm text-gray-600 font-medium"><GrNotes size={18} /> <span>1 Lession</span> </li>
                    <li className="flex items-center gap-1 text-sm text-gray-600 font-medium"><FiClock size={18} /> <span>{totalDuration} Minutes</span> </li>
                </ul>
                <p><Link to={`/course/${_id}`} className="text-xl font-semibold text-gray-800 hover:text-primary">{name}</Link></p>
                <div className="flex items-center justify-between">
                    <ul className="flex  items-center">
                        <li><IoIosStar className="text-gray-500" /></li>
                        <li><IoIosStar className="text-gray-500" /></li>
                        <li><IoIosStar className="text-gray-500" /></li>
                        <li><IoIosStar className="text-gray-500" /></li>
                        <li><IoIosStar className="text-gray-500" /></li>
                    </ul>
                    <span className="text-xl text-gray-900 font-bold">$ {price}</span>
                </div>
            </div>

        </div>
    );
};

export default CourseCard;