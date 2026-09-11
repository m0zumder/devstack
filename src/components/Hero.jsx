import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Two-tone Header & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build Your Ideal <br />
              <span className="brand-gradient-text">Development Stack</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.   
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#technologies" 
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-white brand-gradient brand-gradient-hover shadow-md hover:shadow-lg transition transform active:scale-95"
              >
                Explore Technologies
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition transform active:scale-95"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: Isometric Banner Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20 rounded-3xl blur-2xl -z-10"></div>
                <img
                  src="/assets/banner-stack.png"
                  alt="Development Stack Illustration"
                  className="w-full h-auto drop-shadow-2xl object-contain"
                />
              </div>
            </div>

          </div>
        </div>
    </section>
  );
};

export default Hero;