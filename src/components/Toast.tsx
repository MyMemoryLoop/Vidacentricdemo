import { useNotificationStore } from '../store';

export const Toast = () => {
    const { toasts, removeToast } = useNotificationStore();

    if (toasts.length === 0) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
            {toasts.map((toast) => (
                <div key={toast.id} className="animate-fade-in bg-vc-dark-navy text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between min-w-[280px]">
                    <span className="text-sm">{toast.message}</span>
                    <button onClick={() => removeToast(toast.id)} className="ml-4 text-gray-400 hover:text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
            ))}
        </div>
    );
};
