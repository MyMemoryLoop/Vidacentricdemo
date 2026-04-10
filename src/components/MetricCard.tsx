import type { HealthMetric } from '../types';
import { RangeBar } from './RangeBar';

interface MetricCardProps {
    metric: HealthMetric;
}

export const MetricCard = ({ metric }: MetricCardProps) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-vc-dark-navy text-sm">{metric.name}</h3>
                <div className="flex items-baseline gap-1">
                    <span className={`font-bold text-lg ${metric.status === 'good' ? 'text-vc-success' :
                        metric.status === 'moderate' ? 'text-vc-warning' : 'text-vc-danger'
                        }`}>{metric.value}</span>
                    <span className="text-xs font-medium text-gray-400">{metric.unit}</span>
                </div>
            </div>

            <p className="text-xs text-gray-400 mb-2 leading-relaxed line-clamp-2 min-h-[2rem]">
                {metric.description}
            </p>

            <RangeBar
                value={metric.value}
                min={metric.min}
                max={metric.max}
                optimalMin={metric.optimalMin}
                optimalMax={metric.optimalMax}
            />
        </div>
    );
};
