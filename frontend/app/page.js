"use-client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/Calltoaction";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
    
  );
}
