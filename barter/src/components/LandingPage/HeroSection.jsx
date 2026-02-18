import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col bg-linear-to-br from-[#E11D48] via-[#BE123C] to-[#15803D] text-white overflow-hidden">
      
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, size: '30px 30px', backgroundSize: '40px 40px' }}>
      </div>

      <nav className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
             <span className="text-red-600 font-black text-xl italic">B</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">Barter System</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {/* <Link to="/explore" className="hover:text-white/80 transition">Explore Skills</Link> */}
          <a to="#about" className="hover:text-white/80 transition">How it Works</a>
          <div className="h-4 w-px bg-white/30"></div>
          <Link to="/login" className="hover:text-white/80 transition">Login</Link>
          <Link to="/signup" className="bg-white text-red-600 px-5 py-2.5 rounded-full font-bold hover:shadow-xl transition transform hover:-translate-y-0.5">
            Join Now
          </Link>
        </div>
      </nav>

      <div className="relative z-10 grow flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-black/10 backdrop-blur-md rounded-full text-sm font-medium mb-8 border border-white/20 animate-fade-in">
            <span className="mr-2">🇳🇬</span>
            Empowering Oyo State Youth
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
            Barter System
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 font-semibold text-white/95">
            Trade Skills, Build Community
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-white/85 max-w-2xl mx-auto leading-relaxed">
            Connect with talented youths across Oyo State. Exchange your skills for services you need—no money required. From logo design to coding lessons, tailoring to tutoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white text-red-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl hover:scale-105"
            >
              Get Started Free
              <ArrowRight className="ml-2 size-5" />
            </Link>
            <Link
              to="/home"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-transparent text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all border-2 border-white backdrop-blur-sm"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </div>

      {/* 4. WAVE DIVIDER (Exact Match to Design) */}
      <div className="absolute bottom-0 left-0 right-0 w-full leading-0">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-15 md:h-25 fill-white">
          <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;