"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import RollingGallery from "../RollingGallery";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "This service transformed our business operations completely. The team delivered beyond our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp"
    },
    {
      quote: "Exceptional quality and attention to detail. We have seen a 40% increase in productivity since implementation.",
      author: "Michael Chen",
      role: "Operations Director"
    },
    {
      quote: "The most reliable partner we have worked with. Their solutions are innovative and effective.",
      author: "Emma Rodriguez",
      role: "Marketing Lead"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
     
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C400,100 1040,700 1440,600 L1440,0 Z"
            fill="#e0e7ff"
            fillOpacity="0.95"
          />
          <path
            d="M0,100 C400,200 1040,800 1440,700 L1440,0 Z"
            fill="#dbeafe"
            fillOpacity="0.8"
          />
          <path
            d="M200 750 Q220 730 240 750 T280 750"
            stroke="#93c5fd"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M1200 780 Q1220 760 1240 780 T1280 780"
            stroke="#93c5fd"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say about their experiences working with us.
            </p>
            
            <div className="lg:hidden bg-white p-8 rounded-xl shadow-lg mb-8">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-600 italic mb-4">&quot;{testimonials[activeIndex].quote}&quot;</p>
              <div className="text-black font-medium">{testimonials[activeIndex].author}</div>
              <div className="text-gray-500 text-sm">{testimonials[activeIndex].role}</div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <RollingGallery autoplay={true} pauseOnHover={true} />
          </div>
        </div>
      </div>
    </section>
  );
}