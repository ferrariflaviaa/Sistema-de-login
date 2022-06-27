import React from 'react';
import { Navigate } from 'react-router-dom';

const RoutesPrivate = ({children ,redirectTo}) => {
    const isAuthenticated = localStorage.getItem('token') !== null;
    return isAuthenticated ? children : <Navigate to={redirectTo}/>;
};

export default RoutesPrivate;