"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
    Menu,
    Search,
    ShoppingCart,
    User,
    X,
    CircleCheckIcon,
    CircleHelpIcon,
    CircleIcon,
    Navigation,
    Globe,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState("EN");
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleLanguage = () => setLanguage((prev) => (prev === "EN" ? "BN" : "EN"));
    const toggleTheme = () => setIsDarkTheme((prev) => !prev);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setOpen(!open);
    const changeLanguage = (lang) => {
        setLanguage(lang);
        setOpen(false);
    };

   
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <div className="w-full ">
            {/* Top Bar */}
            <div className="hidden w-11/12 mx-auto lg:flex  text-sm">
                <div className="bg-primary text-primary w-1/2 flex items-center justify-between px-8 py-1">
                    <p className="flex items-center gap-2">
                        <span className="font-semibold flex gap-1">
                            <Navigation size={20} /> 7 Days A Week
                        </span>
                        <span>From 9:00 AM To 7:00 PM</span>
                    </p>
                </div>

                <div className="bg-primary text-primary w-1/2 flex items-center justify-end gap-4 py-1 pr-8">
                    <div className="text-sm">
                        Call Us: <span className="font-semibold">610-403-403</span>
                    </div>
                    <div className="relative" ref={dropdownRef}>
                        {/* 🌐 Main Button */}
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center hover-button gap-1 px-3 py-1 text-sm bg-primary transition-colors"
                        >
                           {open ? <ChevronUp size={16} />  : <ChevronDown size={16} />  }  {language === "EN" ? "English" : "বাংলা"}
                        </button>

                        {/* Dropdown Menu */}
                        {open && (
                            <div className="absolute z-100 right-0 mt-2 w-32 bg-primary border rounded-md shadow-lg ">
                                <button
                                    onClick={() => changeLanguage("EN")}
                                    className={`block hover-button w-full text-left px-3 py-2 text-sm hover:bg-primary ${language === "EN" ? "font-semibold bg-primary" : ""
                                        }`}
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => changeLanguage("BN")}
                                    className={`block w-full hover-button text-left px-3 py-2 text-sm  ${language === "BN" ? "font-semibold bg-primary" : ""
                                        }`}
                                >
                                    বাংলা
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        className="flex hover-button items-center gap-1 px-3 py-1 text-sm border rounded-md hover-secondary transition-colors"
                        onClick={toggleTheme}
                    >
                        {isDarkTheme ? "☀️ Light" : "🌙 Dark"}
                    </button>
                </div>
            </div>


            <nav
                className={`w-full  left-0 z-50 transition-all duration-300 ${isSticky ? "fixed top-0 bg-secondary shadow-md py-3" : "relative bg-transparent py-3  shadow-sm"
                    }`}
            >

                <div className={`flex justify-between  items-center ${isSticky ? "px-6" : "px-6 lg:px-16 "}`}>
                    <div className="text-3xl font-extrabold tracking-widest">STEPS</div>

                    <NavigationMenu>
                        <NavigationMenuList className="hidden  lg:flex gap-6 font-bold">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/"
                                                    className="flex flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-4 md:p-6 no-underline outline-none transition-all duration-200 hover:shadow-md"
                                                >
                                                    <div className="mb-2 text-lg font-medium sm:mt-4">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-muted-foreground text-sm leading-tight">
                                                        Beautifully designed components built with Tailwind CSS.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        <li>
                                            <Link href="#" className="block p-2 rounded-md">
                                                Example Component 1
                                            </Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[300px] gap-3 p-3">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link href="#" className="flex items-center gap-2">
                                                    <CircleHelpIcon /> Backlog
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link href="#" className="flex items-center gap-2">
                                                    <CircleIcon /> To Do
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link href="#" className="flex items-center gap-2">
                                                    <CircleCheckIcon /> Done
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="hidden px-4 font-bold py-4 w-[40%] lg:flex nav-bg-base justify-between items-center gap-6 text-sm rounded-lg">
                        <div className="relative flex items-center flex-1">
                            <Search size={18} className="absolute left-3" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-9 pr-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:border-transparent w-full"
                            />
                        </div>

                        <div className="flex gap-6">
                            <button className="flex hover-button items-center gap-1 hover:text-primary transition">
                                <User size={22} /> My Profile
                            </button>
                            <button className="flex hover-button items-center gap-1 hover:text-primary transition">
                                <ShoppingCart size={22} /> Cart(0)
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden hover-button p-4 rounded-md"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-secondary border-t">
                    <div className="border-t px-6 py-3 space-y-3">
                        <button className="flex hover-button items-center gap-1 text-sm hover-button">
                            <Search size={18} /> Search
                        </button>
                        <button className="flex  hover-button items-center gap-1 text-sm hover-button">
                            <User size={18} /> My Profile
                        </button>
                        <button className="flex hover-button items-center gap-1 text-sm hover-button">
                            <ShoppingCart size={18} /> Cart(0)
                        </button>

                        <button
                            className="flex hover-button items-center gap-1 px-3 py-1 text-sm border rounded-md hover-secondary transition-colors"
                            onClick={toggleLanguage}
                        >
                            🌐 {language === "EN" ? "English" : "বাংলা"}
                        </button>

                        <button
                            className="flex hover-button items-center gap-1 px-3 py-1 text-sm border rounded-md hover-secondary transition-colors"
                            onClick={toggleTheme}
                        >
                            {isDarkTheme ? "☀️ Light" : "🌙 Dark"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
