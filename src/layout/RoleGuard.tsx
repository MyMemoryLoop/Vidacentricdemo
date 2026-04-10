import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store';
import type { UserRole } from '../types';
import AppShell from './AppShell';

interface RoleGuardProps {
    allowedRoles: UserRole[];
}

export default function RoleGuard({ allowedRoles }: RoleGuardProps) {
    const { role, user } = useAuthStore();
    const location = useLocation();

    if (!user || !role) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!allowedRoles.includes(role)) {
        // If logged in but wrong role, redirect to their proper default route
        switch (role) {
            case 'employee': return <Navigate to="/employee" replace />;
            case 'orgAdmin': return <Navigate to="/org" replace />;
            case 'ohAdmin': return <Navigate to="/oh-admin" replace />;
            case 'platformAdmin': return <Navigate to="/platform" replace />;
            default: return <Navigate to="/login" replace />;
        }
    }

    return (
        <AppShell>
            <Outlet />
        </AppShell>
    );
}
