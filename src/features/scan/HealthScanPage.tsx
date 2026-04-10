import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScanStore, useAuthStore } from '../../store';
import { generateNewScanResult } from '../../data';
import PreScanScreen from './PreScanScreen';
import CameraView from './CameraView';
import ScanProgress from './ScanProgress';
import ScanComplete from './ScanComplete';

export default function HealthScanPage() {
    const [phase, setPhase] = useState<'pre' | 'scanning' | 'complete'>('pre');
    const navigate = useNavigate();
    const { user } = useAuthStore();
    const { startScan, completeScan, resetScan } = useScanStore();

    const handleStart = () => {
        setPhase('scanning');
        startScan();
    };

    const handleComplete = () => {
        if (user) {
            const result = generateNewScanResult(user.id, Math.floor(Math.random() * 20) + 70);
            completeScan(result);
        }
        setPhase('complete');
    };

    const handleViewReport = () => {
        resetScan();
        navigate('/employee/report/latest');
    };

    return (
        <div className="w-full max-w-md mx-auto min-h-[calc(100vh-8rem)] flex flex-col bg-vc-dark-navy text-white rounded-2xl overflow-hidden shadow-xl animate-fade-in relative snap-start">
            {phase === 'pre' && <PreScanScreen onStart={handleStart} />}
            {phase === 'scanning' && (
                <>
                    <CameraView onFaceDetected={() => { }} />
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-vc-dark-navy to-transparent pointer-events-none" />
                    <ScanProgress onComplete={handleComplete} />
                </>
            )}
            {phase === 'complete' && <ScanComplete onViewReport={handleViewReport} />}
        </div>
    );
}
