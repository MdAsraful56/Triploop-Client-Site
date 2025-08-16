import type { ComponentType } from 'react';
import { Navigate } from 'react-router';
import { useUserInfoQuery } from '../redux/features/auth/auth.api';
import type { TRole } from '../types';

const withAuth = (Component: ComponentType, requiredRoles?: TRole) => {
    return function AuthWrapper() {
        const { data, isLoading } = useUserInfoQuery(undefined);

        if (!isLoading && !data?.data?.email) {
            return <Navigate to={'/login'} />;
        }

        if (requiredRoles && !isLoading && requiredRoles === data?.data?.role) {
            return <Navigate to={'/unauthorized'} />;
        }

        return <Component />;
    };
};

export default withAuth;
