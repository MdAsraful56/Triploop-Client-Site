import { createBrowserRouter } from 'react-router';
import App from '../App';
import DashboardLayout from '../components/layout/DashboardLayout';
import About from '../pages/About';
import AddTour from '../pages/Admin/AddTour';
import Analytics from '../pages/Admin/Analytics';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Bookings from '../pages/User/Bookings';
import Verify from '../pages/Verify';

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
                path: 'analytics',
                Component: Analytics,
            },
            {
                path: 'add-tour',
                Component: AddTour,
            },
        ],
    },
    {
        path: '/user',
        Component: DashboardLayout,
        children: [
            {
                path: 'bookings',
                Component: Bookings,
            },
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
