/* eslint-disable react/prop-types */


const Input = ({type,name, onChange, value, placeholder, readonlyVal}) => {
    return (
        <>
            <input type={type} name={name} onChange={onChange} readOnly={readonlyVal }  placeholder={placeholder} defaultValue={value} className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all ' />
        </>
    );
};

export default Input;