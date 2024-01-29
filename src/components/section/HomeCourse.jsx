import { useEffect, useState } from "react";
import CourseCard from "../card/CourseCard";
import SectionTitle from "../sectionTitle/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const HomeCourse = () => {
    const axiosPublic = useAxiosPublic()
    const [courses, setCourse]= useState([])
    useEffect(() => {
        const getCourses = async () => {
            const res = await axiosPublic.get(`/courses`);
            setCourse(res.data?.courses);
        }
        getCourses()
    },[])
    return (
        <section>
            <div className="box">
                <div className='mb-10 mt-20'>
                   <SectionTitle title={'Popular course'} subtitle={'Popular topic to learn'} />
                </div>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    {
                        courses?.map(course =>     <CourseCard key={course?._id} course={course} /> )
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeCourse;