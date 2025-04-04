"use client";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg"
        >   
            &copy; {new Date().getFullYear()} Version Control Assistant. All rights reserved.
        </motion.p>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center mt-4 space-x-6"
        >
            <a href="https://github.com/alokumar01/" className="hover:text-white transition duration-300">
            <FaGithub size={24} />
            </a>
            {/* <a href="#" className="hover:text-white transition duration-300">
            <FaTwitter size={24} />
            </a> */}
            <a href="https://www.linkedin.com/in/alokumar01/" className="hover:text-white transition duration-300">
            <FaLinkedin size={24} />
            </a>
      </motion.div>






    </footer>

  );
}

export default Footer