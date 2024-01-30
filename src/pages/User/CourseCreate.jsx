import { Link } from "react-router-dom";
import AddCourse from "../../components/form/AddCourse";


const CourseCreate = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <p className=" text-xl  font-bold text-gray-700">Create a new course for selling</p>
                <Link to="/user/your-course" className="px-4 py-2 bg-primary text-white rounded inline-block ">Your course lists</Link>
            </div>
            <AddCourse />
        </div>
    );
};

export default CourseCreate;