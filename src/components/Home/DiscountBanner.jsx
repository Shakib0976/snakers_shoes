"use client";
import { motion } from "framer-motion";
import { Clock, Zap, ArrowRight, Star, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DiscountBanner() {
    const [timeLeft, setTimeLeft] = useState({
        days: 1,
        hours: 23,
        minutes: 59,
        seconds: 59,
    });

    const featuredShoes = [
        {
            image: "/man3.png",
            name: "Nike Air Max",
            price: "$129.99",
            originalPrice: "$199.99",
            discount: "35% OFF",
            color: "from-blue-500 to-cyan-400",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-11/12 mx-auto rounded-2xl min-h-screen relative overflow-hidden discount-banner-bg poppins-font ">
           

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-primary space-y-6 sm:space-y-8"
                    >
                    
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-3xl sm:text-5xl merriweather-font md:text-6xl lg:text-6xl font-extrabold leading-tight"
                        >
                            MEGA
                            <span className="block discount-bg-secondary bg-clip-text text-transparent">
                                Winter SALE
                            </span>
                        </motion.h1>


                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-base sm:text-xl text-gray-300 leading-relaxed merriweather-font"
                        >
                            Up to <span className="font-bold discount-text-primary">50% OFF</span> on premium footwear collection. Limited time offer on all running, casual, and sports shoes.
                        </motion.p>

                        {/* Countdown Timer */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20"
                        >
                            <div className="flex items-center gap-2 sm:gap-3 mb-4">
                                <Clock className="w-4 sm:w-6 h-4 sm:h-6 discount-text-primary" />
                                <span className="font-bold text-sm sm:text-lg">Offer Ends In:</span>
                            </div>
                            <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
                                {Object.entries(timeLeft).map(([key, value]) => (
                                    <div key={key} className="text-center">
                                        <div className="bg-white/20 rounded-xl px-2 sm:px-4 py-2 sm:py-3 min-w-12 sm:min-w-16">
                                            <span className="text-xl sm:text-2xl font-bold block">{value.toString().padStart(2, "0")}</span>
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2 block uppercase">{key}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                      
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap gap-3 sm:gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="Button-bg-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 sm:gap-3 group"
                            >
                                <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5" />
                                Shop Collection
                                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-white/30 text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                            >
                                View Deals
                            </motion.button>
                        </motion.div>

                     
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 text-center"
                        >
                            <div>
                                <div className="text-xl sm:text-2xl font-bold discount-text-primary">2K+</div>
                                <div className="text-xs sm:text-sm discount-text-secondary">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-xl sm:text-2xl font-bold discount-text-primary">50%</div>
                                <div className="text-xs sm:text-sm discount-text-secondary">Average Savings</div>
                            </div>
                            <div>
                                <div className="text-xl sm:text-2xl font-bold discount-text-primary">24/7</div>
                                <div className="text-xs sm:text-sm discount-text-secondary">Support</div>
                            </div>
                        </motion.div>
                    </motion.div>

                   
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center items-center w-full mt-12 lg:mt-0"
                    >
                        <div className="relative w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-[600px]">
                            {featuredShoes.map((shoe, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1 + index * 0.3,
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="relative w-full h-full">
                                        <Image src={shoe.image} alt={shoe.name} fill className="object-contain drop-shadow-2xl" />
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.5 + index * 0.3 }}
                                            className={`absolute top-4 right-4 bg-linear-to-r ${shoe.color} text-primary px-4 py-2 rounded-full font-bold shadow-2xl text-sm sm:text-base`}
                                        >
                                            {shoe.discount}
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.8 + index * 0.3 }}
                                            className="absolute bottom-4 left-0 right-0 text-center text-primary"
                                        >
                                            <h3 className="text-sm sm:text-xl font-bold mb-1">{shoe.name}</h3>
                                            <div className="flex items-center justify-center gap-1 sm:gap-2">
                                                <span className="text-xl sm:text-2xl font-bold discount-text-primary">{shoe.price}</span>
                                                <span className="text-sm sm:text-lg discount-text-secondary line-through">{shoe.originalPrice}</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                      
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute hidden lg:block top-20 -left-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                        >
                            <div className="text-primary text-center">
                                <div className="text-2xl font-bold">🔥</div>
                                <div className="text-sm font-semibold">Hot Deal</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute hidden lg:block bottom-32 -right-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                        >
                            <div className="text-primary text-center">
                                <div className="text-2xl font-bold">⭐</div>
                                <div className="text-sm font-semibold">Top Rated</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

          
        </section>
    );
}
