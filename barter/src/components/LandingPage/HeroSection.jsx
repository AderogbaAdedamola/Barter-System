
const Hero = () => (
  <section className="relative bg-linear-to-br from-red-600 via-red-500 to-green-600 text-white py-30 px-6 overflow-hidden">
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block border border-white/30">
        NG Empowering Oyo State Youth
      </span>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Barter System</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Trade Skills, Build Community</h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
        Connect with talented youths across Oyo State. Exchange your skills for services you need, no money required. 
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
    <div className="absolute h-40 bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,170.7C672,171,768,117,864,106.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  </section>
)

export default Hero