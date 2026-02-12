import { Link } from "react-router-dom"

const Footer = () => (
  <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div className="col-span-1 md:col-span-1">
        <h3 className="text-white text-2xl font-bold mb-4">Barter System</h3>
        <p className="text-sm leading-relaxed">
          The #1 skill-sharing platform for Oyo State youth. Building a community where knowledge is the currency.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="#" className="hover:text-green-500 transition">About Us</Link></li>
          <li><Link href="#" className="hover:text-green-500 transition">How it Works</Link></li>
          <li><Link href="#" className="hover:text-green-500 transition">Browse Skills</Link></li>
          <li><Link href="#" className="hover:text-green-500 transition">Success Stories</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Support</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="#" className="hover:text-green-500 transition">Help Center</Link></li>
          <li><Link href="#" className="hover:text-green-500 transition">Safety Guidelines</Link></li>
          <li><Link href="#" className="hover:text-green-500 transition">Terms of Service</Link></li>
          <li><Link href="#" className="hover:text-green-500 transition">Privacy Policy</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Contact</h4>
        <p className="text-sm mb-2">Ibadan, Oyo State, Nigeria</p>
        <p className="text-sm">support@bartersystem.ng</p>
      </div>
    </div>
    <div className="max-w-6xl mx-auto border-t border-gray-800 pt-8 text-center text-xs">
      <p>&copy; {new Date().getFullYear()} Barter System Oyo. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer