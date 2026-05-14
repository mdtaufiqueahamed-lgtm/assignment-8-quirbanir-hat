"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Array containing all our main navigation routes
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse Animals', path: '/animals' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-black text-primary tracking-tight">
          Qurbani<span className="text-gray-800">Hat</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-bold tracking-wide transition-all duration-200 relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-primary after:rounded-full after:transition-transform after:duration-300 ${
                  isActive 
                    ? 'text-primary after:scale-x-100' 
                    : 'text-gray-500 hover:text-gray-900 after:scale-x-0'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Authentication Button */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/login" 
            className="btn btn-primary px-6 h-11 min-h-fit text-white font-black text-sm rounded-xl shadow-md shadow-primary/20 hover:scale-105 transition-all"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar Dropdown */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-bold px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <hr className="border-gray-100 my-2" />
          
          <Link 
            href="/login"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary w-full text-white font-black text-base rounded-xl"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;