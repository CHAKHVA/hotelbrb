"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState(usePathname());
    const [isSticky, setIsSticky] = useState(false);

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Rooms", href: "/rooms" },
        { name: "Restaurant", href: "/restaurant" },
        { name: "Gallery", href: "/gallery" },
        { name: "Conctact", href: "/contact" },
    ];

    const handleNav = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        setActivePage(usePathname);
    }, [usePathname()]);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 96);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`${
                isSticky ? "fixed top-0 bg-[#191919]" : "absolute top-24"
            } z-50 w-full h-24 transition-colors duration-300`}
        >
            <div className="container flex justify-between items-center h-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <Link href={"/"} onClick={() => setActivePage("/")}>
                    <Image
                        src="/images/logo.png"
                        alt="Hotel Logo"
                        width={150}
                        height={50}
                    />
                </Link>
                <nav className="hidden md:flex">
                    <ul className="hidden md:flex">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <li
                                    className={`ml-10 uppercase text-xl transition duration-200 ease-in-out hover:text-orange-500 
                            ${
                                activePage === item.href
                                    ? "text-orange-500"
                                    : "text-white"
                            }`}
                                    onClick={() => setActivePage(item.href)}
                                >
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>
                <div
                    onClick={handleNav}
                    className="md:hidden cursor-pointer pl-24"
                >
                    <Bars3Icon
                        className="text-white h-9 w-9"
                        aria-hidden="true"
                    />
                </div>
            </div>
            <div
                className={`${
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                } fixed top-0 left-0 w-full h-screen bg-black ease-in-out duration-300 md:hidden`}
            >
                <div
                    onClick={handleNav}
                    className="cursor-pointer text-white absolute top-5 right-5"
                >
                    <XMarkIcon className="h-9 w-9" aria-hidden="true" />
                </div>
                <nav className="flex flex-col justify-center items-center h-full w-full">
                    <ul className="flex flex-col items-center gap-6">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <li
                                    className={`uppercase w-40 text-center text-xl py-2 border-b-2 border-transparent transition duration-200 ease-in-out hover:text-orange-500 hover:border-orange-500
                        ${
                            activePage === item.href
                                ? "text-orange-500"
                                : "text-white"
                        }`}
                                    onClick={() => {
                                        setActivePage(item.href);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
