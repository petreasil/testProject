import React from 'react';
import PropTypes from 'prop-types'
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector} from 'react-redux';

const RequireAuth = ({ allowedRoles }) => {
    const { user } = useSelector(state => state.auth)
    const location = useLocation();
    //console.log(user.user)

    return (
        user?.user?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : user?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

RequireAuth.propTypes = {
    allowedRoles: PropTypes.array,
    
  }
export default RequireAuth;