import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../Component/hooks/useFirebase';

const RequerAuth = ({children}) => {
    const {user} =useFirebase()
    const location = useLocation()
    if(!user){
        return <Navigate to='/register' state={{from:location}} replace></Navigate>
    }
    return children
};

export default RequerAuth;