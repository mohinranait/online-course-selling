
import CategoryCart from '../card/CategoryCart';
import SectionTitle from '../sectionTitle/SectionTitle';

const HomeCategory = () => {
    return (
        <section>
            <div className="box">
                <div className='mb-10 mt-20'>
                   <SectionTitle title={'Brows Categorys'} subtitle={'Popular topic to learn'} />
                </div>
                <div className='grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                    <CategoryCart />
                    <CategoryCart />
                    <CategoryCart />
                    <CategoryCart />
                    <CategoryCart />
                    <CategoryCart />
                </div>
            </div>
        </section>
    );
};

export default HomeCategory;