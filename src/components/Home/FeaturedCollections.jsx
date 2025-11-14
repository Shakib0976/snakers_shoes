"use client";
import Image from "next/image";
import { Flame, Footprints, Shovel, Star, ArrowRight, ArrowLeft, Sparkles, Clock, Users, TrendingUp, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FeaturedCollections() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    const collections = [
        {
            title: "Running Shoes",
            description: "Speed, stability, and performance built for athletes and daily runners.",
            image: "/man.png",
            icon: <Shovel className="w-6 h-6" />,
            gradient: "from-blue-500 to-cyan-400",
            bgGradient: "from-blue-50 to-cyan-50",
            count: "24 Products",
            rating: 4.8,
            reviews: 1247,
            discount: "20% OFF",
            featured: true,
            tags: ["Lightweight", "Breathable", "Durable"],
        },
        {
            title: "Casual Sneakers",
            description: "Comfort meets street style. Perfect for everyday wear with premium materials.",
            image: "/man3.png",
            icon: <Star className="w-6 h-6" />,
            gradient: "from-green-500 to-emerald-400",
            bgGradient: "from-green-50 to-emerald-50",
            count: "18 Products",
            rating: 4.6,
            reviews: 892,
            discount: "15% OFF",
            featured: false,
            tags: ["Comfort", "Style", "Versatile"],
        },
        {
            title: "Limited Edition",
            description: "Rare drops, premium builds, and exclusive designs for collectors and enthusiasts.",
            image: "/man2.png",
            icon: <Flame className="w-6 h-6" />,
            gradient: "from-red-500 to-orange-400",
            bgGradient: "from-red-50 to-orange-50",
            count: "12 Products",
            rating: 4.9,
            reviews: 567,
            discount: "Limited Stock",
            featured: true,
            tags: ["Exclusive", "Premium", "Collector"],
        },
        {
            title: "Training Shoes",
            description: "Grip, balance, and durability for intense workouts and professional sports.",
            image: "/man4.png",
            icon: <Footprints className="w-6 h-6" />,
            gradient: "from-purple-500 to-pink-400",
            bgGradient: "from-purple-50 to-pink-50",
            count: "16 Products",
            rating: 4.7,
            reviews: 734,
            discount: "25% OFF",
            featured: false,
            tags: ["Grip", "Support", "Flexible"],
        },
        {
            title: "Basketball Shoes",
            description: "High-performance footwear designed for court dominance and superior ankle support.",
            image: "/man5.png",
            icon: <Zap className="w-6 h-6" />,
            gradient: "from-yellow-500 to-amber-400",
            bgGradient: "from-yellow-50 to-amber-50",
            count: "14 Products",
            rating: 4.8,
            reviews: 621,
            discount: "30% OFF",
            featured: true,
            tags: ["Performance", "Support", "Court"],
        },
        {
            title: "Running Shoes",
            description: "Speed, stability, and performance built for athletes and daily runners.",
            image: "/man.png",
            icon: <Shovel className="w-6 h-6" />,
            gradient: "from-blue-500 to-cyan-400",
            bgGradient: "from-blue-50 to-cyan-50",
            count: "24 Products",
            rating: 4.8,
            reviews: 1247,
            discount: "20% OFF",
            featured: true,
            tags: ["Lightweight", "Breathable", "Durable"],
        },
        {
            title: "Casual Sneakers",
            description: "Comfort meets street style. Perfect for everyday wear with premium materials.",
            image: "/man3.png",
            icon: <Star className="w-6 h-6" />,
            gradient: "from-green-500 to-emerald-400",
            bgGradient: "from-green-50 to-emerald-50",
            count: "18 Products",
            rating: 4.6,
            reviews: 892,
            discount: "15% OFF",
            featured: false,
            tags: ["Comfort", "Style", "Versatile"],
        },
        {
            title: "Limited Edition",
            description: "Rare drops, premium builds, and exclusive designs for collectors and enthusiasts.",
            image: "/man2.png",
            icon: <Flame className="w-6 h-6" />,
            gradient: "from-red-500 to-orange-400",
            bgGradient: "from-red-50 to-orange-50",
            count: "12 Products",
            rating: 4.9,
            reviews: 567,
            discount: "Limited Stock",
            featured: true,
            tags: ["Exclusive", "Premium", "Collector"],
        },
        {
            title: "Training Shoes",
            description: "Grip, balance, and durability for intense workouts and professional sports.",
            image: "/man4.png",
            icon: <Footprints className="w-6 h-6" />,
            gradient: "from-purple-500 to-pink-400",
            bgGradient: "from-purple-50 to-pink-50",
            count: "16 Products",
            rating: 4.7,
            reviews: 734,
            discount: "25% OFF",
            featured: false,
            tags: ["Grip", "Support", "Flexible"],
        },
        {
            title: "Basketball Shoes",
            description: "High-performance footwear designed for court dominance and superior ankle support.",
            image: "/man5.png",
            icon: <Zap className="w-6 h-6" />,
            gradient: "from-yellow-500 to-amber-400",
            bgGradient: "from-yellow-50 to-amber-50",
            count: "14 Products",
            rating: 4.8,
            reviews: 621,
            discount: "30% OFF",
            featured: true,
            tags: ["Performance", "Support", "Court"],
        },


    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % collections.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + collections.length) % collections.length);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [autoPlay, currentSlide]);

    const [visibleCards, setVisibleCards] = useState(4);

    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth < 768) setVisibleCards(1); 
            else if (window.innerWidth < 1024) setVisibleCards(2); 
            else setVisibleCards(4);
        };

        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, []);

    const startIndex = currentSlide % collections.length;

    return (
        <section className="w-full py-24 featured-section-bg relative overflow-hidden">


            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >


                    <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 secondary-title bg-clip-text text-transparent">
                        Featured Collections
                    </h2>


                    {/* Stats */}
                    <div className="flex justify-center items-center gap-8 text-sm Hero-secondary-text">
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>10K+ Happy Customers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            <span>Premium Quality</span>
                        </div>
                    </div>
                </motion.div>



                {/* Slider Container */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {collections.slice(startIndex, startIndex + visibleCards).map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative"
                            >
                                {/* Main Card */}
                                <div className={`relative bg-linear-to-br ${item.bgGradient} rounded-3xl p-6 h-full border border-gray-200/50 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105`}>

                                    {/* Discount Badge */}
                                    {item.discount && (
                                        <div className={`absolute top-4 right-4 bg-linear-to-r ${item.gradient} text-primary px-3 py-1 rounded-full text-xs font-bold z-20 shadow-lg`}>
                                            {item.discount}
                                        </div>
                                    )}

                                    {/* Featured Badge */}
                                    {item.featured && (
                                        <div className="absolute top-4 left-4 bg-yellow-500 text-primary px-3 py-1 rounded-full text-xs font-bold z-20 shadow-lg flex items-center gap-1">
                                            <Sparkles className="w-3 h-3" />
                                            Featured
                                        </div>
                                    )}



                                    {/* Product Info */}
                                    <div className="relative z-10 mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium Hero-secondary-text">{item.count}</span>

                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="relative w-full h-40 mb-4">
                                        <motion.div
                                            whileHover={{ y: -10, rotate: -5 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-contain drop-shadow-2xl"
                                            />
                                        </motion.div>

                                        {/* Glow Effect */}
                                        <div className={`absolute inset-0 bg-linear-to-r ${item.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-full`}></div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2 py-1 bg-secondary/80 backdrop-blur-sm text-xs font-medium text-gray-600 rounded-full border border-gray-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className={`text-xl font-bold mb-2 bg-linear-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                            {item.description}
                                        </p>

                                        {/* CTA Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-full flex items-center justify-center gap-2 text-sm font-semibold bg-linear-to-r ${item.gradient} text-primary px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                                        >
                                            Explore Collection
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                        </motion.button>
                                    </div>

                                    {/* Hover Elements */}
                                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-2 h-2 bg-linear-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                                    </div>
                                </div>

                                {/* Outer Glow */}
                                <div className={`absolute inset-0 bg-linear-to-r ${item.gradient} rounded-3xl blur-md opacity-0 group-hover:opacity-30 -z-10 transition-opacity duration-500`}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Slider Controls */}
                <div className="flex justify-between items-center mb-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={prevSlide}
                        onMouseEnter={() => setAutoPlay(false)}
                        onMouseLeave={() => setAutoPlay(true)}
                        className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 group"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
                    </motion.button>

                    <div className="flex items-center gap-2">
                        {collections.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? "bg-orange-500 w-8"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextSlide}
                        onMouseEnter={() => setAutoPlay(false)}
                        onMouseLeave={() => setAutoPlay(true)}
                        className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 group"
                    >
                        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
                    </motion.button>
                </div>


            </div>
        </section>
    );
}