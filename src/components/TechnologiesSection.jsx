import React from 'react';

const getBadgeStyle = (badgeColor) => {
  switch (badgeColor) {
    case 'blue':
      return 'bg-sky-50 text-sky-600 border border-sky-200';
    case 'teal':
      return 'bg-emerald-50 text-emerald-600 border border-emerald-200';  
    case 'orange':
      return 'bg-amber-50 text-amber-600 border border-amber-200';
    case 'red':
      return 'bg-rose-50 text-rose-600 border border-rose-200';
    case 'yellow':
      return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
    default:
      return 'bg-slate-50 text-slate-600 border border-slate-200';
  }
};

const TechnologyCard = ({ technology, isAdded = false, onAddToStack }) => {
  if (!technology) return null;

  const {
    name = '',
    category = '',
    description = '',
    icon = '',
    rating = 4.8,
    difficulty = 'Intermediate',
    badge = '',
    badgeColor = 'blue'
  } = technology;

  return (
    <div
      className={`bg-white rounded-2xl p-5 flex flex-col justify-between h-full transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-xl ${
        isAdded
          ? 'border-2 border-pink-500 shadow-md'
          : 'border border-slate-100 hover:border-slate-300 shadow-sm'
      } group`}
    >
      <div> 
        {/* Header: Icon & Badge */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          {badge && (
            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${getBadgeStyle(badgeColor)}`}>
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[17px] font-bold text-slate-900 tracking-tight mb-1 group-hover:text-pink-600 transition-colors duration-200">
          {name}
        </h3>

        {/* Description */}
        <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-2 h-[36px] mb-4">
          {description}
        </p>
        
        {/* Meta info row */}
        <div className= "flex items-center justify-between text-xs pt-3 pb-4 border-t border-slate-100">
          <span className= "px-2.5 py-0.5 rounded bg-slate-50 border border-slate-100 text-[11px] font-medium text-slate-600">
            {category}
          </span>
          <span className="text-[11px] text-slate-400 font-normal">
            {difficulty}
          </span>
          <div className= "flex items-center gap-1 font-bold text-slate-700 text-[11px] ">
            <span className="text-amber-400 text-[13px] leading-none">★</span>
            <span>{rating}</span>
          </div>
        </div>
      </div>

      {/*Button*/}
      <button
        type="button"
        onClick={()=> onAddToStack && onAddToStack(technology)}
        disabled={isAdded}
        className={`w-full py-2.5 px-4 rounded-xl text-[12px] font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 ${
          isAdded
            ? 'bg-pink-50 text-pink-600 border border-pink-200 cursor-not-allowed'
            : 'bg-black hover:bg-slate-800 text-white shadow-sm hover:shadow-md active:scale-95'
        }`}
      >
        {isAdded ? (
          <>
            <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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
