// pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Star, MessageCircle, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { categories, products, slides, testimonials } from '../data/shopData.ts';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleBuyNow = (product: { name: string; price: string }) => {
    const message = `Hi, I'm interested in buying ${product.name} priced at ${product.price}`;
    const whatsappUrl = `https://wa.me/+911234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

    
  return (
    <div>
      {/* Hero Section */}
     <section id="home" className="pt-32 bg-gradient-to-r from-teal-700 to-blue-900 h-screen relative">
            <div className="slider h-full">
              {slides.map((slide, index) => (
                <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                  <div className="slide-content">
                    <h1 className="text-5xl font-bold text-white mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white mb-8">
                      {slide.subtitle}
                    </p>
                    <a 
                      href="#products"
                      className="inline-flex items-center bg-white text-teal-700 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition duration-300"
                    >
                      Shop Now
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
              <div className="slider-dots">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-teal-700">Product Categories</h2>
          <p className="text-center text-gray-600 mb-12">Explore our wide range of premium Yonex products</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={`/category/${category.name.toLowerCase()}`}
                className="block group"
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white mb-3">{category.count} Products</p>
                    <div className="space-y-1">
                      {category.subcategories.map((sub, idx) => (
                        <p key={idx} className="text-sm text-teal-200">{sub}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-teal-700">Featured Products</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'all' 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category.name
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <p className="text-sm text-teal-600 mb-2">{product.category}</p>
                  <h3 className="text-lg font-semibold mb-2 text-teal-800">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                </div>
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center flex-col p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white mb-4">{product.description}</p>
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="w-full max-w-xs bg-white text-teal-600 py-2 px-4 rounded-lg hover:bg-teal-50 transition duration-300"
                  >
                    Buy on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-700">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-teal-700">{testimonial.name}</p>
                    <p className="text-sm text-teal-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-700">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition duration-300">
              <Phone className="h-8 w-8 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Phone</h3>
              <p className="text-gray-600">+91 1234567890</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition duration-300">
              <Mail className="h-8 w-8 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Email</h3>
              <p className="text-gray-600">contact@horizonsports.com</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition duration-300">
              <MapPin className="h-8 w-8 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Address</h3>
              <p className="text-gray-600">123 Sports Complex, Mumbai</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;