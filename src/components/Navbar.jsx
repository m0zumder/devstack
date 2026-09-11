import React, {useState} from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">    

            {/* Mobile Left: Hamburger Icon */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}  
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>  

            {/* Brand Logo (Center on mobile, Left on desktop) */}
            <div className="flex items-center gap-2.5">
              <a href="#" className="flex items-center gap-2 group">    
                <div className="w-8 h-8 rounded-xl brand-gradient flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:opacity-95 transition">
                  DS
                </div>      
                <span className="text-xl font-extrabold tracking-tight">
                  <span className="text-slate-900">Dev </span>
                  <span className="brand-gradient-text">Stack</span>    
                </span>
              </a>
            </div>  

          {/* Desktop Center: Navigation Links */}    
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-slate-600 hover:text-pink-600 transition">
              Home
            </a> 
            <a href="#technologies" className="text-sm font-medium text-slate-600 hover:text-pink-600 transition">
                Technologies
            </a> 
            <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-pink-600 transition">
                Projects
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-pink-600 transition">
                About
            </a> 
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-pink-600 transition">
                Contact
            </a> 
          </nav>  

          {/* Right: Sign In & Sign Up Buttons */}
          <div className="flex items-center gap-3"> 
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 transition">
              Sign In
            </button>
            <button className="text-sm font-semibold text-white brand-gradient brand-gradient-hover px-3 py-2 rounded-full shadow-sm hover:shadow transition">
              Sign Up
            </button>
          </div>  
        </div>
      </div>
 
      {/* Mobile Menu (Dropdown) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-pink-600"
            >
              Home  
            </a>
            <a
              href="#technologies" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-pink-600"
            >
              Technologies
            </a>
            <a
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-pink-600"
            >
              Projects
            </a>    
            <a
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-pink-600"
            >
              About
            </a> 
            <a
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-pink-600"
            >
              Contact
            </a> 
        </div>
      )}
    </header>
  );
};

export default Navbar;