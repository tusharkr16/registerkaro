"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useState } from "react";
import { Lock, Search, ShieldCheck, Menu, X } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
        const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="relative min-h-screen font-sans bg-white overflow-x-hidden">
     
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 1100,700 1440,600 L1440,0 Z"
            fill="#e0e7ff"
            fillOpacity="0.95"
          />
          <path
            d="M0,100 C300,200 1100,800 1440,700 L1440,0 Z"
            fill="#dbeafe"
            fillOpacity="0.8"
          />
        </svg>
      </div>

      <nav className="relative z-10 px-6 py-4 md:px-12 md:py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-black">
            <span>REGISTER</span>
            <AuroraText>KARO</AuroraText>
            
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
                <Link href='/' className="hover:text-blue-600 transition-colors font-medium text-black">Home</Link>
                <Link href='/' className="hover:text-blue-600 transition-colors font-medium text-black">About</Link>
                <Link href='/' className="hover:text-blue-600 transition-colors font-medium text-black">Services</Link>
                <Link href='/contact' className="hover:text-blue-600 transition-colors font-medium text-black">Contact</Link>
                <Link href='/' className="hover:text-blue-600 transition-colors font-medium text-black">Home</Link>
            </div>

            <div className="flex items-center space-x-4 ml-8">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 rounded-full bg-white border border-gray-300 text-black placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-40 lg:w-48 transition-all"
                />
                <Search className="absolute left-3 top-2.5 text-gray-500 h-4 w-4" />
              </div>
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <button
              className="p-2"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={20} className="text-black" />
            </button>
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="mt-4 md:hidden relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 h-4 w-4" />
          </div>
        )}

        {mobileMenuOpen && (
          <div className="mt-4 md:hidden bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-md">
            <a href="#" className="block hover:text-blue-600 transition-colors text-black">Home</a>
            <a href="#" className="block hover:text-blue-600 transition-colors text-black">About</a>
            <a href="#" className="block hover:text-blue-600 transition-colors text-black">Services</a>
            <a href="#" className="block hover:text-blue-600 transition-colors text-black">Contact</a>
          </div>
        )}
      </nav>

      
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            <AuroraText>Contact</AuroraText> Us
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Have questions? We are here to help. Reach out to our team anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-black mb-6">
              Send us a <AuroraText>message</AuroraText>
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

         
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-black mb-6">
                Our <AuroraText>Contact</AuroraText> Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Email</h3>
                    <p className="text-gray-600">contact@example.com</p>
                    <p className="text-gray-600">support@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Phone</h3>
                    <p className="text-gray-600">+1 (123) 456-7890</p>
                    <p className="text-gray-600">+1 (987) 654-3210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Address</h3>
                    <p className="text-gray-600">123 Business Avenue</p>
                    <p className="text-gray-600">Suite 456, New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

         
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-black mb-6">
                Business <AuroraText>Hours</AuroraText>
              </h2>
              
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Closed" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-700 font-medium">{item.day}</span>
                    <span className="text-gray-600">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;