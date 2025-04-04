"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GitBranch, WebhookIcon, Puzzle } from "lucide-react";

const features = [
  {
    title: "Version Control Tools",
    description: "Utilize Git and other tools for seamless repository management.",
    icon: <GitBranch size={32} />,
  },
  {
    title: "API Integration",
    description: "Fetch relevant data from GitHub, GitLab, and other services.",
    icon: <WebhookIcon size={32} />,
  },
  {
    title: "Project Integration",
    description: "Easily link your repositories and personalize the experience.",
    icon: <Puzzle size={32} />,
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold"
      >
        Key Features
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto"
      >
        {features.map((feature, index) => (
          <Card key={index} className="bg-gray-800 border-none shadow-lg">
            <CardHeader className="flex flex-col items-center">
              {feature.icon}
              <CardTitle className="mt-4 text-xl font-semibold">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
