"use client";

import { WhyChooseUs } from "@/components/Choose";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/hero";
import { MeteorDemo, ServicesWithMeteors } from "@/components/Meteor";
import { Processing } from "@/components/Processing";
import { Testimonials } from "@/components/Testimonial";



export default function Home() {


  return (
    <div className="w-screen h-screen ">
      <HeroSection/>
      <Processing/>
      <WhyChooseUs/>
      {/* <Testimonials/> */}
      <ServicesWithMeteors/>
      <Footer/>
    </div>
  );
}