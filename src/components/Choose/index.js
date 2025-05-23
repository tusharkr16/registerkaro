"use client";

import { Shield, Users, Award, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AuroraText } from "../magicui/aurora-text";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Counter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        if (!inView) return;

        const start = 0;
        const end = parseInt(value.replace(/[^0-9]/g, ''));
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));

        const timer = setInterval(() => {
            setCount(prevCount => {
                const newCount = prevCount + increment;
                if (newCount === end) {
                    clearInterval(timer);
                }
                return newCount;
            });
        }, stepTime);

        return () => clearInterval(timer);
    }, [inView, value, duration]);

    return (
        <div ref={ref} className="text-4xl font-bold text-blue-600 mb-2">
            {value.includes('%') ? `${count}%` :
                value.includes('/') ? value :
                    count}+
        </div>
    );
};

const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const rotateX = useSpring(0, { stiffness: 100, damping: 30, mass: 2 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 30, mass: 2 });
  const scale = useSpring(1, { stiffness: 100, damping: 30, mass: 2 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    rotateX.set((y - centerY) / 20);
    rotateY.set(-(x - centerX) / 20);
  };

  const handleMouseEnter = () => {
    scale.set(1.03);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
    >
      {children}
    </motion.div>
  );
};

export function WhyChooseUs() {
    const features = [
        {
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: "Customer-Centric Approach",
            description: "We prioritize your financial needs with tailored solutions, flexible repayment plans"
        },
        {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: "Fast & Hassle-Free Processing",
            description: "With minimal documentation , we ensure fast disbursal and minimal waiting time"
        },
        {
            icon: <Award className="w-8 h-8 text-blue-600" />,
            title: "Transparent Dealings",
            description: "complete transparency and honest communication in all our financial dealings"
        },
        {
            icon: <Clock className="w-8 h-8 text-blue-600" />,
            title: "Innovative Financial Products",
            description: "we offer a wide range of customized products designed to suit diverse customer needs"
        }
    ];

    const stats = [
        { value: "10+", label: "Years Experience" },
        { value: "500+", label: "Happy Clients" },
        { value: "99%", label: "Satisfaction Rate" },
        { value: "24/7", label: "Support Available" }
    ];

    return (
        <section className="relative py-16 md:py-24 bg-white overflow-hidden" >
            
            <div className="absolute inset-0 z-0 overflow-hidden -top-20" id="/about-us">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1440 800"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,600 C400,500 800,0 1440,100 L1440,800 Z"
                        fill="#e0e7ff"
                        fillOpacity="0.95"
                    />
                    <path
                        d="M0,500 C400,400 800,100 1440,200 L1440,800 Z"
                        fill="#dbeafe"
                        fillOpacity="0.8"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                        Why Choose Us
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        We stand out from the competition with our unwavering commitment to quality,
                        innovation, and customer satisfaction.
                    </p>
                </div>

               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {features.map((feature, index) => (
                        <TiltCard key={index}>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                                <AuroraText className="mt-2">{feature.description}</AuroraText>
                            </div>
                        </TiltCard>
                    ))}
                </div>

                
                {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <Counter value={stat.value} duration={2000} />
                            <div className="text-gray-700">{stat.label}</div>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
}