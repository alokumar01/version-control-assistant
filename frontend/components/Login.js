"use client";
import { supabase } from "../utils/supabaseClient";
import { Button } from "@/components/ui/button";

export default function Login() {
  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) console.error("GitHub Login Error:", error.message);
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.error("Google Login Error:", error.message);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Login</h1>
      <Button onClick={signInWithGitHub} className="w-64 mb-4 bg-gray-800 hover:bg-gray-700 ">
        Sign in with GitHub
      </Button>
      <Button onClick={signInWithGoogle} className="w-64 bg-gray-800 hover:bg-gray-700">
        Sign in with Google
      </Button>
    </div>
  );
}
