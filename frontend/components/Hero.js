"use client";



import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Manage Your Version Control Easily
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl"
      >
        A smart assistant to simplify Git operations, integrate with GitHub, and boost your workflow.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-6"
      >
        <Button className="px-6 py-3 text-lg font-semibold shadow-md">
          Get Started
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
