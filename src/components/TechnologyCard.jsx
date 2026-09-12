import React from 'react';

const getBadgeClasses = (badgeColor) => {
  switch (badgeColor) {
    case 'blue':
      return 'bg-sky-50 text-sky-600 border border-sky-200/60';
    case 'teal':
      return 'bg-emerald-50 text-emerald-600 border border-emerald-200/60';
    case 'orange':
      return 'bg-amber-50 text-amber-600 border border-amber-200/60';
    case 'red':
      return 'bg-rose-50 text-rose-600 border border-rose-200/60';
    case 'yellow':
      return 'bg-yellow-50 text-yellow-700 border border-yellow-200/60';
    default:
      return 'bg-slate-50 text-slate-600 border border-slate-200/60';
  }
};

const TechnologyCard = ({ technology, isAdded, onAddToStack }) => {
  const { name, category, description, icon, rating, difficulty, badge, badgeColor } = technology;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Header: Icon + Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          {badge && (
            <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${getBadgeClasses(badgeColor)}`}>
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-1.5">
          {name}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4 h-9">
          {description}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs pt-3 pb-4 border-t border-slate-100">
          <span className="px-2.5 py-0.5 rounded-md bg-slate-100/80 text-slate-600 font-medium">
            {category}
          </span>
          <span className="text-slate-400 font-normal">
            {difficulty}
          </span>
          <div className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="text-amber-400 text-sm leading-none">★</span>
            <span>{rating}</span>
          </div>
        </div>
      </div>

      {/* Button with Disabled / Added state */}
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 ${
          isAdded
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
            : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow active:scale-[0.98]'
        }`}
      >
        {isAdded ? (
          <>
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
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