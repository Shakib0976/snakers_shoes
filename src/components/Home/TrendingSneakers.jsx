"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, TrendingUp, Trophy } from 'lucide-react';
import { trendingSneakers } from '@/server/PremiumSnakers';

const TrendingSneakers = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

 

  const bestSellers = trendingSneakers.filter(item =>
    item.badge === "BEST SELLER" || item.rating >= 4.8
  );

  const newArrivals = trendingSneakers.filter(item =>
    item.badge === "NEW" || item.id >= 5
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const getProductsByTab = () => {
    switch (activeTab) {
      case 'trending': return trendingSneakers;
      case 'bestsellers': return bestSellers;
      case 'new': return newArrivals;
      default: return trendingSneakers;
    }
  };

  const ProductCard = ({ product, index }) => (
    <div
      className="group  relative Nav-bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 100}ms both` : 'none'
      }}
    >
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${product.badge === "BEST SELLER" ? "badge1-bg  text-primary" :
          product.badge === "TRENDING" ? "badge2-bg text-primary" :
            product.badge === "HOT" ? "badge3-bg text-primary" :
              product.badge === "NEW" ? "badge4-bg text-primary" :
                "badge5-bg  text-primary"
          }`}>
          {product.badge}
        </span>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <button
          type="button"
          className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-primary transition-all duration-300 group/heart"
          aria-label="Add to wishlist"
        >
          <svg className="w-4 h-4 group-hover/heart:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <div className="relative h-64 img-primary-bg overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold treanding-base-text uppercase tracking-wide">
            {product.brand}
          </span>
          <div className="flex items-center">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs treanding-base-text ml-1">({product.reviews})</span>
          </div>
        </div>

        <h3 className="font-semibold tranding-secondry-text  mb-2 line-clamp-2 leading-tight group-hover:text-gray-700 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tranding-secondry-text ">{product.price}</span>
            <span className="text-sm treanding-base-text line-through">{product.originalPrice}</span>
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
              {product.discount}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1">
            {product.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="w-4 h-4 rounded-full border border-gray-300 shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span className="text-xs treanding-base-text">{product.sizes.length} sizes</span>
        </div>

        <div className="flex space-x-2">
          <Link href={`/Product/${product.id}`}
            className="flex-1 bg-gray-900 text-primary py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Add to Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="relative w-11/12 mx-auto pt-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
        
          <h2 className="text-5xl font-bold tranding-secondry-text  mb-6">
            Premium <span className=" title_text-gradient bg-clip-text text-transparent">Sneaker Collection</span>
          </h2>

        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className=" p-2 ">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0">
              {[
                {
                  id: 'trending',
                  label: 'Trending Now',
                  count: trendingSneakers.length,
                  icon: <TrendingUp className="w-5 h-5" />
                },
                {
                  id: 'bestsellers',
                  label: 'Best Sellers',
                  count: bestSellers.length,
                  icon: <Trophy className="w-5 h-5" />
                },
                {
                  id: 'new',
                  label: 'New Arrivals',
                  count: newArrivals.length,
                  icon: <Sparkles className="w-5 h-5" />
                }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-semibold transition-all duration-300 relative flex items-center justify-center space-x-2 ${activeTab === tab.id
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-500 hover:text-black'
                    }`}
                >
                  <div className="flex items-center space-x-2">
                    {tab.icon}
                    <span>{tab.label}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${activeTab === tab.id ? 'bg-gray-100 text-gray-700' : 'bg-gray-200 text-gray-600'
                    }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {getProductsByTab().map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
};

export default TrendingSneakers;