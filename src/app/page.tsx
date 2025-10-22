'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import CaseStudySplit from '@/components/CaseStudySplit';
import { Card, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';

const scrollToSection = (hash: string) => {
  const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

// Initiatives Section
const InitiativesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" id="initiatives">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4">Our Initiatives</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">Empowering Through Education & Innovation</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building AI capacity and enabling organizations to harness the power of Artificial Intelligence.
          </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* AIFFI Card */}
          <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Geometric Background Shapes */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-8 w-16 h-16 bg-emerald-400 rotate-45 rounded-sm"></div>
              <div className="absolute bottom-8 left-4 w-12 h-12 bg-emerald-500 rotate-12 rounded-full"></div>
              <div className="absolute top-1/2 left-8 w-8 h-8 bg-emerald-300 rotate-90 rounded-sm"></div>
              <div className="absolute bottom-4 right-16 w-20 h-6 bg-emerald-400 rotate-45 rounded-full"></div>
              <div className="absolute top-8 left-1/3 w-6 h-6 bg-emerald-500 rotate-45 rounded-sm"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3 sm:mb-4">AI Foundations for Future Innovators (AIFFI)</h3>
              <p className="text-base sm:text-lg text-neutral-300 mb-4 sm:mb-6 leading-relaxed">
                An education and capacity-building program empowering Ghana&apos;s youth with foundational skills in Artificial Intelligence and Data Science.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">AI literacy and coding workshops for senior high and university students</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">Teacher training and school mentorship programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">Real-world AI projects solving local challenges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">Partnerships with universities, government, and industry</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI4B Card */}
          <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Geometric Background Shapes */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 right-12 w-20 h-20 bg-emerald-400 rotate-45 rounded-sm"></div>
              <div className="absolute bottom-12 left-8 w-16 h-16 bg-emerald-500 rotate-12 rounded-full"></div>
              <div className="absolute top-1/2 left-12 w-10 h-10 bg-emerald-300 rotate-90 rounded-sm"></div>
              <div className="absolute bottom-8 right-20 w-24 h-8 bg-emerald-400 rotate-45 rounded-full"></div>
              <div className="absolute top-12 left-1/3 w-8 h-8 bg-emerald-500 rotate-45 rounded-sm"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3 sm:mb-4">AI Integration for Business (AI4B)</h3>
              <p className="text-base sm:text-lg text-neutral-300 mb-4 sm:mb-6 leading-relaxed">
                A free advisory and implementation service helping organizations adopt Artificial Intelligence to enhance efficiency and innovation.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">AI readiness assessments and system integration support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">Workflow automation and data-driven insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">Custom AI solutions for SMEs and startups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">Expert guidance on ethical and responsible AI adoption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default function HomePage() {

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-zinc-950 overflow-hidden">
        {/* Background Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top Right Geometric Pattern */}
          <div className="absolute top-20 right-20 opacity-30 hover:opacity-50 transition-opacity duration-300">
            <div className="w-64 h-64 relative">
              {/* Triangles */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-b-[50px] border-b-neutral-400"></div>
              <div className="absolute top-10 right-10 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] border-b-neutral-500"></div>
              <div className="absolute top-20 right-20 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-neutral-600"></div>
              
              {/* Rectangles */}
              <div className="absolute top-12 right-0 w-24 h-8 border border-neutral-400 opacity-50"></div>
              <div className="absolute top-32 right-8 w-16 h-8 border border-neutral-500 opacity-40"></div>
              <div className="absolute top-52 right-16 w-12 h-8 border border-neutral-600 opacity-30"></div>
            </div>
            </div>

          {/* Bottom Left Diamond Pattern */}
          <div className="absolute bottom-20 left-1/3 opacity-40 hover:opacity-60 transition-opacity duration-300">
            <div className="w-48 h-48 relative">
              {/* Large diamond */}
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-neutral-400 rotate-45 opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
              {/* Medium diamonds */}
              <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-neutral-500 rotate-45 opacity-15 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-neutral-600 rotate-45 opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>

          {/* Top Left Square Pattern */}
          <div className="absolute top-1/4 left-10 opacity-20 hover:opacity-40 transition-opacity duration-300">
            <div className="w-32 h-32 relative">
              {/* Nested squares */}
              <div className="absolute inset-0 border border-neutral-400 rotate-12"></div>
              <div className="absolute inset-2 border border-neutral-500 rotate-12"></div>
              <div className="absolute inset-4 border border-neutral-600 rotate-12"></div>
              <div className="absolute inset-6 border border-neutral-700 rotate-12"></div>
              </div>
              </div>

          {/* Bottom Right Nested Squares */}
          <div className="absolute bottom-1/3 right-10 w-32 h-32 opacity-30">
            <div className="relative">
              {/* Nested squares */}
              <div className="absolute inset-0 border border-neutral-400 rotate-12"></div>
              <div className="absolute inset-2 border border-neutral-500 rotate-12"></div>
              <div className="absolute inset-4 border border-neutral-600 rotate-12"></div>
              <div className="absolute inset-6 border border-neutral-700 rotate-12"></div>
              </div>
            </div>

          {/* Additional scattered elements with animations */}
          <div className="absolute top-32 left-1/4 w-8 h-8 bg-neutral-400 rotate-12 opacity-10 animate-float"></div>
          <div className="absolute top-64 left-1/5 w-6 h-6 bg-neutral-500 rotate-45 opacity-15 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 right-1/4 w-4 h-4 bg-neutral-600 rotate-30 opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-48 right-1/3 w-3 h-3 bg-neutral-700 rotate-60 opacity-25 animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Geometric cluster */}
          <div className="absolute top-1/2 left-16 opacity-25">
            <div className="relative">
              <div className="w-12 h-12 border-2 border-neutral-500 rotate-45"></div>
              <div className="absolute top-6 left-6 w-6 h-6 bg-neutral-600 rotate-45"></div>
              <div className="absolute top-3 left-3 w-3 h-3 bg-neutral-700"></div>
          </div>
              </div>

          {/* Angular lines pattern */}
          <div className="absolute bottom-1/4 left-1/2 opacity-15">
            <div className="relative">
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-neutral-400 to-transparent rotate-45"></div>
              <div className="absolute top-4 left-4 w-32 h-1 bg-gradient-to-r from-transparent via-neutral-500 to-transparent rotate-45"></div>
              <div className="absolute top-8 left-8 w-24 h-1 bg-gradient-to-r from-transparent via-neutral-600 to-transparent rotate-45"></div>
              </div>
          </div>

          {/* Floating circles */}
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-emerald-400/20 rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-emerald-500/30 rounded-full animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-2/3 left-1/2 w-8 h-8 bg-emerald-300/25 rounded-full animate-pulse-glow" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Left Border Image */}
        <div className="absolute -left-1 sm:-left-2 lg:-left-4 top-0 w-8 sm:w-12 lg:w-20 h-screen z-20">
          <img 
            src="/images/hero-left-border.jpg" 
            alt="African geometric pattern border"
            className="w-full h-full object-cover opacity-50 sm:opacity-70"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
              if (nextElement) {
                nextElement.style.display = 'block';
              }
            }}
          />
          {/* Temporary placeholder that shows until you add the image */}
          <div className="hidden w-full h-full bg-gradient-to-b from-emerald-400 via-orange-400 to-blue-400 opacity-30 sm:opacity-50"></div>
          </div>
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen relative z-10 flex flex-col justify-center">
          <div className="text-center">
            {/* Context Button */}
            <div className="mb-6">
              <button className="px-4 py-2 bg-zinc-800 text-white text-sm font-medium rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors">
                Welcome to JIDI Institute
              </button>
              </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering Africa Through<br />
              <span className="text-emerald-400">Ethical AI</span><br />
              & Data Science
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Traditional AI wasn&apos;t built for African contexts.<br />
              We&apos;re building ethical AI solutions<br />
              to change that.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" onClick={() => scrollToSection('#focus')} className="w-fit">
                  Learn More
                </Button>
              </div>
            </div>
            
          {/* Africa Map - Bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-96 opacity-20">
            <img 
              src="/images/Africa map.png" 
              alt="Africa AI Map"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'flex';
                }
              }}
            />
            {/* Fallback placeholder */}
            <div className="hidden w-full h-full items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Africa AI Map</h3>
                <p className="text-neutral-400 text-sm">Interactive visualization of AI initiatives across Africa</p>
              </div>
            </div>
              </div>
            </div>
      </section>

      {/* JIDI Platform Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-white" id="research">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4">Empowering Africa with Ethical AI Infrastructure</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Connecting research, policy, and innovation to solve Africa&apos;s most pressing challenges.
            </h1>
        </div>

          {/* Main Dark Card */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            {/* Top Section - Centered Content */}
            <div className="flex justify-center">
              <div className="max-w-4xl text-center p-6 sm:p-8 lg:p-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-1 h-6 bg-emerald-500 mr-3"></div>
                  <h3 className="text-xs font-medium text-neutral-400 tracking-wider uppercase">
                    JIDI INSTITUTE
                  </h3>
        </div>
        
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Who We Are
                </h2>
                
                <p className="text-base sm:text-lg text-neutral-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                  JIDI Institute is a nonprofit, independent research hub in Accra, Ghana, dedicated to connecting research, policy, and innovation to solve Africa&apos;s most pressing challenges — from health and agriculture to climate resilience and education.
                </p>
            </div>
        </div>

            {/* Bottom Section - What Makes Us Different */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-700">
              {/* Column 1 */}
              <div className="p-8 md:p-12 hover:bg-zinc-800/50 transition-colors duration-300 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 hover:bg-emerald-500/30 transition-colors duration-300">
                    <svg className="w-4 h-4 text-emerald-400 hover:text-emerald-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
                      AFRICAN-LED RESEARCH
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                      Our research is led by African scholars and practitioners who understand local contexts and challenges.
          </p>
                  </div>
                </div>
        </div>
        
              {/* Column 2 */}
              <div className="p-8 md:p-12 hover:bg-zinc-800/50 transition-colors duration-300 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 hover:bg-emerald-500/30 transition-colors duration-300">
                    <svg className="w-4 h-4 text-emerald-400 hover:text-emerald-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
                      COMMUNITY CO-DESIGN
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                      We work directly with communities to co-create solutions that address their specific needs and priorities.
          </p>
                  </div>
                </div>
            </div>
        
              {/* Column 3 */}
              <div className="p-8 md:p-12 hover:bg-zinc-800/50 transition-colors duration-300 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 hover:bg-emerald-500/30 transition-colors duration-300">
                    <svg className="w-4 h-4 text-emerald-400 hover:text-emerald-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
                      ETHICAL AI FOCUS
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Every project prioritizes ethical considerations, fairness, and responsible AI development from the ground up.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="p-8 md:p-12 hover:bg-zinc-800/50 transition-colors duration-300 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 hover:bg-emerald-500/30 transition-colors duration-300">
                    <svg className="w-4 h-4 text-emerald-400 hover:text-emerald-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
                      LOCAL CONTEXT INTEGRATION
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                      We integrate indigenous knowledge systems and local cultural contexts into all our AI solutions and research.
                </p>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mission & Vision Section */}
      <section id="about" className="relative py-12 sm:py-16 lg:py-20 bg-black border-t-4 border-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Column - Mission & Vision Content */}
          <div>
              <h2 className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4">Mission & Vision</h2>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Empowering Africa through<br />
                ethical AI & Data Science
              </h1>
              
              {/* Mission */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
          </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Mission</h3>
        </div>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed ml-0 sm:ml-11 lg:ml-14">
                  To empower African communities through responsible, inclusive, and locally relevant AI and Data Science research that drives social impact, informs policy, and builds future-ready talent.
                </p>
          </div>
          
              {/* Vision */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Vision</h3>
                  </div>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed ml-0 sm:ml-11 lg:ml-14">
                  To become Africa&apos;s leading center of excellence for ethical AI and Data Science, where African talent shapes global conversations, solves African problems, and pioneers technology that uplifts humanity.
                </p>
                </div>
          </div>
          
            {/* Right Column - Africa Map */}
            <div className="relative">
              <div className="bg-black rounded-2xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px]">
                <img 
                  src="/images/Africa map.png" 
                  alt="Africa AI Map showing AI initiatives across the continent"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback placeholder if image fails to load */}
                <div className="hidden w-full h-full items-center justify-center bg-black">
                <div className="text-center">
                    <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Africa AI Map</h3>
                    <p className="text-neutral-400 text-sm mb-4">Interactive visualization of AI initiatives across Africa</p>
                    <div className="text-xs text-neutral-500 bg-neutral-800/50 px-3 py-2 rounded-lg">
                      Placeholder for AI/Data visualization
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
              </div>
          
        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-16 sm:h-20 lg:h-24"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-black" id="focus">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4">Our Focus</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">Core focus areas driving impact</h1>
            <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Through strategic research, capacity building, and policy advocacy, we&apos;re creating pathways for African leadership in ethical AI development.
          </p>
        </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="group cursor-pointer hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 bg-zinc-900 border-zinc-700">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3 sm:mb-4">Research & Innovation</h3>
                <p className="text-base sm:text-lg text-neutral-300 text-left leading-relaxed">
                  African-led applied AI projects in health, climate, agriculture, and governance sectors across the continent.
                </p>
              </CardContent>
          </Card>
          
            <Card className="group cursor-pointer hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 bg-zinc-900 border-zinc-700">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3 sm:mb-4">Capacity Building</h3>
                <p className="text-base sm:text-lg text-neutral-300 text-left leading-relaxed">
                  Fellowships, short courses, bootcamps, and strategic collaborations with universities and research institutions.
                </p>
              </CardContent>
          </Card>
          
            <Card className="group cursor-pointer hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 bg-zinc-900 border-zinc-700">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3 sm:mb-4">Policy & Advocacy</h3>
                <p className="text-base sm:text-lg text-neutral-300 text-left leading-relaxed">
                  Frameworks for AI ethics and governance, supporting governments and regional bodies across Africa.
                </p>
              </CardContent>
          </Card>
          
            <Card className="group cursor-pointer hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 bg-zinc-900 border-zinc-700">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3 sm:mb-4">Community</h3>
                <p className="text-base sm:text-lg text-neutral-300 text-left leading-relaxed">
                  Co-designing tools with communities, piloting projects in local contexts, and integrating indigenous knowledge systems across Africa.
                </p>
              </CardContent>
          </Card>
        </div>
        </div>
      </section>

        <InitiativesSection />

      {/* News Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-zinc-950" id="news">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4">Stay Informed</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">Latest news & insights</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest research findings, policy developments, and community stories.
          </p>
        </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Link href="/articles/ai-policy-framework-africa" className="group">
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-full h-40 sm:h-48 bg-gray-700 rounded-lg mb-4 sm:mb-6 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&auto=format&q=75"
                      alt="AI and Gen Z Financial Systems"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 sm:px-3 py-1 rounded-full">Research</span>
                      <span className="text-xs text-gray-400">Oct 15, 2025</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-emerald-400 transition-colors">AI and Gen Z: Rethinking Africa&apos;s Financial Systems</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      How AI policy, demographic change, and financial innovation converge to create opportunities for Africa&apos;s digital native generation.
                  </p>
                </div>
              </CardContent>
            </Card>
            </Link>
            
            <Link href="/articles/waids-bootcamp-graduates" className="group">
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-full h-40 sm:h-48 bg-gray-700 rounded-lg mb-4 sm:mb-6 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=400&fit=crop&auto=format&q=75"
                      alt="AI Governance in Africa"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 sm:px-3 py-1 rounded-full">Policy</span>
                      <span className="text-xs text-gray-400">Oct 15, 2025</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-emerald-400 transition-colors">AI Governance in Africa: How Thoughtful Policy Can Unlock Innovation</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      How thoughtful policy can unlock innovation while safeguarding society across the African continent.
                  </p>
                </div>
              </CardContent>
            </Card>
            </Link>
            
            <Link href="/articles/university-partnerships-announced" className="group">
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-full h-40 sm:h-48 bg-gray-700 rounded-lg mb-4 sm:mb-6 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop&auto=format&q=75"
                      alt="Africa's Trillion-Dollar Opportunity"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2 sm:px-3 py-1 rounded-full">Innovation</span>
                      <span className="text-xs text-gray-400">Oct 15, 2025</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-emerald-400 transition-colors">Africa&apos;s Trillion-Dollar Opportunity: Learning from Asia&apos;s Data Revolution</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      How Africa can harness data infrastructure to unlock a trillion-dollar healthcare opportunity, inspired by Asia&apos;s digital transformation.
                  </p>
                </div>
              </CardContent>
            </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-500 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-300 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-emerald-400 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="mb-12 sm:mb-16 lg:mb-20">
                  <h2 className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4">Success Stories</h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
                    Real-world impact: How JIDI builds AI capacity across Africa
                  </h1>
        </div>
        
        {/* First Case Study */}
        <CaseStudySplit
          title="Accelerating AI Education for Northern Ghana Students"
          blurb="JIDI's comprehensive bootcamp program enabled rapid AI skill development for students in Tamale, reducing learning time from months to weeks. By delivering hands-on machine learning projects and industry mentorship, the program empowered faster career transitions and strengthened Ghana's AI talent pipeline."
          ctaLabel="Coming Soon"
          ctaHref="#"
          imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1280&h=720&fit=crop&auto=format&q=75"
          imageAlt="AI education and technology"
        />
        
        {/* Second Case Study */}
        <CaseStudySplit
          title="Empowering Women in AI & Data Science"
          blurb="Working with universities and industry partners, JIDI's WAIDS program increased female participation in AI by 150%, enabling expanded opportunities for women in tech across Africa while accelerating career advancement and improving gender diversity in the AI workforce."
          ctaLabel="Coming Soon"
          ctaHref="#"
          imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1280&h=720&fit=crop&auto=format&q=75"
          imageAlt="AI and data science technology"
        />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-zinc-900" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}