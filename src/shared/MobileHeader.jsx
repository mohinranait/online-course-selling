/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { logoutUser } from "../redux/features/user/authSlice";
import Logo from "../components/logo/Logo";


const MobileHeader = ({isToggle, setIsToggle}) => {
    const {user} = useSelector(state => state.user)
    const dispatch= useDispatch();
    return (
        <div className={`fixed w-[70vw] md:hidden h-screen z-50 bg-white top-0 left-0 transition-all ${isToggle ? 'translate-x-0':'-translate-x-full'} `}>
            <ul className=''>
                <li className='flex justify-between px-4 items-center py-3 border-b border-gray-300'>
                    <Logo />
                    <span onClick={() => setIsToggle(!isToggle)} className='text-gray-600 w-10 h-10 rounded-full flex items-center cursor-pointer justify-center bg-gray-50 hover:bg-gray-100'>
                        <IoClose size={20} />
                    </span>
                </li>
                <li><Link to="/" className='py-2 w-full text-gray-600 hover:bg-gray-100  inline-block px-3'>Home</Link></li>
               
               {
                user?._id ? <>
                    {
                        user?.role == 'user' ? <>
                          <li><Link to={'/user/dashboard'} className='py-2 w-full text-gray-600  hover:bg-gray-100 inline-block px-3'>Dashboard</Link></li>
                          <li><Link to={'/user/account'} className='py-2 w-full text-gray-600  hover:bg-gray-100 inline-block px-3'>Account</Link></li>
                          <li><Link to={'/user/your-course'} className='py-2 w-full text-gray-600  hover:bg-gray-100 inline-block px-3'>Selling course</Link></li>
                          <li><Link to={'/user/new-course'} className='py-2 w-full text-gray-600  hover:bg-gray-100 inline-block px-3'>New Course</Link></li>
                          </> : <></>
                    }
                     <li><button onClick={() => dispatch(logoutUser()) } className='py-2 text-left w-full text-gray-600  hover:bg-gray-100 inline-block px-3'>Logout</button></li>
                </> : <>
                <li><Link to={'/login'} className='py-2 w-full text-gray-600  hover:bg-gray-100 inline-block px-3'>Login</Link></li>
                <li><Link to={'/register'} className='py-2 w-full text-gray-600  hover:bg-gray-100 inline-block px-3'>Register</Link></li>
                </>
               }
            </ul>
        </div>
    );
};

export default MobileHeader;