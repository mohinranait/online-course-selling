import { useLoaderData } from "react-router-dom";
import UpdateCourseForm from "../../components/form/UpdateCourseForm";


const UpdateCourse = () => {
    const {course} = useLoaderData();

    return (
        <div>
            <UpdateCourseForm getCourse={course} />
        </div>
    );
};

export default UpdateCourse;