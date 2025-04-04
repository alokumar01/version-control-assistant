"use client";


import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold"
      >
        Get Started with Version Control Assistant
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto"
      >
        Simplify your workflow with an intelligent assistant that manages your repositories and enhances collaboration.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-8"
      >
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg">
          Get Started
        </Button>
      </motion.div>
    </section>
  );
};

export default CTA;
