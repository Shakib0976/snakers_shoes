"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Search,
    ShoppingCart,
    Truck,
    CreditCard,
    ShieldCheck,
    RefreshCw,
    Ruler,
} from "lucide-react";
import StepCard from "../ui/StepCard";

const MotionDiv = motion.div;
const MotionSection = motion.section;

// STYLE VARIANTS
const styleVariants = {
    modern: {
        card: "bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-xl",
        header: "text-4xl lg:text-5xl font-extrabold",
        accent: "from-red-500 to-orange-500 dark:from-red-400 dark:to-orange-400"
    },
   
};

// SNEAKER STEPS DATA
const sneakerSteps = [
    {
        number: "01",
        icon: <Search className="w-6 h-6" />,
        title: "Find Your Style",
        description: "Browse our curated collection of premium sneakers from top brands and limited editions.",
        features: [
            "Filter by brand, size & color",
            "View 360° product images",
            "Check real-time availability",
            "Read authentic reviews"
        ],
        linear: "from-blue-500 to-cyan-500",
        illustration: (
            <div className="flex items-center justify-center space-x-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-400 to-cyan-300"></div>
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-cyan-400"></div>
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-600 to-cyan-500"></div>
            </div>
        )
    },
    {
        number: "02",
        icon: <Ruler className="w-6 h-6" />,
        title: "Perfect Fit",
        description: "Use our size guide and fit technology to ensure your sneakers feel just right Return if doesn't fit.",
        features: [
            "Interactive size guide",
            "Fit recommendations",
            "Width & arch support info",
            "Return if doesn't fit"
        ],
        linear: "from-emerald-500 to-green-500",
        illustration: (
            <div className="flex items-center justify-center mt-4">
                <div className="relative w-16 h-8">
                    <div className="absolute inset-0 bg-linear-to-r from-emerald-400 to-green-400 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-secondary rounded-full -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-secondary rounded-full -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-secondary rounded-full -translate-y-1/2"></div>
                </div>
            </div>
        )
    },
    {
        number: "03",
        icon: <ShoppingCart className="w-6 h-6" />,
        title: "Secure Checkout",
        description: "Complete your purchase with multiple payment options and buyer protection.",
        features: [
            "Multiple payment methods",
            "SSL encrypted checkout",
            "Price match guarantee",
            "Order confirmation"
        ],
        linear: "from-amber-500 to-orange-500",
        illustration: (
            <div className="flex items-center justify-center space-x-2 mt-4">
                <CreditCard className="w-6 h-6 ilustaration-text-primary" />
                <ShieldCheck className="w-6 h-6 ilustaration-text-primary" />
                <RefreshCw className="w-6 h-6 ilustaration-text-primary" />
            </div>
        )
    },
    {
        number: "04",
        icon: <Truck className="w-6 h-6" />,
        title: "Fast Delivery",
        description: "Get your sneakers delivered quickly with real-time tracking and premium packaging.",
        features: [
            "Free shipping over $100",
            "Express delivery options",
            "Real-time order tracking",
            "Sneaker-safe packaging"
        ],
        linear: "from-purple-500 to-pink-500",
        illustration: (
            <div className="flex items-center justify-center mt-4">
                <div className="relative w-20 h-8">
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-purple-400 to-pink-400"></div>
                    <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-linear-to-br from-purple-500 to-pink-500 rounded-full -translate-y-1/2 animate-pulse"></div>
                </div>
            </div>
        )
    }
];

const HowtoBooking = ({ variant = "modern" }) => {
    const styles = styleVariants[variant];
    
    return (
        <MotionSection
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-7xl mx-auto px-4 py-16 lg:py-20"
        >

            <div className="relative text-center mb-16">
                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl title-bg-gradient backdrop-blur-sm border border-gray-200  shadow-sm mb-6"
                >
                    <div className="w-2 h-2  text-primary rounded-full animate-pulse" />
                    <span className="text-sm  font-semibold text-primary">
                        Simple {sneakerSteps.length}-Step Process
                    </span>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h2 className={`${styles.header} tracking-tight mb-4`}>
                        <span className={`bg-clip-text text-transparent title_text-gradient`}>
                            How to Get Your Sneakers
                        </span>
                    </h2>

                    <MotionDiv
                        initial={{ width: 0 }}
                        whileInView={{ width: 120 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`h-1.5 title_text-gradient rounded-full mx-auto mb-4`}
                    />
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-lg lg:text-xl treanding-primary-text  max-w-2xl mx-auto leading-relaxed">
                        From browsing to doorstep, getting your perfect pair has never been easier. 
                        Follow these simple steps to own your dream sneakers.
                    </p>
                </MotionDiv>
            </div>

            <div className="relative">
                <div className={`grid grid-cols-1  ${
                    sneakerSteps.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
                } gap-8 lg:gap-8`}>
                    {sneakerSteps.map((step, index) => (
                        <StepCard
                            key={step.number}
                            step={step}
                            index={index}
                            totalSteps={sneakerSteps.length}
                            variant={variant}
                        />
                    ))}
                </div>
            </div>

         

          
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                <div className="flex items-center gap-4 p-4 bg-white/50  rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                        <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-bold tranding-secondry-text ">Free Shipping</h4>
                        <p className="text-sm treanding-primary-text ">On orders over $100</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/50  rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                        <RefreshCw className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-bold tranding-secondry-text ">30-Day Returns</h4>
                        <p className="text-sm treanding-primary-text ">Easy return policy</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-bold tranding-secondry-text ">Authenticity Guaranteed</h4>
                        <p className="text-sm treanding-primary-text ">100% verified sneakers</p>
                    </div>
                </div>
            </MotionDiv>
        </MotionSection>
    );
};


export default HowtoBooking;