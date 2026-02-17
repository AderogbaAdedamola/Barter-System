import Hero from "../components/LandingPage/HeroSection"
import Stats from "../components/LandingPage/Stats"
import HowItWorks from '../components/LandingPage/HowItWorks';
import Features from "../components/LandingPage/Features"
import Testimonials from "../components/LandingPage/Testimonials"
import Footer from "../components/Layouts/Footer"


export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-slate-900">
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}