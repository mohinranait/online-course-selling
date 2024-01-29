

const UserDashboard = () => {
    return (
        <div>
            <div className="md:grid grid-cols-3 gap-5">
                <div className="bg-white p-5 rounded-md border ">
                    <p className="text-3xl font-bold text-gray-800 text-center">0</p>
                    <p className="text-gray-500 text-sm text-center">Purchace</p>
                </div>
                <div className="bg-white p-5 rounded-md border ">
                    <p className="text-3xl font-bold text-gray-800 text-center">0</p>
                    <p className="text-gray-500 text-sm text-center">Comleted</p>
                </div>
                
                <div className="bg-white p-5 rounded-md border ">
                    <p className="text-3xl font-bold text-gray-800 text-center">0</p>
                    <p className="text-gray-500 text-sm text-center">Running</p>
                </div>
            </div>

            <div className="mt-10">
                <div className="overflow-x-auto">
                    <table className="table  table-zebra">
                        {/* head */}
                        <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                          
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://demo-themewinter.com/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            Zemlak, Daniel and Leannon
                            <br/>
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    
                        <tr>
                          
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://demo-themewinter.com/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            Zemlak, Daniel and Leannon
                            <br/>
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;