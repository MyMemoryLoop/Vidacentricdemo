import { create } from 'zustand';
import type { ScanResult } from '../types';

interface ScanState {
    isScanning: boolean;
    progress: number;
    resultsReady: boolean;
    latestResult: ScanResult | null;
    startScan: () => void;
    setProgress: (progress: number) => void;
    completeScan: (result: ScanResult) => void;
    resetScan: () => void;
}

export const useScanStore = create<ScanState>((set) => ({
    isScanning: false,
    progress: 0,
    resultsReady: false,
    latestResult: null,
    startScan: () => set({ isScanning: true, progress: 0, resultsReady: false }),
    setProgress: (progress) => set({ progress }),
    completeScan: (result) => set({ isScanning: false, progress: 100, resultsReady: true, latestResult: result }),
    resetScan: () => set({ isScanning: false, progress: 0, resultsReady: false, latestResult: null }),
}));
