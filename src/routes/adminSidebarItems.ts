import { lazy } from 'react';
import AddTour from '../pages/Admin/AddTour';
// import Analytics from '../pages/Admin/Analytics';
import type { ISidebarItem } from '../types';

const Analytics = lazy(() => import('../pages/Admin/Analytics'));

export const adminSidebarItems: ISidebarItem[] = [
    {
        title: 'Dashboard',
        items: [
            {
                title: 'Analytics',
                url: '/admin/analytics',
                component: Analytics,
            },
        ],
    },
    {
        title: 'Tour Management',
        items: [
            {
                title: 'Add Tour',
                url: '/admin/add-tour',
                component: AddTour,
            },
        ],
    },
];
