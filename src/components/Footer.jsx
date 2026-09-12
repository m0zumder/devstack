import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 mt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">

          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3.5">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-[26px] h-[26px] rounded-lg brand-gradient flex items-center justify-center text-white font-black text-[11px] shadow-sm">
                DS
              </div>
              <span className="text-[18px] font-extrabold tracking-tight">
                <span className="text-slate-900">Dev </span>
                <span className="brand-gradient-text">Stack</span>
              </span>
            </a>
            <p className="text-[12.5px] text-slate-400 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-1.5 text-[12px] font-semibold text-slate-500">
              <a href="https://github.com/m0zumder" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-[11.5px] font-bold text-slate-900 uppercase tracking-wider mb-3.5">
              PRODUCT
            </h4>
            <ul className="space-y-2 text-[12px] text-slate-400 font-normal">
              <li><a href="#home" className="hover:text-slate-800 transition">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-800 transition">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-800 transition">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[11.5px] font-bold text-slate-900 uppercase tracking-wider mb-3.5">
              COMPANY
            </h4>
            <ul className="space-y-2 text-[12px] text-slate-400 font-normal">
              <li><a href="#about" className="hover:text-slate-800 transition">About</a></li>
              <li><a href="#contact" className="hover:text-slate-800 transition">Contact</a></li>
              <li><a href="#careers" className="hover:text-slate-800 transition">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-[11.5px] font-bold text-slate-900 uppercase tracking-wider mb-3.5">
              LEGAL
            </h4>
            <ul className="space-y-2 text-[12px] text-slate-400 font-normal">
              <li><a href="#privacy" className="hover:text-slate-800 transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-800 transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-7 border-t border-slate-100/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11.5px] text-slate-400 font-normal">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="hover:text-slate-600 transition">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;