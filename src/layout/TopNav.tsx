import { useState } from 'react';
import { VidaCentricLogo } from '../components';
import { useAuthStore } from '../store';
import NavDrawer from './NavDrawer';

export default function TopNav() {
    const { user } = useAuthStore();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const initials = user?.name.split(' ').map(n => n[0]).join('').substring(0, 2) || 'OH';

    return (
        <>
            <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-40 lg:hidden">
                <VidaCentricLogo />
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-vc-light-grey text-vc-dark-navy flex items-center justify-center text-sm font-medium">
                        {initials}
                    </div>
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="p-2 -mr-2 text-vc-dark-navy"
                        aria-label="Open menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            <NavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
}
