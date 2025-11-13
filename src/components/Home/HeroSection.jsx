"use client";
import Image from "next/image";
import { Plus, ShoppingCart, Play } from "lucide-react";

export default function HeroSection() {


    const trendmark = [
        {
            id: "01",
            name: "Meteor Lace-Up Running Shoes",
            color: "text-blue-500 hover:underline",
        },
        {
            id: "02",
            name: "Laced Joggers for Men",
            color: "text-gray-400",
        },
        {
            id: "03",
            name: "Barley Textured Panelled Shoes",
            color: "text-gray-400",
        },
        {
            id: "04",
            name: "Omax Lace-Up Sports Shoes",
            color: "text-gray-400",
        },
    ];

    return (
        <section className="relative w-11/12 pt-20 mx-auto bg-secondary overflow-hidden">
            {/* HEADER TEXT */}
            <div className="text-center px-4">
                <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] font-extrabold leading-none tracking-tight">
                    Trendmark
                </h1>
                <p className="text-base sm:text-lg text-gray-600 font-medium mt-2">
                    Sneakers 2023 Limited Edition
                </p>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-12 py-12 sm:py-16 gap-10 sm:gap-16">
                {/* RIGHT SIDE IMAGE + TAGS */}
                <div className="relative w-full lg:w-1/2 flex justify-center items-center">
                    {/* Curved orange line */}
                    <svg
                        className="absolute bottom-0 left-0 right-0 mx-auto w-[90%] max-w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] pointer-events-none"
                        viewBox="0 0 800 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 300 C300 100, 500 500, 790 300"
                            stroke="#ff7849"
                            strokeWidth="1"
                            fill="transparent"
                        />
                    </svg>

                    {/* Shoe Image */}
                    <div className="h-[50vh] flex items-center justify-center">
                        <Image
                            src="/man.png"
                            alt="Classic 2.5 Edge Shoes"
                            width={1800}
                            height={1200}
                            priority
                            className="w-full h-full object-cover max-w-[1800px] rounded-2xl"
                        />
                    </div>



                    {/* Marker 1 */}
                    <div className="absolute z-100 top-[15%] sm:top-[20%] -left-[8%] sm:-left-[10%] flex flex-col items-center">
                        <div className="bg-secondary rounded-full shadow-lg p-1.5">
                            <Plus size={14} className="" />
                        </div>
                        <div className="bg-secondary shadow-lg rounded-xl mt-2 w-32 sm:w-40 md:w-52 p-2 flex gap-2 items-center">
                            <Image
                                src="/shoe.png"
                                alt="Heel Part"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                            <div>
                                <p className="text-xs sm:text-sm font-semibold">
                                    Classic 2.5 Edge Shoes
                                </p>
                                <p className="text-[10px] sm:text-xs text-gray-500">Heel part</p>
                            </div>
                        </div>
                    </div>

                    {/* Marker 2 */}
                    <div className="absolute z-100 top-[28%] left-[30%] flex flex-col items-center">
                        <div className="bg-secondary rounded-full shadow-lg p-1.5">
                            <Plus size={14} className="text-black" />
                        </div>
                        <div className="bg-secondary shadow-lg rounded-xl mt-2 w-32 sm:w-40 md:w-52 p-2 flex gap-2 items-center">
                            <Image
                                src="/shoe.png"
                                alt="Shoe lace Part"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                            <div>
                                <p className="text-xs sm:text-sm font-semibold">
                                    Classic 2.5 Edge Shoes
                                </p>
                                <p className="text-[10px] sm:text-xs text-gray-500">
                                    Shoe lace Part
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Marker 3 */}
                    <div className="absolute z-100 bottom-[10%] left-[45%] sm:left-[50%] flex flex-col items-center">
                        <div className="bg-secondary rounded-full shadow-lg p-1.5">
                            <Plus size={14} className="" />
                        </div>
                        <div className="bg-secondary shadow-lg rounded-xl mt-2 w-32 sm:w-40 md:w-52 p-2 flex gap-2 items-center">
                            <Image
                                src="/shoe.png"
                                alt="Toe cap Part"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                            <div>
                                <p className="text-xs sm:text-sm font-semibold">
                                    Classic 2.5 Edge Shoes
                                </p>
                                <p className="text-[10px] sm:text-xs text-gray-500">
                                    Toe cap Part
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LEFT SIDE TEXT */}
                <div className="w-full lg:w-1/2 relative z-10">
                    <div className="bg-primary text-primary px-6 sm:px-8 py-8 sm:py-10 flex flex-col justify-between items-start gap-6 lg:-mr-12 rounded-2xl lg:rounded-none">
                        <div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold">
                                Classic 2.5 Edge Shoes
                            </h2>
                            <p className="uppercase text-xs text-gray-400 tracking-wide mt-1">
                                Sneakers 2023 Limited Edition
                            </p>
                            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                                The InstaPump Fury was released in 1994. The shoe was lace-less
                                and featured Reebok’s pump technology, a reduced midsole,
                                Hexalite cushioning and a fully synthetic...
                            </p>
                            <button className="uppercase text-xs mt-3 underline hover:text-gray-300 transition">
                                Show more
                            </button>
                        </div>

                        <div className="flex items-center gap-4 text-gray-400 text-xl">
                            <button className="hover:text-white">♡</button>
                            <button className="hover:text-white">↔</button>
                            <button className="hover:text-white">👁</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER BAR */}
            <section className="w-full lg:-mt-22 bg-primary text-primary py-6 px-4 sm:px-8 lg:px-6 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">

                <div className="flex items-center gap-3">
                    <button className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full btn-primary text-primary">
                        <Play size={16} className="ml-1 sm:size-[18px]" />
                        <span className="absolute inset-0 rounded-full btn-primary opacity-30 blur-md" />
                    </button>
                    <span className="text-sm font-semibold">Play Video</span>
                </div>


                <div className="flex flex-wrap justify-center sm:justify-start items-start gap-6 sm:gap-10">
                    {trendmark.map((item) => (
                        <div key={item.id} className="text-primary text-center sm:text-left">
                            <p className="text-xs text-gray-400 mb-1">{item.id}</p>
                            <p className="font-semibold">Trendmark</p>
                            <p className={`text-sm ${item.color}`}>
                                {item.name.split(" ").slice(0, 3).join(" ")} <br />
                                {item.name.split(" ").slice(3).join(" ")}
                            </p>
                        </div>
                    ))}
                </div>


                <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                    <div className="flex items-center gap-3 mb-2">
                        <p className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                            Sizes:
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-6 flex items-center justify-center bg-secondary text-black text-xs font-bold rounded">
                                34
                            </span>
                            <span className="text-gray-400 text-xs">36</span>
                            <span className="text-gray-400 text-xs">38</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-xl sm:text-2xl font-extrabold">780.00 USD</p>
                        <p className="text-sm nev-text-secondary line-through">800.00 USD</p>
                    </div>

                    <button className="flex items-center gap-2 nev-text-secondary  transition-colors px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-primary text-xs sm:text-sm font-bold uppercase shadow-[0_0_20px_rgba(255,100,50,0.5)] mt-3 sm:mt-4">
                        Add to Cart
                        <ShoppingCart size={16} />
                    </button>
                </div>
            </section>
        </section>
    );
}
