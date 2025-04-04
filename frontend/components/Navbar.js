"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { supabase } from "../utils/supabaseClient"; // ✅ Import Supabase client
import { Moon, Sun } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ✅ Check if a user is already logged in
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

    // ✅ Listen for authentication state changes (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session?.user || null);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
      }
    });

    return () => {
      authListener.subscription.unsubscribe(); // ✅ Cleanup listener
    };
  }, []);

  // ✅ Logout function
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <nav className="fixed top-2 left-0 w-full backdrop-blur-lg bg-white/10 dark:bg-black/20 border-b border-white/20 shadow-md p-3 flex justify-between items-center rounded-full z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold text-white dark:text-gray-200">VCS</h1>

      {/* Hamburger Icon (Visible on Mobile) */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Full-Screen Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 dark:bg-white/10 backdrop-blur-lg transition-all duration-300 ${isOpen ? "block" : "hidden"}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Navigation Links */}
      <ul
        className={`fixed md:static top-0 left-0 w-full h-screen md:h-auto md:w-auto flex flex-col md:flex-row items-center justify-center gap-6 bg-gray-900 dark:bg-gray-800 md:bg-transparent dark:md:bg-transparent text-center transition-transform duration-300 ease-in ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <li>
          <Link href="/" className="text-white dark:text-gray-300 hover:text-gray-400 transition-all text-xl md:text-base">
            Home
          </Link>
        </li>
        <li>
          <Link href="/features" className="text-white dark:text-gray-300 hover:text-gray-400 transition-all text-xl md:text-base">
            Features
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-white dark:text-gray-300 hover:text-gray-400 transition-all text-xl md:text-base">
            Dashboard
          </Link>
        </li>

        {/* ✅ Show Login/Signup if user is NOT logged in */}
        {!user ? (
          <>
            <li>
              <Link href="/login" className="text-white dark:text-gray-300 hover:text-gray-400 transition-all text-xl md:text-base">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="text-white dark:text-gray-300 hover:text-gray-400 transition-all text-xl md:text-base">
                Signup
              </Link>
            </li>
          </>
        ) : (
          /* ✅ Show Logout button if user IS logged in */
          <li>
            <button onClick={handleLogout} className="text-red-500 hover:text-red-600 text-xl md:text-base cursor-pointer">
              Logout
            </button>
          </li>
        )}
      </ul>

      {/* Theme Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="hidden md:block"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>
    </nav>
  );
};

export default Navbar;
