import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/features/user/authSlice";



const Header = () => {
    const {user} = useSelector(state => state.user);
    const dispatch = useDispatch()
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
                            <li><Link to={'/courses'} className="text-sm font-medium px-3 py-2">Course</Link></li>
                            {
                                !user?._id && <>
                                 <li><Link to={'/login'} className="text-sm font-medium px-3 py-2">Login</Link></li>
                            <li><Link to={'/register'} className="text-sm font-medium px-3 py-2">Register</Link></li>
                            </>
                            }
                           
                        </ul>
                        <button className="relative">
                            <BsCart2 size={25} />
                            <span className="w-[18px] h-[18px] flex items-center -right-2 justify-center rounded-full bg-primary text-white text-[10px] font-medium absolute -top-2">2</span>
                        </button>
                        {
                            user?._id &&  <div className="flex items-center gap-1">
                            <details className="dropdown">
                                <summary className="m-1 flex items-center      gap-1">
                                <span className="text-sm font-medium">{user?.name}</span>
                                <FaRegUserCircle size={25} />
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-52 right-0">
                                    <li><Link to={'/user/dashboard'} className="rounded">Dashboard</Link></li>
                                    <li><button onClick={() => dispatch(logoutUser()) } className="rounded">Logout</button></li>
                                </ul>
                            </details>
                        </div>
                        }
                       
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;