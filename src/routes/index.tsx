import { createBrowserRouter } from 'react-router';
import App from '../App';
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
]);
