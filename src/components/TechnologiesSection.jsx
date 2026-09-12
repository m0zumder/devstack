import React from 'react';
import TechnologyCard from './TechnologyCard';
import YourStack from './YourStack';
import LoadingSpinner from './LoadingSpinner';

const TechnologiesSection = ({
  technologies,
  selectedStack,
  loading,
  onAddToStack,
  onRemoveFromStack,
  onRemoveAll
}) => {
  return (
    <section id="technologies" className="py-10 lg:py-14">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-8 text-left">
          <h2 className="text-2xl sm:text-[28px] font-black text-slate-900 tracking-tight">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="mt-1 text-[13px] text-slate-400 font-medium">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading Spinner or Content */}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 items-start">

            {/* Left Column: 3-Column Technology Grid */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {technologies.map((tech) => {
                  const isAdded = selectedStack.some((item) => item.id === tech.id);
                  return (
                    <TechnologyCard
                      key={tech.id}
                      technology={tech}
                      isAdded={isAdded}
                      onAddToStack={onAddToStack}
                    />
                  );
                })}
              </div>
            </div>

            {/* Right Column: Your Stack Sidebar */}
            <div className="w-full lg:w-[280px] xl:w-[290px] flex-shrink-0">
              <YourStack
                selectedStack={selectedStack}
                onRemoveFromStack={onRemoveFromStack}
                onRemoveAll={onRemoveAll}
              />
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default TechnologiesSection;