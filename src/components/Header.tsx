import React, { useState } from 'react';
import { Button } from './Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Initiatives', href: '#initiatives' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/logo.jpeg" 
                  alt="JIDI Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">JIDI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-6">
            <Button onClick={() => scrollToSection('#contact')} size="sm" className="hidden sm:inline-flex">
              Join Us
            </Button>

            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 sm:p-3 text-zinc-400 hover:text-white md:hidden rounded-xl hover:bg-zinc-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden bg-zinc-950 min-h-screen w-full">
            {/* Mobile menu content */}
            <div className="flex flex-col min-h-screen w-full">
              {/* Header with close button */}
              <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950 flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-xl overflow-hidden flex items-center justify-center">
                    <img 
                      src="/images/logo.jpeg" 
                      alt="JIDI Logo" 
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold text-white">JIDI</span>
                </div>
                
                {/* Close button */}
                <button
                  className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation items */}
              <div className="flex-1 overflow-y-auto p-6 bg-zinc-950 min-h-0">
                <div className="flex flex-col space-y-8 h-full">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-white hover:text-emerald-400 py-4 text-3xl font-bold transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  {/* Join Us button */}
                  <div className="pt-8 mt-auto">
                    <Button onClick={() => scrollToSection('#contact')} className="w-full text-xl py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
                      Join Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;