import { createBrowserRouter, Navigate } from 'react-router';
import App from '../App';
import DashboardLayout from '../components/layout/DashboardLayout';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Verify from '../pages/Verify';
import { generateRoutes } from '../utils/generateRoutes';
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
        Component: DashboardLayout,

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
        Component: DashboardLayout,
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
]);
