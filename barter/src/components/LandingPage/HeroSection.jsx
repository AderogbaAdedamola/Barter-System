
const Hero = () => (
  <section className="relative bg-linear-to-br from-red-600 via-red-500 to-green-600 text-white py-20 px-6 overflow-hidden">
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block border border-white/30">
        NG Empowering Oyo State Youth
      </span>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Barter System</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Trade Skills, Build Community</h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
        Connect with talented youths across Oyo State. Exchange your skills for services you need—no money required. 
        From logo design to coding lessons, tailoring to tutoring.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center">
          Get Started Free <span className="ml-2">→</span>
        </button>
        <button className="border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
          Explore Platform
        </button>
      </div>
    </div>
    {/* Decorative Wave Bottom */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-15 fill-white">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C48.1,6,106.33,18.27,163,26.11,215.7,33.39,269.87,35.34,321.39,56.44Z"></path>
      </svg>
    </div>
  </section>
)

export default Hero