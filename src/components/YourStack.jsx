import React from 'react';

const YourStack = ({ selectedStack, onRemoveFromStack, onRemoveAll }) => {
  const count = selectedStack.length;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sticky top-24">
      {/* Header & Dynamic Counter */}
      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
        Your Stack
      </h3>
      <p className="text-xs font-medium text-slate-400 mt-1 mb-5">
        {count === 0
          ? 'No technologies selected yet.'
          : `${count} Technology Selected`}
      </p>

        {/* Conditional Rendering: Empty State vs Stack Items */}
        {count === 0 ? (
          <div className="border border-dashed border-slate-200 rounded-2xl py-12 px-4 text-center">
            <p className="text-xs font-medium text-slate-400">
              Your stack is empty.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {selectedStack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white hover:border-slate-200 transition shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
              >
                {/* Left: Icon & Text */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-1.5 flex-shrink-0">
                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-normal">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Remove (✕) Button */}
                <button
                  onClick={() => onRemoveFromStack(item.id)}
                  className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                  title={`Remove ${item.name}`}
                  aria-label={`Remove ${item.name}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}

            {/* Remove All Button */}
            <button
              onClick={onRemoveAll}
              className="w-full mt-4 py-2.5 px-4 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 text-xs font-bold transition duration-200 active:scale-[0.98]"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
  );
};

export default YourStack;