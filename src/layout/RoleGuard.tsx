import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
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
            case 'orgAdmin': return <Navigate to="/org-admin" replace />;
            case 'ohAdmin': return <Navigate to="/oh-admin" replace />;
            case 'platformAdmin': return <Navigate to="/platform-admin" replace />;
            default: return <Navigate to="/login" replace />;
        }
    }

    return (
        <AppShell>
            <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center bg-vc-light-grey">
                    <div className="animate-pulse flex items-center gap-2 text-vc-blue">
                        <div className="w-8 h-8 rounded-full bg-current opacity-20 transform scale-150"></div>
                    </div>
                </div>
            }>
                <Outlet />
            </Suspense>
        </AppShell>
    );
}
