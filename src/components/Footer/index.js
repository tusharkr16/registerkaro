"use client";
import { AuroraText } from "../magicui/aurora-text";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-white border-t-6 border-gray-200 pt-16 pb-8 ">
      
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden transform -translate-y-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C300,0 1100,80 1440,20 L1440,100 Z"
            fill="#e0e7ff"
            fillOpacity="0.95"
          />
          <path
            d="M0,80 C300,20 1100,60 1440,0 L1440,100 Z"
            fill="#dbeafe"
            fillOpacity="0.8"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">
              <span>LOGO</span>
              <span className="text-blue-600">TYPE</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Making complex legal processes simple and accessible for everyone.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="p-2 bg-blue-50 rounded-full text-blue-600 hover:bg-blue-100 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

         
          <div>
            <h3 className="text-lg font-bold text-black mb-4">
              <AuroraText>Quick Links</AuroraText>
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-bold text-black mb-4">
              <AuroraText>Services</AuroraText>
            </h3>
            <ul className="space-y-2">
              {['Document Review', 'Legal Consultation', 'Contract Drafting', 'Dispute Resolution'].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-black mb-4">
              <AuroraText>Contact Us</AuroraText>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                <span className="text-gray-600">contact@logotype.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                <span className="text-gray-600">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                <span className="text-gray-600">123 Legal Ave, Suite 456<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="border-t border-gray-200 my-8"></div>

       
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Logotype. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};