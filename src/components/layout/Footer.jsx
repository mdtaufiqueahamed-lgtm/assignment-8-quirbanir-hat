
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 mt-auto border-t border-gray-850">
      {/* মেইন ফুটার কন্টেন্ট */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* ১. ব্র্যান্ড এবং ডেসক্রিপশন সেকশন */}
        <div className="space-y-4">
          <Link href="/" className="text-3xl font-black text-primary tracking-tight">
            Qurbani<span className="text-white">Hat</span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400 font-medium">
            সম্পূর্ণ প্রাকৃতিক উপায়ে লালন-পালন করা সুস্থ ও নিরোগ কোরবানির পশু ঘরে বসেই নিরাপদ বুকিংয়ের বিশ্বস্ত মাধ্যম।
          </p>
        </div>

        {/* ২. কুইক লিঙ্কস সেকশন */}
        <div>
          <h4 className="text-white font-extrabold text-lg mb-4 underline decoration-primary decoration-2 underline-offset-4">
            প্রয়োজনীয় লিংক
          </h4>
          <ul className="space-y-2 text-sm font-semibold">
            <li>
              <Link href="/animals" className="hover:text-primary transition-colors">পশুর তালিকা</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">আমাদের সম্পর্কে</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary transition-colors">শর্তাবলী</Link>
            </li>
          </ul>
        </div>

        {/* ৩. যোগাযোগ সেকশন */}
        <div>
          <h4 className="text-white font-extrabold text-lg mb-4 underline decoration-primary decoration-2 underline-offset-4">
            যোগাযোগ
          </h4>
          <ul className="space-y-3 text-sm font-semibold text-gray-400">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" /> +৮৮০ ১২৩৪-৫৬৭৮৯০
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary" /> support@qurbanihat.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" /> ঢাকা, বাংলাদেশ
            </li>
          </ul>
        </div>

        {/* ৪. সোশ্যাল মিডিয়া লিঙ্ক সেকশন (আপনার রিকোয়েস্ট অনুযায়ী) */}
        <div>
          <h4 className="text-white font-extrabold text-lg mb-4 underline decoration-primary decoration-2 underline-offset-4">
            আমাদের সাথে যুক্ত হন
          </h4>
          <p className="text-sm text-gray-400 mb-4 font-medium">সর্বশেষ আপডেট ও খামারের খবর পেতে ফলো করুন:</p>
          
          <div className="flex gap-3">
            {/* ফেসবুক */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-900 p-3 rounded-xl text-gray-400 hover:bg-primary hover:text-white transition-all shadow-md group"
            >
              <FaFacebookF className="text-lg group-hover:scale-110 transition-transform" />
            </a>

            {/* এক্স (Twitter) */}
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-900 p-3 rounded-xl text-gray-400 hover:bg-primary hover:text-white transition-all shadow-md group"
            >
              <FaTwitter className="text-lg group-hover:scale-110 transition-transform" />
            </a>

            {/* ইনস্টাগ্রাম */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-900 p-3 rounded-xl text-gray-400 hover:bg-primary hover:text-white transition-all shadow-md group"
            >
              <FaInstagram className="text-lg group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

      </div>

      {/* নিচের কপিরাইট অংশ */}
      <div className="border-t border-gray-900 bg-gray-950 py-4 text-center text-xs font-bold text-gray-500">
        <p>&copy; {currentYear} QurbaniHat. সর্বস্বত্ব সংরক্ষিত।</p>
      </div>
    </footer>
  );
};

export default Footer;