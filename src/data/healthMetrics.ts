import type { ScanResult } from '../types';

export const FULL_SCAN_RESULTS: ScanResult[] = [
    {
        id: 'scan-james-latest',
        userId: 'user-emp-1',
        date: '2026-04-09T09:00:00Z',
        vidaScore: 78,
        heartHealth: [
            { name: 'Systolic Blood Pressure', value: 123.1, unit: 'mmHg', category: 'heart', status: 'good', min: 90, max: 180, optimalMin: 90, optimalMax: 120, description: 'Pressure in your blood vessels when your heart beats.' },
            { name: 'Diastolic Blood Pressure', value: 84.6, unit: 'mmHg', category: 'heart', status: 'good', min: 60, max: 120, optimalMin: 60, optimalMax: 80, description: 'Pressure in your blood vessels when your heart rests.' },
            { name: 'Heart Rate', value: 65.2, unit: 'bpm', category: 'heart', status: 'good', min: 40, max: 120, optimalMin: 60, optimalMax: 100, description: 'Number of times your heart beats per minute.' },
            { name: 'Heart Rate Variability', value: 19.8, unit: 'ms', category: 'heart', status: 'moderate', min: 0, max: 100, optimalMin: 20, optimalMax: 100, description: 'Variation in time between heartbeats.' },
            { name: 'Cardiac Workload', value: 3.9, unit: 'dB', category: 'heart', status: 'good', min: 1, max: 10, optimalMin: 1, optimalMax: 5, description: 'A measure of how hard your heart is working.' },
            { name: 'Cardiovascular Disease Risk', value: 3.9, unit: '%', category: 'heart', status: 'good', min: 0, max: 100, optimalMin: 0, optimalMax: 10, description: 'Estimated risk of developing cardiovascular disease.' },
            { name: 'Heart Attack Risk', value: 1.7, unit: '%', category: 'heart', status: 'good', min: 0, max: 100, optimalMin: 0, optimalMax: 5, description: 'Estimated risk of experiencing a heart attack.' },
            { name: 'Hypercholesterolemia Risk', value: 60.8, unit: '%', category: 'heart', status: 'moderate', min: 0, max: 100, optimalMin: 0, optimalMax: 50, description: 'Risk of having high cholesterol levels.' },
            { name: 'Hypertension Risk', value: 23.7, unit: '%', category: 'heart', status: 'good', min: 0, max: 100, optimalMin: 0, optimalMax: 30, description: 'Risk of having high blood pressure.' },
            { name: 'Stroke Risk', value: 1.9, unit: '%', category: 'heart', status: 'good', min: 0, max: 100, optimalMin: 0, optimalMax: 5, description: 'Estimated risk of experiencing a stroke.' },
            { name: 'Vascular Capacity', value: 2.2, unit: 's', category: 'heart', status: 'good', min: 0.5, max: 5.0, optimalMin: 1.5, optimalMax: 3.0, description: 'A measure of blood vessel health and elasticity.' }
        ],
        mindBody: [
            { name: 'Respiratory Rate', value: 10.0, unit: 'bpm', category: 'mindBody', status: 'good', min: 8, max: 25, optimalMin: 12, optimalMax: 20, description: 'Number of breaths you take per minute.' },
            { name: 'Diabetes Risk', value: 37.1, unit: '%', category: 'mindBody', status: 'good', min: 0, max: 100, optimalMin: 0, optimalMax: 40, description: 'Estimated risk of developing type 2 diabetes.' },
            { name: 'Body Shape Index', value: 8.0, unit: '', category: 'mindBody', status: 'good', min: 5, max: 15, optimalMin: 7, optimalMax: 10, description: 'An indicator of body composition and health.' },
            { name: 'Haemoglobin HBA1C Risk', value: 44.5, unit: '%', category: 'mindBody', status: 'moderate', min: 0, max: 100, optimalMin: 0, optimalMax: 40, description: 'Risk of elevated blood sugar levels.' },
            { name: 'Mental Wellbeing Score', value: 72, unit: '', category: 'mindBody', status: 'good', min: 0, max: 100, optimalMin: 60, optimalMax: 100, description: 'Overall assessment of your mental wellness.' },
            { name: 'Stress Level', value: 64, unit: '', category: 'mindBody', status: 'moderate', min: 0, max: 100, optimalMin: 0, optimalMax: 50, description: 'Current level of physiological stress.' },
            { name: 'Sleep Quality Score', value: 71, unit: '', category: 'mindBody', status: 'good', min: 0, max: 100, optimalMin: 60, optimalMax: 100, description: 'Assessment of your recent sleep patterns.' },
            { name: 'Longevity Score', value: 68, unit: '', category: 'mindBody', status: 'good', min: 0, max: 100, optimalMin: 70, optimalMax: 100, description: 'Projected health span indicator.' },
            { name: 'Fatigue Score', value: 45, unit: '', category: 'mindBody', status: 'good', min: 0, max: 100, optimalMin: 0, optimalMax: 50, description: 'Measure of physical and mental exhaustion.' }
        ]
    }
];

export const generateNewScanResult = (userId: string, targetScore: number): ScanResult => {
    return {
        ...FULL_SCAN_RESULTS[0],
        id: `scan-generated-${Date.now()}`,
        userId,
        date: new Date().toISOString(),
        vidaScore: targetScore,
    };
};

export const getLatestScanForUser = (userId: string): ScanResult | undefined => {
    return FULL_SCAN_RESULTS.find(s => s.userId === userId);
};
