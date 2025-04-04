"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabaseClient";
import DashboardUI from "@/components/Dashboard"; // Import Dashboard Component

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login"); 
      } else {
        setUser(user);
      }
    };
    checkUser();
  }, []);

  if (!user) return <p className="text-white text-center mt-10">Loading...</p>;

  return <DashboardUI user={user} />;
}
