import type { ScanResult } from '../types';
import { FULL_SCAN_RESULTS } from './healthMetrics';

export interface ScanHistoryEntry {
    id: string;
    userId: string;
    date: string;
    vidaScore: number;
}

export const SCAN_HISTORY: ScanHistoryEntry[] = [
    { id: 'hist-james-1', userId: 'user-emp-1', date: '2025-11-15T10:00:00Z', vidaScore: 68 },
    { id: 'hist-james-2', userId: 'user-emp-1', date: '2025-12-10T10:00:00Z', vidaScore: 71 },
    { id: 'hist-james-3', userId: 'user-emp-1', date: '2026-01-05T10:00:00Z', vidaScore: 69 },
    { id: 'hist-james-4', userId: 'user-emp-1', date: '2026-02-12T10:00:00Z', vidaScore: 73 },
    { id: 'hist-james-5', userId: 'user-emp-1', date: '2026-03-20T10:00:00Z', vidaScore: 75 },
    { id: 'hist-james-6', userId: 'user-emp-1', date: '2026-04-09T09:00:00Z', vidaScore: 78 }
];

export const getHistoryForUser = (userId: string): ScanResult[] => {
    const base = FULL_SCAN_RESULTS[0];
    return SCAN_HISTORY.filter(h => h.userId === userId).map(entry => ({
        ...base,
        id: entry.id,
        date: entry.date,
        vidaScore: entry.vidaScore,
        heartHealth: base.heartHealth.map(m => m.name === 'Heart Rate Variability' ? { ...m, value: entry.vidaScore * 0.3 } : m),
        mindBody: base.mindBody.map(m => m.name === 'Stress Level' ? { ...m, value: 100 - entry.vidaScore } : m)
    })).sort((a, b) => a.date > b.date ? -1 : 1);
};
