import { FaPersonCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";


const CategoryCart = ({category}) => {
    const {_id, name, icon} = category || {}
    return (
        <Link to={'/'} className="bg-white rounded shadow group p-5">
            <div className="flex flex-col items-center gap-4">
                {/* <FaPersonCircleCheck className="text-primary" size={45} /> */}
                <p className="text-gray-700  text-xl font-semibold text-center group-hover:text-primary transition-all">{name}</p>
                <p className="text-gray-500 text-sm">Course 12</p>
            </div>
        </Link>
    );
};

export default CategoryCart;