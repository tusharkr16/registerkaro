"use client";
import { Lock, Search, ShieldCheck, Menu, X, ArrowRight } from "lucide-react";
import heroImg from "../../../public/legal.png";
import Image from "next/image";
import { useState } from "react";
import { AuroraText } from "../magicui/aurora-text";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductCom = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const products = [
        {
            title: "Personal Loans",
            description: "Flexible personal financing with competitive rates and quick approval.",
            features: [
                "Loan amounts up to ₹10 lakhs",
                "Flexible repayment terms",
                "Minimal documentation",
                "Fast disbursal"
            ],
            icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
        },
        {
            title: "Business Loans",
            description: "Fuel your business growth with tailored financial solutions.",
            features: [
                "Customized loan structures",
                "Collateral-free options",
                "Working capital support",
                "Quick processing"
            ],
            icon: <Lock className="w-8 h-8 text-blue-600" />
        },
        {
            title: "MSME Financing",
            description: "Specialized funding for micro, small and medium enterprises.",
            features: [
                "Government scheme benefits",
                "Competitive interest rates",
                "Technical support",
                "Growth-oriented plans"
            ],
            icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
        },
        {
            title: "Loan Against Property",
            description: "Unlock the value of your property while retaining ownership.",
            features: [
                "High-value loans",
                "Long repayment tenure",
                "Low interest rates",
                "Multipurpose usage"
            ],
            icon: <Lock className="w-8 h-8 text-blue-600" />
        }
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
                        <span>DSG</span>
                        <AuroraText>NBFC</AuroraText>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-8">
                            <Link href='/' className="hover:text-blue-600 transition-colors font-medium text-black">Home</Link>
                            <Link href='/about-us' className="hover:text-blue-600 transition-colors font-medium text-black">About</Link>
                            <Link href='/product' className="hover:text-blue-600 transition-colors font-medium text-black">Our Product</Link>
                            <Link href='/contact' className="hover:text-blue-600 transition-colors font-medium text-black">Contact</Link>
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

                {/* Mobile Menu */}
                <div className={`md:hidden bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-md transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                    <Link href='/' className="block hover:text-blue-600 transition-colors text-black" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link href='/about-us' className="block hover:text-blue-600 transition-colors text-black" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link href='/product' className="block hover:text-blue-600 transition-colors text-black" onClick={() => setMobileMenuOpen(false)}>Our Product</Link>
                    <Link href='/contact' className="block hover:text-blue-600 transition-colors text-black" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-8 pb-12 flex flex-col lg:flex-row items-center justify-between">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 relative -mt-8 lg:mt-0 order-1 lg:order-2"
                >
                    <div className="relative w-full max-w-md mx-auto bg-white h-64 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                        <Image
                            src="https://flot-bucket.blr1.cdn.digitaloceanspaces.com/flot-bucket/statics/Untitled-2%20512%20512.png"
                            alt="Financial Products Illustration"
                            width={900}
                            height={500}
                            priority
                            sizes="(max-width: 768px) 90vw, 50vw"
                            className="object-contain"
                        />
                    </div>

            
        </motion.div>

                {/* Text Content */ }
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 order-2 lg:order-1 mt-8 lg:mt-0"
    >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Our <AuroraText>Products</AuroraText>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
            At DSG Investments Private Limited, we offer a range of loan products designed to meet your unique financial needs.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
            <AuroraText>Whether you are looking for quick personal funding or support for your growing business, our solutions are tailored to ensure flexibility, affordability, and transparency.</AuroraText>
        </p>
    </motion.div>
            </div >

    {/* Products Section */ }
    < div className = "relative z-10 px-6 md:px-12 lg:px-20 pb-16 md:pb-24" >
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                    <div className="p-3 bg-blue-50 rounded-full w-max mb-4">
                        {product.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                        {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                                <ArrowRight className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/contact"
                        className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-colors"
                    >
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </motion.div>
            ))}
        </div> */}
            </div >
        </div >
    );
};

export default ProductCom;