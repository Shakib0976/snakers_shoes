// app/product/[id]/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, Heart, Share2, Truck, RefreshCw, Shield } from 'lucide-react';
import Link from 'next/link';

const ProductDetailsPage = ({ params }) => {

    const { id } = React.use(params);
    const [selectedSize, setSelectedSize] = useState('38');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const product = {
        id,
        name: "White Viscose Straight Salwar Kameez",
        price: "3,691",
        originalPrice: "5,999",
        discount: "-38%",
        sku: "SKD77586",
        vat: "VAT included",
        description: "Elegant white viscose straight salwar kameez with intricate embroidery work. Perfect for festive occasions and weddings.",
        features: [
            "100% Pure Viscose",
            "Hand Embroidered",
            "Machine Washable",
            "Premium Quality Stitching"
        ],
        sizes: ['34', '36', '38', '40', '42'],
        colors: ['#FFFFFF', '#F5F5F5', '#E8E8E8'],
        images: [
            '/man2.png',
            '/man3.png',
            '/man4.png',
            '/man5.png'
        ],
        deliveryInfo: "FREE DELIVERY on orders above TK. 8000",
        returnPolicy: "15 Days Return Policy",
        reviews: {
            rating: 4.5,
            count: 128
        }
    };

    const productImages = [
        { id: 1, src: '/man2.png', alt: 'Front View' },
        { id: 2, src: '/man3.png', alt: 'Side View' },
        { id: 3, src: '/man4.png', alt: 'Back View' },
        { id: 4, src: '/man5.png', alt: 'Detail View' }
    ];


    return (
        <div className="min-h-screen bg-white w-11/12 mx-auto">
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center text-sm text-gray-600 mb-6">
                    <Link href="/" className="hover:text-gray-900">Home</Link>
                    <ChevronLeft className="w-4 h-4 mx-2" />
                    <span className="text-gray-900 font-medium">White Viscose Straight</span>
                </nav>
            </div>

            {/* Main Product Section */}
            <div className="container mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="md:flex md:gap-4 ">
                        {/* Thumbnail Images */}
                        <div className="flex md:flex-col flex-row gap-3">
                            {productImages.map((image, index) => (
                                <button
                                    key={image.id}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-black' : 'border-gray-200'
                                        }`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        sizes="80px"
                                    />
                                </button>
                            ))}
                        </div>
                        {/* Main Image */}
                        <div className="relative h-[500px] bg-gray-50 rounded-lg overflow-hidden mb-4 flex-1">
                            <Image
                                src={productImages[selectedImage].src}
                                alt={productImages[selectedImage].alt}
                                fill
                                className="object-contain p-8"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />


                            <div className="absolute top-4 right-4">
                                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    -38%
                                </span>
                            </div>
                        </div>
                    </div>


                    {/* Product Details */}
                    <div>

                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                {product.name}
                            </h1>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500 text-sm">SKU: {product.sku}</span>
                                <div className="flex items-center">
                                    <div className="flex text-amber-400 mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(product.reviews.rating) ? 'fill-current' : 'text-gray-300'}`}
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600">({product.reviews.count} reviews)</span>
                                </div>
                            </div>
                        </div>

                        {/* Price Section */}
                        <div className="mb-6">
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="text-4xl font-bold text-gray-900">TK. {product.price}</span>
                                <span className="text-lg text-gray-400 line-through">TK. {product.originalPrice}</span>
                                <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
                                    {product.discount} OFF
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600 text-sm font-medium">{product.vat}</span>
                                <span className="text-gray-400 text-sm">•</span>
                                <span className="text-gray-600 text-sm">Inclusive of all taxes</span>
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-gray-900">Size</h3>
                                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
                                    <span>Size Chart</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex gap-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-14 h-14 flex items-center justify-center border-2 rounded-lg font-medium transition-all ${selectedSize === size
                                            ? 'border-black bg-black text-white'
                                            : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            {/* Color Section Images */}
                            <h3 className="font-semibold text-gray-900 mt-2">Color</h3>
                            <div className="flex  my-2 flex-row gap-3">

                                {productImages.map((image, index) => (
                                    <button
                                        key={image.id}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-15 h-15 rounded-full overflow-hidden border-2 ${selectedImage === index ? 'border-black' : 'border-gray-200'
                                            }`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity and Actions */}
                        <div className="mb-8">
                            <div className="flex flex-col md:flex-row gap-4 w-full">

                                <div className="flex w-full md:w-auto items-center  justify-center border border-gray-300 rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 h-12 flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <span className="text-xl">-</span>
                                    </button>

                                    <span className="w-12 h-12 flex items-center justify-center font-medium">
                                        {quantity}
                                    </span>

                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <span className="text-xl">+</span>
                                    </button>
                                </div>


                                <button className="w-full md:flex-1 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 h-12">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add to Cart
                                </button>


                                <button className="w-full md:w-auto px-6 h-12 border-2 border-black rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                    Buy Now
                                </button>

                            </div>

                        </div>


                        <div className="mb-8 p-4 bg-blue-50 rounded-lg">
                            <div className="flex items-center gap-3 mb-2">
                                <Truck className="w-5 h-5 text-blue-600" />
                                <span className="font-medium text-blue-900">{product.deliveryInfo}</span>
                            </div>
                            <div className="text-sm text-blue-700">
                                <p className="mb-1">✓ Free shipping across Bangladesh</p>
                                <p>✓ Estimated delivery: 3-5 business days</p>
                            </div>
                        </div>


                        <div className="mb-8">
                            <button className="w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Check Store availability
                            </button>
                        </div>


                        <div className="mb-8">
                            <h3 className="font-semibold text-gray-900 mb-3">Product Info</h3>
                            <div className="space-y-4">
                                <div className="border-b pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2">Product details</h4>
                                    <p className="text-gray-600 text-sm">{product.description}</p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Features</h4>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="text-xs text-gray-500 text-center">
                            <p>Product color may slightly vary, depending on your  screen resolution</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;