"use client";
import Image from "next/image";
import { Plus, ShoppingCart, Play, Eye, Shuffle, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { shoes } from "@/server/Shoes";

export default function HeroSection() {



    // shoes slider 
    const [current, setCurrent] = useState(0);

    // Auto-slide every 4s
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % shoes.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const shoe = shoes[current];

    return (
        <div className="bg-secondary">
            <section className="relative bg-teal  w-11/12 pt-5 lg:pt-10  mx-auto  overflow-hidden">
                {/* HEADER TEXT */}
                <div className="">
                    <div className="text-center">
                        <motion.h1
                            className="shine-text text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] font-extrabold leading-none tracking-tight"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            Trendmark
                        </motion.h1>



                        <p className="Hero-title-text sm:text-lg  font-medium mt-2 ">
                            Sneakers 2023 Limited Edition
                        </p>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="flex flex-col lg:flex-row justify-between lg:-mt-20 items-center px-4 sm:px-8 lg:px-12 lg:py-12 sm:pb-16 gap-10 sm:gap-16">
                        {/* RIGHT SIDE IMAGE + TAGS */}
                        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-[60vh] mx-auto flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={shoe?.id}
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={shoe?.image}
                                        alt={shoe?.name}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Shoe Parts */}
                            {shoe?.parts.map((part, i) => (
                                <motion.div
                                    key={part.title}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="absolute z-50 hidden lg:flex flex-col items-center"
                                    style={{
                                        top: part.top,
                                        bottom: part.bottom,
                                        left: part.left,
                                    }}
                                >
                                    <div className="bg-secondary rounded-full shadow-lg p-1.5">
                                        <Plus size={14} className="text-secondary" />
                                    </div>

                                    {/* Card with full-width hover button */}
                                    <div className="relative group bg-secondary shadow-lg rounded-xl mt-2 w-32 sm:w-35 overflow-hidden transition-all">
                                        {/* Content */}
                                        <div className="p-2 flex  items-center justify-between">
                                            <Image
                                                src={part.img}
                                                alt={part.title}
                                                width={40}
                                                height={40}
                                                className="rounded-lg"
                                            />
                                            <div>
                                                <p className="text-xs sm:text-sm font-semibold">{shoe.name}</p>
                                                <p className="text-[10px] sm:text-xs Hero-text-primary">{part.title}</p>
                                            </div>
                                        </div>


                                        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="w-full bg-primary text-primary py-2 text-xs sm:text-sm font-semibold uppercase">
                                                Shop Now
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                        </div>

                        {/* LEFT SIDE TEXT */}
                        <div className="w-full  lg:w-1/2 relative z-10 lg:-mb-35 hidden lg:block">
                            <div className="bg-primary rounded-xl border text-primary px-6 sm:px-8 py-5 flex flex-col justify-between items-start gap-8 lg:-mr-12  shadow-lg">
                                <div className="w-full space-y-2">
                                    <motion.div
                                        key={shoe?.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <div className="flex items-baseline gap-3">
                                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                                                {shoe?.name}
                                            </h1>
                                            <span className="text-xs Hero-secondary-text bg-opacity-10 px-2 py-1 rounded-full border border-opacity-20">
                                                2023
                                            </span>
                                        </div>
                                    </motion.div>

                                    <div className="space-y-4">
                                        <p className="uppercase text-xs Hero-secondary-text tracking-wider font-semibold">
                                            {shoe?.trademark}
                                        </p>
                                        <p className="text-sm Hero-secondary-text leading-relaxed border-l-2 border-opacity-30 pl-4">
                                            {shoe?.description}
                                        </p>
                                        <button className="uppercase text-xs font-medium hover:text-gray-300 transition-colors duration-200 flex items-center gap-1 group">
                                            Discover More
                                            <span className="transform group-hover:translate-x-1 transition-transform duration-200">›</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 Hero-secondary-text text-lg w-full justify-between border-t border-opacity-20 pt-4">
                                    <span className="text-sm font-medium">Actions</span>


                                    <div className="flex gap-2">
                                        <button className="group relative p-3 rounded-xl Hero-secondary-button backdrop-blur-sm   transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,50,0.5)] hover:scale-105 shadow-lg ">
                                            <Heart className="w-5 h-5 Hero-hover-text  transition-colors duration-300" />
                                            <div className="absolute inset-0 rounded-xl to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12"></div>
                                        </button>
                                        <button className="group relative p-3 rounded-xl Hero-secondary-button backdrop-blur-sm  hover:shadow-[0_0_20px_rgba(255,100,50,0.5)] transition-all duration-300  hover:scale-105 shadow-lg ">
                                            <Shuffle className="w-5 h-5 Hero-hover-text  transition-colors duration-300" />
                                            <div className="absolute inset-0 rounded-xl  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12"></div>
                                        </button>
                                        <button className="group relative p-3 rounded-xl Hero-secondary-button backdrop-blur-sm   transition-all duration-300  hover:scale-105 shadow-lg ">
                                            <Eye className="w-5 h-5 Hero-hover-text hover:shadow-[0_0_20px_rgba(255,100,50,0.5)]  transition-colors duration-300" />
                                            <div className="absolute inset-0 rounded-xl bg--to-r from-transparent hover:shadow-[0_0_20px_rgba(255,100,50,0.5)]  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>

    );
}
