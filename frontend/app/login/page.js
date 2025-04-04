"use client";
import { supabase } from "../../utils/supabaseClient";
import { Button } from "@/components/ui/button";

export default function Login() {
  const handleLogin = async (provider) => {
    await supabase.auth.signInWithOAuth({ provider });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <Button onClick={() => handleLogin("github")} className="w-64 bg-gray-800 hover:bg-gray-700 mb-4 hover:cursor-pointer">
        Login with GitHub
      </Button>
      <Button onClick={() => handleLogin("google")} className="w-64 bg-blue-600 hover:bg-blue-500 hover:cursor-pointer">
        Login with Google
      </Button>
    </div>
  );
}
