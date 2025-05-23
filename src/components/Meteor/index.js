"use client";

import { AuroraText } from "../magicui/aurora-text";
import { Meteors } from "../magicui/meteors";
import { Briefcase, FileText, Home, Percent, Calculator, BookOpen, Video, CheckCircle } from "lucide-react";

export function ServicesWithMeteors() {
  const services = [
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Personal Loans",
      description: "Quick and unsecured loans to meet your personal needs — be it travel, education, or medical emergencies"
    },
    // {
    //   icon: <FileText className="w-10 h-10" />,
    //   title: "Digital Lending Services",
    //   description: "End-to-end online loan application, verification, and disbursement through our secure digital platform."
    // },
    // {
    //   icon: <Home className="w-10 h-10" />,
    //   title: "Consumer Durable Loans",
    //   description: "Finance your appliances and electronics purchases with easy monthly installments and zero down payment options."
    // },
    
    

  ];

  return (
    <div className="relative w-full py-12 px-4" id="services">
      
      <div className="absolute inset-0 overflow-hidden">
        {/* <Meteors number={50} className="opacity-30" /> */}
      </div>

      
      <div className="relative mb-16 text-center">
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full h-48 overflow-hidden">
          {/* <Meteors number={30} className="opacity-20" /> */}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-800 to-gray-500 bg-clip-text text-transparent">
          Our Services
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 rounded-full" />
      </div>

     
      <div className="flex flex-row items-center justify-center gap-6 relative z-10">
        {services.map((service, index) => (
          <div key={index} className="relative h-86 w-86 pointer-cursor group">
            <div className="absolute inset-0 rounded-xl bg-white border border-gray-200/80 flex flex-col items-center justify-center p-6 shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-200">
              
              {/* <Meteors number={15} className="opacity-40" /> */}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <AuroraText className="text-gray-600 text-sm">{service.description}</AuroraText>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}