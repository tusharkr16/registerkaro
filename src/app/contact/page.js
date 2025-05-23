"use client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const contactMethods = [

    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Us",
      details: "support@desg.com",
      description: "Response within 24 hours",
      href: "mailto:support@dsg.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Address",
      details: "GROUND FLOOR, HOUSE NO-227, BLOCK-A PKT-4, SECTOR-4 ROHINI,",
      description: "North West Delhi, Delhi, 110085",
      href: "https://maps.google.com"
    },
  ];

  return (
    <div className="relative min-h-screen font-sans bg-white overflow-x-hidden">
      {/* Background SVG */}
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

      {/* Navigation */}
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
            </div>

            
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <button
              className="p-2"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              {/* <Search size={20} className="text-black" /> */}
            </button>
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
            </button>
          </div>
        </div>



        {mobileMenuOpen && (
          <div className="mt-4 md:hidden bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-md">
            <Link href="/" className="block hover:text-blue-600 transition-colors text-black">Home</Link>
            <Link href="/" className="block hover:text-blue-600 transition-colors text-black">About</Link>
            <Link href="/" className="block hover:text-blue-600 transition-colors text-black">Services</Link>
            <Link href="/contact" className="block hover:text-blue-600 transition-colors text-black">Contact</Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            <AuroraText>Our</AuroraText> Contact Info
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Reach out to us through any of these channels
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <Link href={method.href} className="flex flex-col items-center text-center">
                  <div className="p-4 bg-blue-50 rounded-full mb-4">
                    {method.icon}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-800 font-medium text-lg">{method.details}</p>
                  <p className="text-gray-500 mt-2">{method.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>


          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-white p-4 rounded-xl shadow-md border border-gray-100 overflow-hidden"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.415969668824!2d77.2063723150825!3d28.62890098242493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;