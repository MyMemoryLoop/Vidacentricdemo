interface RangeBarProps {
    value: number;
    min: number;
    max: number;
    optimalMin: number;
    optimalMax: number;
}

export const RangeBar = ({ value, min, max, optimalMin, optimalMax }: RangeBarProps) => {
    const getPercent = (val: number) => Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));

    const valuePercent = getPercent(value);
    const optMinPercent = getPercent(optimalMin);
    const optMaxPercent = getPercent(optimalMax);

    const isOptimal = value >= optimalMin && value <= optimalMax;
    const isModerate = !isOptimal && (value >= optimalMin - ((optimalMax - optimalMin) * 0.5) && value <= optimalMax + ((optimalMax - optimalMin) * 0.5));

    const getStatusColor = () => {
        if (isOptimal) return 'bg-vc-success';
        if (isModerate) return 'bg-vc-warning';
        return 'bg-vc-danger';
    };

    return (
        <div className="relative w-full h-8 mt-2 pb-4">
            <div className="absolute top-[8px] -translate-y-1/2 w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                <div
                    className="absolute h-full bg-green-200/50"
                    style={{ left: `${optMinPercent}%`, width: `${optMaxPercent - optMinPercent}%` }}
                />
            </div>

            <div
                className="absolute top-[8px] -translate-y-1/2 flex flex-col items-center z-10 transition-all duration-500"
                style={{ left: `${valuePercent}%`, transform: 'translate(-50%, -50%)' }}
            >
                <div className={`w-3.5 h-3.5 rounded-full border-[2.5px] border-white shadow-sm ${getStatusColor()}`} />
            </div>

            <div className="absolute inset-x-0 bottom-0 flex justify-between text-[10px] text-gray-400 font-medium">
                <span>{min}</span>
                <span>{max}</span>
            </div>
        </div>
    );
};
