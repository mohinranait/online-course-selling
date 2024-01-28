import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";



const Header = () => {
    return (
        <header className="bg-white">
            <div className="box">

                <div className="flex py-2 h-[80px] justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <Link to={'/'}>
                            <img src="https://demo-themewinter.com/courselog/wp-content/uploads/2020/02/logo.png" className="w-32" alt="" />
                        </Link>
                        <form action="" className="border hidden overflow-hidden px-2 md:flex py-1 rounded-3xl ">
                            <input type="text" className="px-3 py-2 bg-transparent outline-none " placeholder="Search course..." />
                            <button className="bg-primary text-white rounded-3xl px-4 text-sm font-medium">Search</button>
                        </form>
                    </div>
                    <div className="flex gap-5">
                        <ul className="hidden md:flex items-center ">
                            <li><Link to={'/'} className="text-sm font-medium px-3 py-2">Home</Link></li>
                            <li><Link to={'/'} className="text-sm font-medium px-3 py-2">Course</Link></li>
                            <li><Link to={'/'} className="text-sm font-medium px-3 py-2">About</Link></li>
                        </ul>
                        <button className="relative">
                            <BsCart2 size={25} />
                            <span className="w-[18px] h-[18px] flex items-center -right-2 justify-center rounded-full bg-primary text-white text-[10px] font-medium absolute -top-2">2</span>
                        </button>
                        <button className="flex items-center gap-1">
                            <span className="text-sm font-medium">Mohin Rana</span>
                            <FaRegUserCircle size={25} />
                           
                        </button>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;