
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const location = useLocation();
    const {isLoading, user} = useSelector(state => state.user);

    if(isLoading){
        return <>
        <div className='text-center text-3xl font-bold mt-8'>
            Loading...
        </div></>
    }

    if(user?._id){
        return children
    }

    return <Navigate to={'/login'} state={location?.pathname} />
};

export default PrivateRoute;