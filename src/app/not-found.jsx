"use client";


import Link from "next/link";
import { Home, Search, Compass, ArrowLeft, RefreshCw, Navigation, MapPin, Satellite } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function NotFound() {
  const [particles, setParticles] = useState([]);
  const [floatingElements, setFloatingElements] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [counter, setCounter] = useState(0);
  const counterRef = useRef();
  const [errorCode, setErrorCode] = useState([4, 0, 4]);
  const [isCounting, setIsCounting] = useState(true);

  // Initialize particles and floating elements
  useEffect(() => {
    // Create colorful particles
    const colors = [
      'from-blue-400/20 to-cyan-400/20',
      'from-purple-400/20 to-pink-400/20',
      'from-green-400/20 to-emerald-400/20',
      'from-yellow-400/20 to-orange-400/20',
      'from-red-400/20 to-rose-400/20'
    ];

    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 0.15,
      size: Math.random() * 30 + 15,
      speed: Math.random() * 3 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    // Mouse move effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animated counter
  useEffect(() => {
    if (isCounting && counter < 100) {
      counterRef.current = setTimeout(() => {
        setCounter(prev => {
          const newVal = prev + 1;
          if (newVal === 25) setErrorCode([4, 0, 0]);
          if (newVal === 50) setErrorCode([4, 0, 4]);
          if (newVal === 75) setErrorCode([4, 4, 4]);
          if (newVal === 100) setIsCounting(false);
          return newVal;
        });
      }, 30);
    }
    return () => {
      if (counterRef.current) clearTimeout(counterRef.current);
    };
  }, [counter, isCounting]);

  const commonRoutes = [
    { name: "Home", path: "/", icon: Home },
    { name: "Blog", path: "/blog", icon: Compass },
    { name: "About", path: "/about", icon: MapPin },
    { name: "Contact", path: "/contact", icon: Navigation },
    { name: "Products", path: "/products", icon: Satellite },
    { name: "Services", path: "/services", icon: Search },
  ];

  const handleSearch = () => {
    if (query.trim()) {
      alert(`Searching for: ${query}`);
      // Implement actual search logic here
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background with stars */}
      <div className="absolute inset-0 overflow-hidden">


        {/* Floating space elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute rounded-full ${element.type === 'planet'
              ? 'bg-linear-to-br from-blue-500/20 to-purple-500/20'
              : element.type === 'asteroid'
                ? 'bg-linear-to-br from-gray-400/20 to-gray-600/20'
                : element.type === 'star'
                  ? 'bg-linear-to-br from-yellow-300/30 to-orange-300/30'
                  : 'bg-linear-to-br from-cyan-400/20 to-blue-400/20'
              }`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size,
              animation: `orbit ${20 / element.speed}s linear infinite`,
              animationDelay: `${element.id * 2}s`,
              filter: 'blur(4px)',
            }}
          />
        ))}

        {/* Interactive mouse linear */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl transition-all duration-500 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-linear(circle, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.1) 30%, transparent 70%)',
          }}
        />

        {/* Particles */}
        {particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-linear-to-r ${particle.color}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              animation: `float ${8 / particle.speed}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              filter: 'blur(12px)',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl w-full">
        <div className="text-center mb-12">
          {/* Animated 404 counter */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse" />
            <div className="relative">
              <h1 className="text-8xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter">
                <span className="relative">
                  <span className="bg-linear-to-br from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    404
                  </span>
                </span>
              </h1>

              {/* Floating satellite animation */}
              <div className="absolute -top-4 -right-4 animate-orbit">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-20" />
                  <div className="relative bg-linear-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-2xl">
                    <Satellite size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar for animation */}
          <div className="max-w-md mx-auto mb-8">
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                style={{ width: `${counter}%` }}
              />
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-400 mt-2">
              Exploring the digital universe... {counter}%
            </p>
          </div>

          {/* Main message with typing effect */}
          <div className="mb-12 animate-in fade-in duration-1000 delay-300">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Page Not Found
              </span>
            </h2>
            <div className="relative inline-block max-w-2xl mx-auto">
              <p className="text-xl dark:text-gray-300 text-gray-600 leading-relaxed">
                The page you&apos;re looking for has drifted into the cosmic void.
                Even the most advanced navigation systems sometimes lose their way.
              </p>

              <Link
                href="/"
                className="mt-4 text-green-600 underline"
              >
                Go Home
              </Link>
              <div className="absolute -bottom-2 left-0 w-24 h-0.5 bg-linear-to-r from-blue-500 to-transparent animate-pulse" />
            </div>
          </div>
        </div>



        {/* Footer */}
        <div className="text-center pt-8 border-t dark:border-gray-800/50 border-gray-800/10">
          <p className="text-gray-500 text-sm">
            Need help navigating?{" "}
            <Link
              href="/contact"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Contact Mission Control
            </Link>
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Error 404 • Cosmic Anomaly Detected • {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>


    </div>
  );
}