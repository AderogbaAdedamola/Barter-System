import Hero from "../components/LandingPage/HeroSection"
import Stats from "../components/LandingPage/Stats"
import Features from '../components/LandingPage/Features';
import Footer from "../Layouts/Footer"


export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-slate-900">
      <Hero />
      <Stats />
      <Features />
      <Footer />
    </div>
  );
}