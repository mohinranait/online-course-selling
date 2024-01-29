/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const CourseRows = ({course,index}) => {
    const {name,_id,image,category,status} = course || {}
    return (
        <>
                <tr>
                    <th>{index+1}</th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={ image ? image : "https://demo-themewinter.com/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png"} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{name}</div>
                                <div className="text-sm opacity-50">{category}</div>
                            </div>
                        </div>
                    </td>
                    <td> <Link to={`/user/module-manage/${_id}`} className="btn btn-sm btn-primary btn-outline">Manage Module</Link></td>
                    <td>
                        {
                            status === 'Active' ? <span>Active</span>: <span>In Active</span>
                        }
                    </td>
                    <td className="flex gap-2">
                        <Link to={`/user/update-course/${_id}`} className="btn btn-neutral btn-sm">Edit</Link>
                        <button className="btn btn-secondary btn-sm">Delete</button>
                    </td>
                </tr>   
        </>
    );
};

export default CourseRows;