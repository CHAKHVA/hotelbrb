"use client";

import { usePathname } from "next/navigation";

export default function HeaderImage() {
    const pathName = usePathname();

    return (
        <div
            className="relative h-[50vh] w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/images/logo.png')",
            }}
        >
            <h1 className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 text-center text-white capitalize font-bold shadow-md text-5xl md:text-6xl xl:text-8xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {pathName.slice(1)}
            </h1>
        </div>
    );
}
