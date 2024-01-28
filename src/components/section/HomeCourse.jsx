import CourseCard from "../card/CourseCard";
import SectionTitle from "../sectionTitle/SectionTitle";


const HomeCourse = () => {
    return (
        <section>
            <div className="box">
                <div className='mb-10 mt-20'>
                   <SectionTitle title={'Popular course'} subtitle={'Popular topic to learn'} />
                </div>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                   <CourseCard />
                   <CourseCard />
                   <CourseCard />
                   <CourseCard />
                </div>
            </div>
        </section>
    );
};

export default HomeCourse;