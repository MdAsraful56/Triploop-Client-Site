import { adminSidebarItems } from '../routes/adminSidebarItems';
import { userSidebarItems } from '../routes/userSidebarItems';
import type { TRole } from '../types';

export const getSidebarItems = (role: TRole) => {
    switch (role) {
        case 'SUPER_ADMIN':
            return [...adminSidebarItems];
        case 'ADMIN':
            return [...adminSidebarItems];
        case 'USER':
            return [...userSidebarItems];
        default:
            return [];
    }
};
