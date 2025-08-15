import type { ComponentType } from 'react';
import { useUserInfoQuery } from '../redux/features/auth/auth.api';
import type { TRole } from '../types';

const withAuth = (Component: ComponentType, requiredRoles?: TRole) => {
    return function AuthWrapper() {
        const { data } = useUserInfoQuery(undefined);

        return <Component />;
    };
};

export default withAuth;
