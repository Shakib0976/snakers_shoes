"use client"

import { Facebook, Heart, Instagram, Mail, MapPin, Phone, X, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    const socialLinks = [
        {
            name: "Facebook",
            icon: <Facebook className="w-5 h-5" />,
            url: "https://facebook.com",
            color: "hover:text-blue-600"
        },
        {
            name: "X",
            icon: <X className="w-5 h-5" />,
            url: "https://x.com",
            color: "hover:text-black dark:hover:text-gray-300"
        },
        {
            name: "Instagram",
            icon: <Instagram className="w-5 h-5" />,
            url: "https://instagram.com",
            color: "hover:text-pink-600"
        },
        {
            name: "YouTube",
            icon: <Youtube className="w-5 h-5" />,
            url: "https://youtube.com",
            color: "hover:text-red-600"
        }
    ];

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Component", path: "/BrowseProperties" },
        { name: "More", path: "/become-host" },
    ];
    return (
        <div>
            <div className="border-t-2 footer-border   ">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-3 mb-6">

                                <div>

                                    <h1 className="text-2xl font-bold">
                                        <span className="bg-clip-text ">
                                            STEPS
                                        </span>
                                    </h1>
                                    <p className="text-sm footer-text-primary">
                                        SOLE – Sneakers Simplified
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="footer-text-primary  leading-relaxed mb-6">
                                    Minimal design. Maximum comfort. Sneakers made for everyday life with timeless style.
                                </p>

                                {/* Social Media Links */}
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-10 h-10 bg-secondary  border-gray-200  rounded-xl flex items-center justify-center footer-text-primary transition-all duration-300 hover:border-emerald-300 hover:shadow-md ${social.color}`}
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-1">
                            <div>
                                <h3 className="text-lg font-semibold footer-text-secondary  mb-6">
                                    Quick Links
                                </h3>
                                <ul className="space-y-3">
                                    {quickLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.path}
                                                className="footer-text-primary  hover:text-emerald-600  transition-colors duration-300 flex items-center gap-2 group"
                                            >
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <div>
                                <h3 className="text-lg font-semibold footer-text-secondary  mb-6">
                                    Contact Info
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Address */}
                                    <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl border border-gray-200  hover:border-emerald-200  transition-all duration-300">
                                        <div className="w-12 h-12 bg-linear-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold footer-text-secondary  mb-1">
                                                Our Location
                                            </h4>
                                            <p className="footer-text-primary  text-sm leading-relaxed">
                                                Sylhet, Bangladesh<br />
                                                Merrick Way, FL 12345
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl border border-gray-200  hover:border-emerald-200  transition-all duration-300">
                                        <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 " />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold footer-text-secondary  mb-1">
                                                Phone Number
                                            </h4>
                                            <a
                                                href="tel:+8801902042884"
                                                className="footer-text-primary  text-sm hover:text-emerald-600 transition-colors duration-300"
                                            >
                                                +880 1902-042884
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4 p-4 bg-white/50  rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300">
                                        <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 " />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold footer-text-secondary  mb-1">
                                                Email Address
                                            </h4>
                                            <a
                                                href="mailto:endgameprogramm10@gmail.com"
                                                className="footer-text-primary text-sm hover:text-emerald-600  transition-colors duration-300"
                                            >
                                                support@ezrent.com                    </a>
                                        </div>
                                    </div>

                                    {/* Business Hours */}
                                    <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl border border-gray-200  hover:border-emerald-200  transition-all duration-300">
                                        <div className="w-12 h-12 bg-linear-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                                                <div className="w-3 h-3 bg-amber-500 rounded-full" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold footer-text-secondary mb-1">
                                                Business Hours
                                            </h4>
                                            <p className="footer-text-primary  text-sm leading-relaxed">
                                                Mon - Sun: 24/7<br />
                                                Support Available
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t  ">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                            <div className="footer-text-primary ">
                                © {new Date().getFullYear()} STEPS. All rights reserved.
                            </div>

                            <div className="flex items-center gap-1 footer-text-primary">
                                Made with
                                <Heart className="w-4 h-4 text-red-500 fill-current" />
                                by{" "}
                                <a
                                    href="#"
                                    className="text-emerald-600 font-medium hover:underline transition-colors duration-300"
                                >
                                    Md . Shakib Khan 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;