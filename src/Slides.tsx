import React, { useState } from 'react';
import { Shield, BadgeCheck, Award, Users } from 'lucide-react';

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Authorized Yonex Distributor",
      subtitle: "100% Genuine Products | Trusted by Professional Players",
      icon: <Shield className="h-16 w-16 text-white mb-6" />
    },
    {
      title: "Premium Quality Guaranteed",
      subtitle: "Every Product is Authenticated & Verified",
      icon: <BadgeCheck className="h-16 w-16 text-white mb-6" />
    },
    {
      title: "Trusted by Champions",
      subtitle: "Serving Professional Players Across India",
      icon: <Award className="h-16 w-16 text-white mb-6" />
    },
    {
      title: "Expert Customer Service",
      subtitle: "Dedicated Support for All Your Sporting Needs",
      icon: <Users className="h-16 w-16 text-white mb-6" />
    }
  ];

  return (
    <div className="slides">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : 'inactive'}`}
        >
          {slide.icon}
          <h2>{slide.title}</h2>
          <p>{slide.subtitle}</p>
        </div>
      ))}
      <button onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>Next Slide</button>
    </div>
  );
};

export default Slides;