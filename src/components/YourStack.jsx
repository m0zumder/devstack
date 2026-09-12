import React from 'react';

const YourStack = ({ selectedStack, onRemoveFromStack, onRemoveAll }) => {
  const count = selectedStack.length;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] sticky top-24 w-full">
      {/* Title & Counter */} 
      <h3 className="text-[17px] font-bold text-slate-900 tracking-tight">
        Your Stack
      </h3>
      <p className="text-[12px] text-slate-400 mt-0.5 mb-4">
        {count === 0
          ? 'No technologies selected yet.'
          : `${count} Technology Selected`}
      </p>

      {/* Empty State vs Selected Items */}
      {count === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-xl py-9 px-4 text-center">
          <p className="text-[12px] text-slate-400 font-medium">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div>
          <div className="space-y-2.5">
            {selectedStack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-white hover:border-slate-200 transition"
              > 
                {/* Left: Logo & Details */}
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900 leading-none">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-slate-400">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Right: ✕ Button */}
                <button
                  onClick={() => onRemoveFromStack(item.id)}
                  className="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-md transition"
                  title={`Remove ${item.name}`}
                  aria-label={`Remove ${item.name}`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <button
            onClick={onRemoveAll}
            className="w-full mt-3 py-2 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 text-[12px] font-semibold transition active:scale-[0.98]"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;