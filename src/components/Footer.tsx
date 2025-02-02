// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { categories } from '../data/shopData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-teal-300">
              Authorized Yonex distributor providing genuine products to sports 
              enthusiasts across India. We ensure quality and authenticity in 
              every product we sell.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-teal-300 hover:text-white transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#products" className="text-teal-300 hover:text-white transition duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-teal-300 hover:text-white transition duration-200">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-teal-300 hover:text-white transition duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to={`/category/${category.name.toLowerCase()}`}
                    className="text-teal-300 hover:text-white transition duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-white transition duration-200"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-white transition duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-white transition duration-200"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
              <div className="text-teal-300">
                <p>Email: contact@horizonsports.com</p>
                <p>Phone: +91 1234567890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-teal-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-center md:text-left text-sm text-teal-300">
              © {currentYear} Horizon Sports. All rights reserved.
            </p>
            <div className="text-center md:text-right text-sm text-teal-300">
              <a href="/privacy" className="hover:text-white mr-4 transition duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;