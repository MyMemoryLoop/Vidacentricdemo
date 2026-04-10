export default function OhAdminDashboard() {
    return (
        <div className="space-y-6 animate-fade-in max-w-7xl mx-auto pb-10">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy">One Healthcare Hub</h1>
                <p className="text-gray-500 mt-1">Manage global operations and provider networks</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-vc-dark-navy mb-4 border-b border-gray-100 pb-2">Client Pipeline</h3>
                    <p className="text-sm text-gray-400 font-medium py-8 text-center bg-gray-50 rounded-lg border border-gray-100 border-dashed">
                        No pending enterprise onboarding.
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-vc-dark-navy mb-4 border-b border-gray-100 pb-2">Provider Network Status</h3>
                    <div className="space-y-4 mt-4">
                        <div className="flex justify-between items-center text-sm"><span className="text-gray-600 font-medium">Alula Scoring Engine</span><span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded border border-green-100">Online</span></div>
                        <div className="flex justify-between items-center text-sm"><span className="text-gray-600 font-medium">Abi Global Telehealth API</span><span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded border border-green-100">Online</span></div>
                        <div className="flex justify-between items-center text-sm"><span className="text-gray-600 font-medium">Bubl Partner Infrastructure</span><span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded border border-green-100">Online</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
