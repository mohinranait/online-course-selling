/* eslint-disable react/prop-types */
import  { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  getAuthUser } from '../redux/features/user/authSlice';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
   

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getAuthUser())
    },[dispatch])
    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider;