import { create } from 'zustand';
import type { User, UserRole } from '../types';
import { DEMO_USERS } from '../data';

interface AuthState {
    user: User | null;
    role: UserRole | null;
    login: (role: UserRole) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    role: null,
    login: (role) => {
        // For demo purposes, we automatically pick the pre-defined user for that role
        const user = DEMO_USERS.find(u => u.role === role) || null;
        set({ user, role });
    },
    logout: () => set({ user: null, role: null }),
}));
