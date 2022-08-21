import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LoginContext } from '../../App';

const PrivateRoute = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useContext(LoginContext)
    const location = useLocation();
    if(!loggedInUser.email){
        return <Navigate to="/login" state={{path: location.pathname}} replace />
    }
    return (
        children
    );
};

export default PrivateRoute;