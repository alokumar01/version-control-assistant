"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Layout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

