"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart, Star } from 'lucide-react';

const ReviewCard = ({ review, index }) => {
    const [liked, setLiked] = useState(false);
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
            >
               
                <div className="relative hover:shadow-lg bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating
                                                ? "fill-amber-400 text-amber-400"
                                                : "text-gray-300 dark:text-gray-600"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                    {review.rating}.0
                                </span>
                            </div>
                            <h4 className="font-bold text-gray-900 dark:text-white">{review.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{review.role}</p>
                        </div>
                        {review.verified && (
                            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm">
                                <CheckCircle className="w-4 h-4" />
                                Verified
                            </div>
                        )}
                    </div>

                    {/* Comment */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{review.comment}</p>

                    {/* Purchase Info */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span className="font-medium">Purchased:</span>
                        <span className="text-gray-900 dark:text-white">{review.purchase}</span>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setLiked(!liked)}
                                className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                <Heart className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : ""}`} />
                                <span>{review.likes + (liked ? 1 : 0)}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ReviewCard;
