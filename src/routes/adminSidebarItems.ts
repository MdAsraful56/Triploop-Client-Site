import { lazy } from 'react';
import AddTour from '../pages/Admin/AddTour';
// import Analytics from '../pages/Admin/Analytics';
import AddDivision from '../pages/Admin/AddDivision';
import AddTourType from '../pages/Admin/AddTourType';
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
            {
                title: 'Add Tour Type',
                url: '/admin/add-tour-type',
                component: AddTourType,
            },
            {
                title: 'Add Division',
                url: '/admin/add-division',
                component: AddDivision,
            },
        ],
    },
];
