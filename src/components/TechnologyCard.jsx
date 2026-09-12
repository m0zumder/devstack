import Rect from 'react';

const getBadgeStyle = (badgeColor) => {
  switch (badgeColor) {
    case 'blue':
      return 'bg-[#F0F9FF] text-[#0284C7] border border-[#E0F2FE]';
    case 'teal':
      return 'bg-[#ECFDF5] text-[#059669] border border-[#D1FAE5]';
    case 'orange':
      return 'bg-[#FFF7ED] text-[#EA580C] border border-[#FFEDD5]';
    case 'red':
      return 'bg-[#FFF1F2] text-[#E11D48] border border-[#FFE4E6]';
    case 'yellow':
      return 'bg-[#FFFBEB] text-[#D97706] border border-[#FEF3C7]';
    default:
      return 'bg-slate-50 text-slate-600 border border-slate-100';
  }
};

const TechnologyCard = ({ technology, isAdded, onAddToStack }) => {
  const { name, category, description, icon, rating, difficulty, badge, badgeColor } = technology;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-200 flex flex-col justify-between h-full">
      <div>
        {/* Header: Icon & Badge */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          {badge && (
            <span className={`text-[10.5px] font-semibold px-2 py-0.5 rounded-full leading-tight ${getBadgeStyle(badgeColor)}`}>
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[16px] font-bold text-slate-900 tracking-tight mb-1">
          {name}
        </h3>

        {/* Description (2-lines fixed height) */}
        <p className="text-[11.5px] text-slate-400 leading-snug line-clamp-2 h-[32px] mb-4">
          {description}
        </p>

        {/* Metadata Row */}
        <div className="flex items-center justify-between text-xs pt-3 pb-4 border-t border-slate-100">
          <span className="px-2 py-0.5 rounded bg-slate-50 border border-slate-100 text-[10.5px] font-medium text-slate-500">
            {category}
          </span>
          <span className="text-[11px] text-slate-400">
            {difficulty}
          </span>
          <div className="flex items-center gap-1 font-bold text-slate-700 text-[11px]">
            <span className="text-amber-400 text-[12px] leading-none">★</span>
            <span>{rating}</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-xl text-[12px] font-semibold tracking-wide transition-all duration-150 flex items-center justify-center gap-1.5 ${
          isAdded
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200/80'
            : 'bg-black hover:bg-slate-800 text-white shadow-sm hover:shadow active:scale-[0.98]'
        }`}
      >
        {isAdded ? (
          <>
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>✓ Added to Stack</span>
          </>
        ) : (
          <span>Add to Stack</span>
        )}
      </button>
    </div>
  );
};

export default TechnologyCard;