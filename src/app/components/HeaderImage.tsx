"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HeaderImage() {
    const pathName = usePathname();

    return (
        <div
            className="relative h-[50vh] w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/img/img_3.png')",
            }}
        >
            <h1 className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 text-center text-white capitalize font-bold shadow-md text-5xl md:text-6xl xl:text-8xl">
                {pathName.slice(1)}
            </h1>
        </div>
    );
}
