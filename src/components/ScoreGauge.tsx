import { useEffect, useState } from 'react';

interface ScoreGaugeProps {
    score: number;
    size?: 'sm' | 'md' | 'lg';
    animated?: boolean;
}

export const ScoreGauge = ({ score, size = 'md', animated = true }: ScoreGaugeProps) => {
    const [displayScore, setDisplayScore] = useState(animated ? 0 : score);

    useEffect(() => {
        if (animated) {
            const timeout = setTimeout(() => setDisplayScore(score), 100);
            return () => clearTimeout(timeout);
        }
    }, [score, animated]);

    const getColor = () => {
        if (score >= 80) return 'text-vc-success';
        if (score >= 60) return 'text-green-500';
        if (score >= 40) return 'text-vc-warning';
        if (score >= 20) return 'text-orange-500';
        return 'text-vc-danger';
    };

    const getLabel = () => {
        if (score >= 80) return 'Excellent';
        if (score >= 60) return 'Good';
        if (score >= 40) return 'Average';
        if (score >= 20) return 'Below Average';
        return 'Poor';
    };

    const sizeStyles = {
        sm: { wrapper: 'w-24 h-24', stroke: 6, text: 'text-2xl', label: 'text-[10px]' },
        md: { wrapper: 'w-48 h-48', stroke: 10, text: 'text-5xl', label: 'text-sm' },
        lg: { wrapper: 'w-64 h-64', stroke: 14, text: 'text-7xl', label: 'text-lg' }
    };

    const s = sizeStyles[size];
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (displayScore / 100) * circumference;

    return (
        <div className="flex flex-col items-center justify-center">
            <div className={`relative ${s.wrapper} flex items-center justify-center`}>
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                        cx="50" cy="50" r={radius}
                        className="text-gray-100" strokeWidth={s.stroke} stroke="currentColor" fill="none"
                    />
                    <circle
                        cx="50" cy="50" r={radius}
                        className={`${getColor()} transition-all duration-1000 ease-out`}
                        strokeWidth={s.stroke} stroke="currentColor" fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-2">
                    <span className={`font-bold ${getColor()} ${s.text} tracking-tight leading-none`}>
                        {Math.round(displayScore)}
                    </span>
                    <span className={`font-medium text-gray-500 ${s.label} mt-1`}>
                        {getLabel()}
                    </span>
                </div>
            </div>
        </div>
    );
};
