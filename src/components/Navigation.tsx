// components/Navigation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { categories } from '../data/shopData.ts';
import Logo from '../images/logo.png';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-teal-900 text-white py-2 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm hidden sm:block">Free Shipping on Orders Above ₹5000</p>
          <div className="flex items-center space-x-4">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+91 1234567890</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-40 top-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src={Logo}
                  alt="Horizon Sports Logo" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="hidden md:flex items-center space-x-8 mr-8">
                <Link to="/" className="nav-link text-teal-700 hover:text-teal-900">
                  Home
                </Link>
                <div 
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button className="nav-link text-teal-700 hover:text-teal-900">
                    Categories
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {categories.map((category) => (
                          <Link
                            key={category.name}
                            to={`/category/${category.name.toLowerCase()}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <a href="#testimonials" className="nav-link text-teal-700 hover:text-teal-900">
                  Testimonials
                </a>
                <a href="#contact" className="nav-link text-teal-700 hover:text-teal-900">
                  Contact
                </a>
              </div>
              <button 
                className="md:hidden ml-4"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-teal-700" />
                ) : (
                  <Menu className="h-6 w-6 text-teal-700" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-base font-medium text-teal-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/category/${category.name.toLowerCase()}`}
                  className="block px-3 py-2 text-base font-medium text-teal-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <a 
                href="#testimonials" 
                className="block px-3 py-2 text-base font-medium text-teal-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-base font-medium text-teal-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;