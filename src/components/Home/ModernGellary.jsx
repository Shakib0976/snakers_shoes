"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ZoomIn,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { sneakersGallery } from "@/server/SnakersGellary";


const SneakerMosaicGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    // document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % sneakersGallery.length;
    setSelectedImage(sneakersGallery[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + sneakersGallery.length) % sneakersGallery.length;
    setSelectedImage(sneakersGallery[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedImages(prev =>
      prev.includes(id)
        ? prev.filter(imgId => imgId !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <section className="relative max-w-11/12 mx-auto px-4 py-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tr from-orange-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="text-center mb-12">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sneaker Gallery
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore our curated collection through stunning visuals
          </motion.p>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[300px] gap-4">
          {sneakersGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${item.className}`}
              onClick={() => openImage(item, index)}
            >

              <div className="relative w-full h-full bg-gray-100 dark:bg-gray-800">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />



                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


                {item.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}


                <button
                  onClick={(e) => toggleLike(item.id, e)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <Heart className={`w-5 h-5 ${likedImages.includes(item.id)
                    ? "fill-red-500 text-red-500"
                    : "text-gray-600 dark:text-gray-400"
                    }`} />
                </button>


                <div className="absolute bottom-0 left-0 right-0  transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-linear-to-t from-black/80 to-transparent backdrop-blur-sm  px-4 py-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-white/80">{item.brand}</span>
                      <span className="text-xs text-white/60">{item.likes + (likedImages.includes(item.id) ? 1 : 0)} likes</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white line-clamp-1">{item.alt}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white/90">
                        {item.category}
                      </span>
                      <span className="text-xs text-white/70">{item.colorway}</span>
                    </div>
                  </div>
                </div>


                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />


            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >


              <button
                onClick={closeImage}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 backdrop-blur-sm flex items-center justify-center text-black hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>


              <div className="flex flex-col md:flex-row h-full">
                <div className="flex-1 relative min-h-[330px] md:min-h-[80vh] bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover w-full h-full"
                  />

                  <button
                    onClick={(e) => toggleLike(selectedImage.id, e)}
                    className="absolute top-4 left-4 p-3 rounded-full bg-gray-200 dark:bg-gray-900/80 backdrop-blur-sm hover:scale-110 transition-transform"
                  >
                    <Heart
                      className={`w-6 h-6 ${likedImages.includes(selectedImage.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600 dark:text-gray-400"
                        }`}
                    />
                  </button>
                </div>



                <div className="md:w-96 p-8 overflow-y-auto">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {selectedImage.brand}
                      </span>
                      {selectedImage.featured && (
                        <span className="px-2 py-1 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white text-xs">
                          Featured
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedImage.alt}
                    </h2>

                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{selectedImage.category}</span>
                      <span>•</span>
                      <span>Color: {selectedImage.colorway}</span>
                      <span>•</span>
                      <span>{selectedImage.likes + (likedImages.includes(selectedImage.id) ? 1 : 0)} likes</span>
                    </div>
                  </div>


                  <div className="mb-8">
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedImage.description}
                    </p>
                  </div>


                  <div className="space-y-3">
                    <button className="w-full py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity">
                      View Product Details
                    </button>
                    <button className="w-full py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:border-gray-300 dark:hover:border-gray-600 transition-colors flex items-center justify-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>

                  {/* Gallery Navigation */}
                  <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                      Gallery Navigation
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {sneakersGallery.slice(0, 6).map((img) => (
                        <button
                          key={img.id}
                          onClick={() => {
                            const index = sneakersGallery.findIndex(i => i.id === img.id);
                            setSelectedImage(img);
                            setCurrentIndex(index);
                          }}
                          className={`aspect-square  overflow-hidden border-2 ${selectedImage.id === img.id
                            ? 'border-blue-500'
                            : 'border-transparent'
                            }`}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={600}
                            height={600}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
};

export default SneakerMosaicGallery;