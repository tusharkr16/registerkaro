"use client";
import { FileText, CheckCircle2, PenSquare, Banknote } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AuroraText } from "../magicui/aurora-text";

export function Processing() {
  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "APPLY Online",
      description: "Submit your loan application online for immediate approval.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "VERIFICATION",
      description: "We verify your identity and documents securely.",
    },
    {
      icon: <PenSquare className="w-6 h-6" />,
      title: "E-Signature",
      description: "Sign digitally to authorize your loan agreement.",
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "DISBURSAL",
      description: "Funds deposited to your account within 24 hours.",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple & Transparent Process
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our 4-step process ensures quick approval and disbursal of your funds
            with complete transparency.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          {/* Animated progress line */}
          <motion.div
            className="absolute left-8 top-0 h-full w-1 bg-blue-200 origin-top"
            variants={{
              hidden: { scaleY: 0 },
              visible: { scaleY: 1 },
            }}
            transition={{ duration: 2.5 }}
          />

          <div className="space-y-12 pl-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step dot and connector */}
                <div className="absolute -left-11 top-1 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors z-10">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="h-12 w-px bg-blue-300 mt-2"></div>
                  )}
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:border-blue-100">
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-2 rounded-lg mr-4">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <AuroraText>{step.description}</AuroraText>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}