import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./UserLayout.css"

const UserLayout = () => {
    const {user} = useSelector(state => state.user);

    return (
       <main className="mt-8 mb-10">
            <section className="">
                <div className="box">
                    <div className="lg:grid grid-cols-5 gap-5">
                        <div className="col-span-1         mb-8">
                            <div className="border bg-white rounded-md py-8">
                                <div className="mb-3">
                                    <img className="w-[120px] h-[120px] mx-auto rounded-full ring-4 ring-gray-200" src={ user?.avater ? user?.avater : "https://demo-themewinter.com/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png"} alt="" />
                                    <p className="text-center font-medium mt-2">{user?.name}</p>
                                    <p className="text-center text-sm">{user?.email}</p>
                                </div>
                          
                                <ul className="p-4 activeItem">
                                    <li><NavLink  to={'/user/dashboard'} className="w-full py-2 px-3 rounded-md hover:bg-gray-100 text-gray-800 inline-block">Dashboard</NavLink></li>
                                    <li><NavLink  to={'/user/account'} className="w-full py-2 px-3 rounded-md hover:bg-gray-100 text-gray-800 inline-block">Account</NavLink></li>
                                    <li><NavLink  to={'/user/your-course'} className="w-full py-2 px-3 rounded-md hover:bg-gray-100 text-gray-800 inline-block">Course Sells</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </main>
    );
};

export default UserLayout;