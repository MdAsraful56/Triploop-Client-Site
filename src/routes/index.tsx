import { createBrowserRouter, Navigate } from 'react-router';
import App from '../App';
import DashboardLayout from '../components/layout/DashboardLayout';
import { role } from '../constants/role';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Unauthorized from '../pages/Unauthorized';
import Verify from '../pages/Verify';
import type { TRole } from '../types';
import { generateRoutes } from '../utils/generateRoutes';
import withAuth from '../utils/withAuth';
import { adminSidebarItems } from './adminSidebarItems';
import { userSidebarItems } from './userSidebarItems';

export const router = createBrowserRouter([
    {
        path: '/',
        // element: <App />,
        Component: App,
        children: [
            {
                path: 'about',
                Component: About,
            },
        ],
    },
    {
        path: '/admin',
        Component: withAuth(
            DashboardLayout,
            (role.admin as TRole) || (role.superAdmin as TRole)
        ),

        children: [
            {
                index: true,
                element: <Navigate to='/admin/analytics' replace />,
            },
            ...generateRoutes(adminSidebarItems),

            // {
            //     path: 'analytics',
            //     Component: Analytics,
            // },
            // {
            //     path: 'add-tour',
            //     Component: AddTour,
            // },
        ],
    },
    {
        path: '/user',
        Component: withAuth(DashboardLayout, role.user as TRole),
        children: [
            {
                index: true,
                element: <Navigate to='/user/bookings' replace />,
            },
            ...generateRoutes(userSidebarItems),
        ],
    },
    {
        path: '/login',
        Component: Login,
    },
    {
        path: '/register',
        Component: Register,
    },
    {
        path: '/verify',
        Component: Verify,
    },
    {
        path: '/unauthorized',
        Component: Unauthorized,
    },
]);
