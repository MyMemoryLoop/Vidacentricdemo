import { BI_DASHBOARD_DATA } from '@/data';
import { StatCard } from '../../components';

export default function PlatformAdminDashboard() {
    const data = BI_DASHBOARD_DATA.platform;

    return (
        <div className="space-y-6 animate-fade-in max-w-7xl mx-auto pb-10">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy">Platform Overview</h1>
                <p className="text-gray-500 mt-1">Global system metrics and revenue</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard title="Total Active Clients" value={data.totalActiveClients} />
                <StatCard title="Total Employees" value={data.totalEmployees} />
                <StatCard title="Total Scans Processed" value={data.totalScans.toLocaleString()} />
                <StatCard title="Avg Network VidaScore" value={`${data.avgVidaScore} / 100`} />
                <StatCard title="MRR (USD)" value={`$${data.revenueThisMonth.toLocaleString()}`} />
                <StatCard title="API Uptime" value={`${data.apiUptime}%`} />
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-vc-dark-navy mb-4 border-b border-gray-100 pb-3">System Health Alerts</h3>
                <div className="p-4 bg-green-50 text-green-700 border border-green-100 rounded-lg text-sm font-medium">
                    ✓ All systems operational. Core latency is optimal at {data.avgResponseTime}ms.
                </div>
            </div>
        </div>
    );
}
