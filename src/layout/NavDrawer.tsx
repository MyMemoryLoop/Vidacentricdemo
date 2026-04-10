import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../store';

interface NavDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NavDrawer({ isOpen, onClose }: NavDrawerProps) {
    const { role, user, logout } = useAuthStore();

    const getLinks = () => {
        switch (role) {
            case 'employee':
                return [
                    { name: 'Dashboard', path: '/employee' },
                    { name: 'Health Scan', path: '/employee/scan' },
                    { name: 'My Reports', path: '/employee/report/latest' },
                    { name: 'Services', path: '/employee/services' },
                    { name: 'Telehealth', path: '/employee/telehealth' },
                    { name: 'Health Profile', path: '/employee/profile' },
                    { name: 'Notifications', path: '/employee/notifications' },
                ];
            case 'orgAdmin':
                return [
                    { name: 'Dashboard', path: '/org' },
                    { name: 'Employees', path: '/org/employees' },
                    { name: 'Analytics', path: '/org/analytics' },
                    { name: 'Reports', path: '/org/reports' },
                    { name: 'Settings', path: '/org/settings' },
                ];
            case 'ohAdmin':
                return [
                    { name: 'Dashboard', path: '/oh-admin' },
                    { name: 'Client Onboarding', path: '/oh-admin/onboarding' },
                    { name: 'Subscriptions', path: '/oh-admin/subscriptions' },
                    { name: 'Service Config', path: '/oh-admin/services' },
                    { name: 'Support', path: '/oh-admin/support' },
                ];
            case 'platformAdmin':
                return [
                    { name: 'Dashboard', path: '/platform' },
                    { name: 'Client Management', path: '/platform/clients' },
                    { name: 'Partner Config', path: '/platform/partners' },
                    { name: 'Subscription Plans', path: '/platform/plans' },
                    { name: 'Platform Analytics', path: '/platform/analytics' },
                    { name: 'System Logs', path: '/platform/logs' },
                    { name: 'Settings', path: '/platform/settings' },
                ];
            default: return [];
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity" onClick={onClose} />
            <div className="fixed inset-y-0 right-0 w-72 bg-white z-50 shadow-xl overflow-y-auto transform transition-transform duration-300 lg:hidden flex flex-col">
                <div className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold text-vc-dark-navy">Menu</h2>
                        <button onClick={onClose} className="p-2 -mr-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {user && (
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-vc-light-grey text-vc-dark-navy flex items-center justify-center font-medium">
                                {user.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                            </div>
                            <div>
                                <p className="font-medium text-vc-dark-navy">{user.name}</p>
                                <p className="text-sm text-gray-500 capitalize">{role}</p>
                            </div>
                        </div>
                    )}
                </div>
                <nav className="flex-1 p-4 flex flex-col gap-1">
                    {getLinks().map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={onClose}
                            className={({ isActive }) =>
                                `block px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? 'bg-vc-blue text-white' : 'text-vc-dark-navy hover:bg-vc-light-grey'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-200">
                    <button
                        onClick={() => { logout(); onClose(); }}
                        className="w-full text-left px-4 py-3 text-vc-danger font-medium hover:bg-red-50 rounded-lg transition-colors"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </>
    );
}
