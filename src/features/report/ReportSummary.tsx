import type { User, ScanResult } from '../../types';
import { ScoreGauge } from '../../components';

export default function ReportSummary({ user, scan }: { user: User, scan: ScanResult }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center">
                <ScoreGauge score={scan.vidaScore} size="lg" />
                <p className="text-gray-500 mt-6 max-w-sm">
                    Population average for your age and gender is <span className="font-bold text-vc-dark-navy">68</span>.
                    You are performing above average.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
                <h3 className="font-bold text-vc-dark-navy text-lg mb-4 border-b border-gray-100 pb-2">Patient Information</h3>
                <div className="grid grid-cols-2 gap-y-4 text-sm flex-1 mt-2">
                    <div><span className="text-gray-400 block text-xs mb-0.5">Name</span><span className="font-medium text-vc-dark-navy">{user.name}</span></div>
                    <div><span className="text-gray-400 block text-xs mb-0.5">Age</span><span className="font-medium text-vc-dark-navy">{user.age || '--'}</span></div>
                    <div><span className="text-gray-400 block text-xs mb-0.5">Gender</span><span className="font-medium text-vc-dark-navy capitalize">{user.gender || '--'}</span></div>
                    <div><span className="text-gray-400 block text-xs mb-0.5">Height</span><span className="font-medium text-vc-dark-navy">{user.height} cm</span></div>
                    <div><span className="text-gray-400 block text-xs mb-0.5">Weight</span><span className="font-medium text-vc-dark-navy">{user.weight} kg</span></div>
                    <div><span className="text-gray-400 block text-xs mb-0.5">Smoking</span><span className="font-medium text-vc-dark-navy">{user.smoking ? 'Yes' : 'No'}</span></div>
                    <div><span className="text-gray-400 block text-xs mb-0.5">Diabetic</span><span className="font-medium text-vc-dark-navy">{user.diabetes ? 'Yes' : 'No'}</span></div>
                    <div><span className="text-gray-400 block text-xs mb-0.5">BP Meds</span><span className="font-medium text-vc-dark-navy">{user.bpMeds ? 'Yes' : 'No'}</span></div>
                </div>
            </div>
        </div>
    );
}
