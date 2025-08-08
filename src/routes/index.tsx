import { createBrowserRouter } from 'react-router';
import App from '../App';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
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
