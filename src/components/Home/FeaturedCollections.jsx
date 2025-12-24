"use client";
import Image from "next/image";
import { Flame, Footprints, Shovel, Star, ArrowRight, ArrowLeft, Sparkles, Clock, Users, TrendingUp, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { collections } from "@/server/ShoesCollection";
import Link from "next/link";

export default function FeaturedCollections() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);




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
        <section className="w-full py-24 featured-section-bg relative overflow-hidden poppins-font">


            <div className="max-w-11/12 mx-auto px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >


                    <p className="Discription-text-primary text-sm uppercase tracking-wider mb-2 merriweather-font">Sneakers</p>
                    <h1 className="text-4xl mb-5 font-light Title-text-primary merriweather-font">
                        Featured <span className="font-medium">Collection</span>
                    </h1>


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

                                <div className={`relative primary-card-bg rounded-lg p-6 h-full border border-gray-200/50 overflow-hidden transition-all duration-500 shadow-sm group-hover:scale-103`}>


                                    {item.discount && (
                                        <div className={`absolute top-4 right-4   px-3 py-1 rounded-full text-xs font-bold badge1-text`}>
                                            {item.discount}
                                        </div>
                                    )}


                                    {item.featured && (
                                        <div className="absolute top-4 left-4 bg-amber-200  badge2-bg text-primary px-3 py-1 rounded-full text-xs font-bold z-20 shadow-lg flex items-center gap-1">
                                            <Sparkles className="w-3 h-3" />
                                            Featured
                                        </div>
                                    )}




                                    <div className="relative z-10 mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium Hero-secondary-text">{item.count}</span>

                                        </div>
                                    </div>


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


                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-full`}></div>
                                    </div>


                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2 py-1 bg-blue-200  backdrop-blur-sm text-xs font-medium text-gray-800 rounded-2xl border border-gray-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>


                                    <div className="relative z-10">
                                        <h3 className={`text-xl font-bold mb-2 bg-linear-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                            {item.title}
                                        </h3>
                                        <p className="treanding-primary-text leading-relaxed mb-4 text-sm">
                                            {item.description}
                                        </p>

                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link href={`/Product/${item.id}`}

                                                className={`w-full flex items-center justify-center gap-2 text-sm font-semibold bg-linear-to-r ${item.gradient} text-primary px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                                            >
                                                Explore Collection
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                            </Link>
                                        </motion.div>

                                    </div>


                                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">

                                    </div>
                                </div>


                                <div className={`absolute inset-0 bg-linear-to-r ${item.gradient} rounded-3xl blur-md opacity-0 group-hover:opacity-30 -z-10 transition-opacity duration-500`}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Slider Controls */}

                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between items-center  z-20">

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={prevSlide}
                        onMouseEnter={() => setAutoPlay(false)}
                        onMouseLeave={() => setAutoPlay(true)}
                        className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 group"
                    >
                        <ArrowLeft className="w-5 h-5 treanding-primary-text group-hover:text-orange-500 transition-colors" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextSlide}
                        onMouseEnter={() => setAutoPlay(false)}
                        onMouseLeave={() => setAutoPlay(true)}
                        className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 group"
                    >
                        <ArrowRight className="w-5 h-5 treanding-primary-text group-hover:text-orange-500 transition-colors" />
                    </motion.button>
                </div>

                {/* Dots Underneath – kept same */}
                <div className="flex justify-center items-center gap-2 mt-3 mb-8">
                    {collections.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-orange-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>



            </div>
        </section>
    );
}