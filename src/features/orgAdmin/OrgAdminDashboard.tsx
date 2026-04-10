import { BI_DASHBOARD_DATA } from '@/data';
import { StatCard } from '../../components';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function OrgAdminDashboard() {
    const data = BI_DASHBOARD_DATA.clientAcme;

    return (
        <div className="space-y-6 animate-fade-in max-w-7xl mx-auto pb-10">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy">Acme Corp Dashboard</h1>
                <p className="text-gray-500 mt-1">Organization health analytics and participation</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Avg VidaScore" value={`${data.avgVidaScore} / 100`} />
                <StatCard title="Participation Rate" value={`${data.participationRate}%`} />
                <StatCard title="Scans This Month" value={data.scansThisMonth} />
                <StatCard title="Telehealth Sessions" value={data.telehealthBookings} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-vc-dark-navy mb-6">Organizational Health Trend</h3>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data.trends}>
                                <defs>
                                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#05a6f0" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#05a6f0" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                                <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dx={-10} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Area type="monotone" dataKey="score" stroke="#05a6f0" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
                    <h3 className="font-bold text-vc-dark-navy mb-5">Quick Actions</h3>
                    <div className="space-y-4 flex-1 flex flex-col">
                        <button className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-vc-blue hover:bg-blue-50 transition-colors group bg-gray-50">
                            <span className="font-medium text-vc-dark-navy">Generate Monthly Report</span>
                            <span className="text-vc-blue group-hover:translate-x-1 transition-transform font-bold">→</span>
                        </button>
                        <button className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-vc-blue hover:bg-blue-50 transition-colors group bg-gray-50">
                            <span className="font-medium text-vc-dark-navy">Manage Employees</span>
                            <span className="text-vc-blue group-hover:translate-x-1 transition-transform font-bold">→</span>
                        </button>
                        <button className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-vc-blue hover:bg-blue-50 transition-colors group bg-gray-50">
                            <span className="font-medium text-vc-dark-navy">Configure Workflows</span>
                            <span className="text-vc-blue group-hover:translate-x-1 transition-transform font-bold">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
