import { create } from 'zustand';
import { NOTIFICATIONS } from '../data';
import type { Notification } from '../types';

export interface ToastMessage {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
}

interface NotificationStore {
    toasts: ToastMessage[];
    notifications: Notification[];
    unreadCount: number;
    addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
    removeToast: (id: string) => void;
    markAsRead: (id: string) => void;
    markAllAsRead: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
    toasts: [],
    notifications: NOTIFICATIONS,
    unreadCount: NOTIFICATIONS.filter(n => !n.read).length,
    addToast: (message, type = 'info') => {
        const id = Date.now().toString();
        set((state) => ({
            toasts: [...state.toasts, { id, message, type }]
        }));
    },
    removeToast: (id) => set((state) => ({
        toasts: state.toasts.filter(t => t.id !== id)
    })),
    markAsRead: (id) => set((state) => {
        const next = state.notifications.map(n => n.id === id ? { ...n, read: true } : n);
        return { notifications: next, unreadCount: next.filter(n => !n.read).length };
    }),
    markAllAsRead: () => set((state) => {
        const next = state.notifications.map(n => ({ ...n, read: true }));
        return { notifications: next, unreadCount: 0 };
    }),
}));
