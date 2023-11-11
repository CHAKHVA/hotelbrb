"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "ROOMS", href: "/rooms" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT", href: "/contact" },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState(usePathname());

    return (
        <header className="sticky inset-x-0 top-0 z-50 bg-opacity-0 font-sans border-black">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Image
                        src="/img/pngegg.png"
                        alt="Hotel Logo"
                        width={150}
                        height={50}
                    />
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white z-50"
                    >
                        {isMobileMenuOpen ? (
                            <Bars3Icon
                                className="h-6 w-6 hidden"
                                aria-hidden="true"
                            />
                        ) : (
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
                <nav
                    className={`${
                        isMobileMenuOpen ? "hidden" : ""
                    } md:flex space-x-4 text-lg hidden`}
                >
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`transition duration-200 ease-in-out hover:text-orange-500 
                            ${
                                activePage === item.href
                                    ? "text-orange-500"
                                    : "text-white"
                            }`}
                            onClick={() => setActivePage(item.href)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
            <div
                className={`${
                    isMobileMenuOpen ? "block" : "hidden"
                } md:hidden fixed inset-0 bg-black bg-opacity-75`}
            >
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white absolute top-4 right-4 z-50"
                >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <nav className="h-full flex flex-col items-center justify-center space-y-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-lg p-2 rounded-lg ${
                                activePage === item.name
                                    ? "text-orange-500"
                                    : "text-white"
                            }`}
                            onClick={() => {
                                setActivePage(item.name);
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
