import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-12 pb-16 lg:pt-16 lg:pb-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-slate-900 leading-[1.12]">
              Build Your Ideal <br />
              <span className="brand-gradient-text">Development Stack</span>
            </h1>

            <p className="text-[15px] sm:text-[16px] text-slate-500 max-w-[500px] leading-relaxed font-normal">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>  

            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#technologies"  
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[13.5px] font-semibold text-white brand-gradient brand-gradient-hover shadow-sm hover:shadow transition duration-200"
              >
                Explore Technologies
              </a>    
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[13.5px] font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column: Isometric 3D Stack Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] lg:max-w-[420px]">
              <img
                src="/assets/banner-stack.png"
                alt="Development Stack Illustration"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;