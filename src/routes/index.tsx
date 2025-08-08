import { createBrowserRouter } from 'react-router';
import App from '../App';
import LoginForm from '../components/modules/Authentication/LoginForm';
import RegisterForm from '../components/modules/Authentication/RegisterForm';
import About from '../pages/About';

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
        path: 'login',
        Component: LoginForm,
    },
    {
        path: 'register',
        Component: RegisterForm,
    },
]);
