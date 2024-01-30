import { FaPersonCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";


const CategoryCart = ({category}) => {
    const {_id, name,icon ,color} = category || {}
    const objStyle = {
        background: color,
        backgroundOpacity:10,
    }
    return (
        <Link to={'/'} className=" rounded shadow group p-1 py-3 lg:p-5 bg-opacity-10 " style={objStyle}>
            <div className="flex flex-col items-center gap-2 md:gap-4">
                    <img src={icon} className="w-16 h-16 mx-auto" alt="" />
                <p className="text-white  text-sm md:text-base lg:text-lg font-semibold text-center  transition-all">{name}</p>
                <p className="text-white  text-[10px] md:text-sm">Course 12</p>
            </div>
        </Link>
    );
};

export default CategoryCart;