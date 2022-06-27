import React from 'react';
import { Navigate } from 'react-router-dom';

const RoutesPublic = ({children ,redirectTo}) => {
    const isAuthenticated = localStorage.getItem('token') !== null;
    return !isAuthenticated ? children : <Navigate to={redirectTo}/>;
};

export default RoutesPublic;