export const VidaCentricLogo = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center gap-2 ${className}`}>
        <svg className="w-8 h-8 text-vc-blue shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="2 4" strokeLinecap="round" opacity="0.8" />
            <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="1 5" strokeLinecap="round" opacity="0.6" />
            <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.4" />
        </svg>
        <span className="font-bold text-xl tracking-tight text-vc-blue select-none">
            VidaCentric
        </span>
    </div>
);
