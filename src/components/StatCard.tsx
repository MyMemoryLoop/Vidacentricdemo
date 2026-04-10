interface StatCardProps {
    title: string;
    value: string | number;
    trend?: {
        value: number;
        isPositiveGood?: boolean;
        label?: string;
    };
    icon?: React.ReactNode;
    colorClass?: string;
}

export const StatCard = ({ title, value, trend, icon, colorClass = 'text-vc-blue' }: StatCardProps) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                {icon && <div className={`${colorClass} opacity-80`}>{icon}</div>}
            </div>
            <div className="flex items-baseline gap-2 mt-auto">
                <span className={`text-2xl font-bold ${colorClass}`}>{value}</span>
                {trend && (
                    <div className="flex items-center gap-1">
                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded-md ${trend.value > 0
                                ? (trend.isPositiveGood !== false ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700')
                                : (trend.isPositiveGood !== false ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700')
                            }`}>
                            {trend.value > 0 ? '↑' : '↓'} {Math.abs(trend.value)}{trend.label || '%'}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};
