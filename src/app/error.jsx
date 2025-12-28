"use client";

import { useEffect, useState } from "react";
import { AlertCircle, RefreshCw, Home, Frown } from "lucide-react";

export default function Error() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate random particles for background effect
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
  }, []);

  const handleReset = () => {
    
    setIsAnimating(true);
    setTimeout(() => {
      reset();
      setIsAnimating(false);
    }, 600);
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-red-200 animate-pulse"
            style={{
              left: `${particle.x}vw`,
              top: `${particle.y}vh`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Main error container */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 max-w-lg w-full border border-red-100 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {/* Error icon with animation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20" />
            <div className="relative bg-linear-to-br from-red-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
              <Frown size={40} className="text-white" />
            </div>
          </div>
        </div>

        {/* Error title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2 animate-in fade-in duration-1000">
          Oops! Something went wrong
        </h1>

        <div className="flex items-center justify-center gap-2 text-red-500 mb-6 animate-in fade-in duration-1000 delay-200">
          <AlertCircle size={18} />
          <span className="text-sm font-medium">Application Error</span>
        </div>

        {/* Error message */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 animate-in fade-in duration-1000 delay-300">
          <p className="text-red-700 text-center font-medium">
            {error?.message || "An unexpected error occurred"}
          </p>
        </div>

        {/* Toggle error details */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full mb-6 text-sm text-gray-600 hover:text-gray-800 transition-colors flex items-center justify-center gap-2"
        >
          <span>{showDetails ? "Hide" : "Show"} technical details</span>
          <svg
            className={`w-4 h-4 transition-transform ${showDetails ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Error details (collapsible) */}
        {showDetails && (
          <div className="mb-8 animate-in fade-in duration-500">
            <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-auto max-h-60">
              <pre>{error?.stack || "No stack trace available"}</pre>
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-1000 delay-500">
          <button
            onClick={handleReset}
            disabled={isAnimating}
            className={`flex-1 flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${isAnimating
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              }`}
          >
            <RefreshCw className={`w-5 h-5 ${isAnimating ? "animate-spin" : ""}`} />
            <span>{isAnimating ? "Retrying..." : "Try Again"}</span>
          </button>

          <button
            onClick={handleGoHome}
            className="flex-1 flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold bg-linear-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Home size={20} />
            <span>Go Home</span>
          </button>
        </div>

        {/* Contact support */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center animate-in fade-in duration-1000 delay-700">
          <p className="text-sm text-gray-600">
            If the problem persists, please{" "}
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
            >
              contact support
            </a>
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-red-300/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-300/10 rounded-full blur-2xl animate-pulse delay-1000" />
    </div>
  );
}