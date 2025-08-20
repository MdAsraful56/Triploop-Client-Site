import Bookings from '../pages/User/Bookings';
import type { ISidebarItem } from '../types';

export const userSidebarItems: ISidebarItem[] = [
    {
        title: 'Dashboard',
        items: [
            {
                title: 'Bookings',
                url: '/user/bookings',
                component: Bookings,
            },
        ],
    },
];
