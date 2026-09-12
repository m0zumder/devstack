import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">

          {/* Brand Block */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl brand-gradient flex items-center justify-center text-white font-black text-sm shadow-sm">
                DS
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-slate-900">Dev </span>
                <span className="brand-gradient-text">Stack</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-5 pt-2 text-xs font-semibold text-slate-500">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition">
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

          {/* Links: Product */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li><a href="#home" className="hover:text-slate-900 transition">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900 transition">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-900 transition">Projects</a></li>
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li><a href="#about" className="hover:text-slate-900 transition">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition">Contact</a></li>
              <li><a href="#careers" className="hover:text-slate-900 transition">Careers</a></li>
            </ul>
          </div>

          {/* Links: Legal */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li><a href="#privacy" className="hover:text-slate-900 transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-900 transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;