// src/app/navbar.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link' // Using Next.js Link
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { id: 'home', label: '_hello' },
  { id: 'about', label: '_about-me' },
  { id: 'experience', label: '_experience' },
  { id: 'projects', label: '_projects' },
  { id: 'skills', label: '_skills' },
  { id: 'contact', label: '_contact-me' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = 'home';
      navLinks.forEach(link => {
        const sectionElement = document.getElementById(link.id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop - 100; 
          const sectionBottom = sectionTop + sectionElement.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = link.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    // Check if the event target is already a link, if so, prevent default
    if (e.currentTarget.tagName === 'A') {
        e.preventDefault();
    }
    
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 70; 
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setActiveSection(id);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
                  ${isScrolled || mobileMenuOpen ? 'bg-gray-900/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Updated Link: No legacyBehavior, no child <a> */}
            <Link 
              href="#home" 
              onClick={(e) => smoothScrollTo(e, 'home')}
              className="text-3xl font-bold"
            >
              <span className="text-green-400">Adam</span>
              <span className="text-orange-400">.dev</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              // Updated Link: No legacyBehavior, no child <a>
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => smoothScrollTo(e, link.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 nav-link
                            ${activeSection === link.id 
                              ? 'text-orange-400 border-b-2 border-orange-400' 
                              : 'text-gray-300 hover:text-green-400 hover:border-b-2 hover:border-green-400'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 shadow-xl backdrop-blur-md" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              // Updated Link: No legacyBehavior, no child <a>
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => smoothScrollTo(e, link.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                            ${activeSection === link.id 
                              ? 'bg-green-500 text-white' 
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}