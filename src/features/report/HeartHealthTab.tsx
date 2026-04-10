import type { HealthMetric } from '../../types';
import { MetricCard } from '../../components';

export default function HeartHealthTab({ metrics }: { metrics: HealthMetric[] }) {
    return (
        <div className="space-y-6 animate-fade-in pb-8">
            <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-red-50 text-vc-danger flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-vc-dark-navy">Heart Health</h2>
                    <p className="text-sm text-gray-500">11 cardiac metrics analyzed</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {metrics.map(m => (
                    <MetricCard key={m.name} metric={m} />
                ))}
            </div>
        </div>
    );
}
