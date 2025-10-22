import React from 'react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Initiatives', href: '#initiatives' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="border-t border-slate-700 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-md overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/logo.jpeg" 
                  alt="JIDI Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">JIDI</span>
            </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">
                  &quot;Believe&quot; (Twi). Our logo symbolizes growth.
                </p>
            <p className="text-xs sm:text-sm text-slate-400">
              JIDI Institute, Burma Camp, Accra, Ghana
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Connect</h3>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/company/institute-for-ai-data-science-research/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700 text-center text-xs sm:text-sm text-slate-400">
          © 2025 JIDI Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;