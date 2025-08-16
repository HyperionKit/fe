"use client";
import { useState } from "react";

interface FaucetButtonProps {
  className?: string;
}

export default function FaucetButton({ className = "" }: FaucetButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "fail">("idle");

  async function handleClick() {
    setStatus("loading");
    try {
      // Simulate faucet request or replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch {
      setStatus("fail");
    }
    setTimeout(() => {
      setStatus(null);
    }, 2000);
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleClick}
        disabled={status === "loading"}
        className="bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm disabled:cursor-not-allowed"
        aria-label="Request test tokens from faucet"
      >
        {status === "loading" ? "Requesting..." : "Get Test Tokens"}
      </button>
      
      {status === "success" && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg z-50 animate-in fade-in duration-200">
          Faucet request successful!
        </div>
      )}
      
      {status === "fail" && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg z-50 animate-in fade-in duration-200">
          Request failed. Please try again.
        </div>
      )}
    </div>
  );
}
