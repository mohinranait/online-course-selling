/* eslint-disable react/prop-types */


const SectionTitle = ({title, subtitle}) => {
    return (
        <>
            <div>
                <p className='text-3xl font-semibold text-center'>{title}</p>
                <p className='text-center text-lg font-medium'>{subtitle}</p>
            </div>   
        </>
    );
};

export default SectionTitle;