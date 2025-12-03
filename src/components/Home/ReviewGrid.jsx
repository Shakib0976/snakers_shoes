"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Zap, CheckCircle, TrendingUp, Heart, Shield } from "lucide-react";
import ReviewCard from "../ui/ReviewCard";

const testimonials = [
    {
        id: 1,
        name: "Marcus T.",
        role: "Sneaker Collector",
        rating: 5,
        comment: "The quality on these Jordans is insane! Perfect for my collection.",
        purchase: "Air Jordan 1 Retro",
        verified: true,
        date: "2 weeks ago",
        likes: 42
    },
    {
        id: 2,
        name: "Sarah L.",
        role: "Fitness Enthusiast",
        rating: 5,
        comment: "Best running shoes I've ever owned. Lightweight and super comfortable!",
        purchase: "Nike Vaporfly 3",
        verified: true,
        date: "1 month ago",
        likes: 56
    },
    {
        id: 3,
        name: "Alex K.",
        role: "Style Influencer",
        rating: 4,
        comment: "Love the colorway! Gets compliments every time I wear them.",
        purchase: "New Balance 990v6",
        verified: true,
        date: "3 days ago",
        likes: 89
    },
    {
        id: 4,
        name: "Jamie R.",
        role: "Basketball Player",
        rating: 5,
        comment: "Perfect grip on court. My performance has definitely improved.",
        purchase: "KD 16 EP",
        verified: true,
        date: "1 week ago",
        likes: 31
    },
    {
        id: 5,
        name: "Taylor M.",
        role: "Daily Walker",
        rating: 5,
        comment: "Worth every penny. All-day comfort is unmatched.",
        purchase: "Hoka Clifton 9",
        verified: true,
        date: "2 months ago",
        likes: 67
    },
    {
        id: 6,
        name: "Jordan P.",
        role: "Sneakerhead",
        rating: 4,
        comment: "Fast shipping and authentic products. Will shop again!",
        purchase: "Yeezy 350 V2",
        verified: true,
        date: "5 days ago",
        likes: 44
    }
];
const stats = [
    { label: "Average Rating", value: "4.8", icon: Star, color: "text-amber-500" },
    { label: "Verified Reviews", value: "2.4K+", icon: Shield, color: "text-emerald-500" },
    { label: "Happy Customers", value: "10K+", icon: Heart, color: "text-red-500" },
    { label: "Fast Shipping", value: "24h", icon: Zap, color: "text-blue-500" }
];





const ReviewsGrid = () => {
    return (
        <section className="relative max-w-11/12 mx-auto px-4 py-16">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-br from-orange-50/20 to-red-50/20  -z-10" />

            {/* Header */}
            <div className="text-center mb-12">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    <span className="title_text-gradient bg-clip-text text-transparent">
                        Real Reviews
                    </span>
                    <br />
                    <span className="tranding-secondry-text ">From Real Customers</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-600  max-w-2xl mx-auto"
                >
                    Don&apos;t just take our word for it. See what sneaker enthusiasts are saying about their purchases.
                </motion.p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-linear-to-br from-white to-gray-50 rounded-2xl p-6 text-center shadow-sm border border-gray-100 "
                    >
                        <div className={`${stat.color} mb-2 flex justify-center`}>
                            <stat.icon className="w-8 h-8" />
                        </div>
                        <div className="text-3xl font-bold tranding-secondry-text  mb-1">
                            {stat.value}
                        </div>
                        <div className="text-sm treanding-base-text ">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((review, index) => (
                    <ReviewCard key={review.id} review={review} index={index} />
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-12"
            >
                <button className="group relative px-8 py-4 rounded-2xl tranding-secondry-text font-bold text-lg   transition-all duration-300 hover:scale-105">
                    <span className="relative z-10  border-b-2 pb-2"> {`< Read All Reviews >`}</span>
                  
                </button>
            </motion.div>
        </section>
    );
};

export default ReviewsGrid;