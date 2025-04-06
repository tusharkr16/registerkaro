"use client"
import { Lock, Search, ShieldCheck, Menu, X } from "lucide-react";
import heroImg from "../../../public/legal.png";
import Image from "next/image";
import { useState } from "react";
import { AuroraText } from "../magicui/aurora-text";
import Link from "next/link";

const HeroSection = () => {
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
                            <Link href='#about' className="hover:text-blue-600 transition-colors font-medium text-black">About</Link>
                            <Link href='#services' className="hover:text-blue-600 transition-colors font-medium text-black">Services</Link>
                            <Link href='/contact' className="hover:text-blue-600 transition-colors font-medium text-black">Contact</Link>
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

                
                <div className={`mt-4 md:hidden relative overflow-hidden transition-all duration-300 ease-in-out ${searchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-500 h-4 w-4" />
                </div>

                
                <div className={`md:hidden bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-md transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                    <Link href='/' className="block hover:text-blue-600 transition-colors text-black" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link href='#about' className="block hover:text-blue-600 transition-colors text-black" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link href='#services' className="block hover:text-blue-600 transition-colors text-black" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                    <Link href='/contact' className="block hover:text-blue-600 transition-colors text-black" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </div>
            </nav>

            {/* Hero Content - Reversed order on mobile */}
            <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-8 pb-12 flex flex-col lg:flex-row items-center justify-between">
                {/* Image first on mobile */}
                <div className="w-full lg:w-1/2 relative -mt-8 lg:mt-0 order-1 lg:order-2">
                    <div className="relative w-full max-w-md mx-auto">
                        <Image
                            src={heroImg}
                            alt="Hero Illustration"
                            width={900}
                            height={700}
                            priority
                            sizes="(max-width: 768px) 90vw, 50vw"
                            className="lg:translate-y-[-5%] object-contain"
                        />
                    </div>
                </div>

                {/* Text content second on mobile */}
                <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 order-2 lg:order-1 mt-8 lg:mt-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                        REGISTER <AuroraText>KARO</AuroraText>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
                    An online business compliance platform that helps <AuroraText>entrepreneurs and other individuals with various, registrations, tax filings, and other legal matters </AuroraText>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Get started
                        </button>
                        <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;